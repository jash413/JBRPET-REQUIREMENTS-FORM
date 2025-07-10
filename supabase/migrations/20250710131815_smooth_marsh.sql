/*
  # Fix RLS policies for thermopack_requirements table

  1. Security Updates
    - Drop existing policies that may be conflicting
    - Create new policy to allow anonymous users to insert form data
    - Ensure authenticated users can read and update their own data
    - Keep the existing trigger for updated_at

  2. Changes Made
    - Allow anonymous (public) users to insert new requirements
    - Allow authenticated users to read all data
    - Allow authenticated users to update all data
    - Maintain data integrity with proper RLS
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public insert" ON thermopack_requirements;
DROP POLICY IF EXISTS "Allow authenticated read" ON thermopack_requirements;
DROP POLICY IF EXISTS "Allow authenticated update" ON thermopack_requirements;

-- Create new policy to allow anonymous users to insert form submissions
CREATE POLICY "Allow anonymous insert"
  ON thermopack_requirements
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all data
CREATE POLICY "Allow authenticated read all"
  ON thermopack_requirements
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update all data
CREATE POLICY "Allow authenticated update all"
  ON thermopack_requirements
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);