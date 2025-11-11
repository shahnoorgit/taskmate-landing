-- ========================================
-- TaxMate Waitlist Table Schema
-- ========================================
-- Run this SQL in your Supabase SQL Editor
-- (Supabase Dashboard → SQL Editor → New Query → Paste & Run)

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous users) to insert (for the public waitlist form)
CREATE POLICY "Allow public inserts" 
  ON waitlist 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view (for you to see signups)
CREATE POLICY "Allow authenticated reads" 
  ON waitlist 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC);

-- ========================================
-- Verification Query (Optional)
-- ========================================
-- Run this to verify the table was created successfully:
-- SELECT * FROM waitlist;

-- ========================================
-- Stats Query (Optional)
-- ========================================
-- Run this to see signup stats:
-- SELECT 
--   COUNT(*) as total_signups,
--   COUNT(name) as with_name,
--   COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as last_24h
-- FROM waitlist;

