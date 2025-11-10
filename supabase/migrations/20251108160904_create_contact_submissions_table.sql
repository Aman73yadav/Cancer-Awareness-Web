/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact person's name
      - `email` (text) - Contact person's email address
      - `message` (text) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `ip_address` (text, optional) - IP address for spam prevention
      - `user_agent` (text, optional) - Browser info for analytics

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public to insert contact submissions (write-only)
    - No read policies - admin access only via service role

  3. Indexes
    - Index on `created_at` for efficient date-based queries
    - Index on `email` for duplicate checking
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);