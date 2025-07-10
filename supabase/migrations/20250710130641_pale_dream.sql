/*
  # Create Thermopack Requirements Table

  1. New Tables
    - `thermopack_requirements`
      - `id` (uuid, primary key)
      - `form_data` (jsonb) - Complete form data
      - `submitter_name` (text) - Name of person submitting
      - `thermopack_type` (text) - Type of thermopack system
      - `units_to_monitor` (text) - Number of units to monitor
      - `operating_hours` (text) - Operating hours pattern
      - `data_capture_method` (text) - Current data capture method
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `thermopack_requirements` table
    - Add policy for public insert access (since this is a requirements form)
    - Add policy for authenticated users to read all data
*/

CREATE TABLE IF NOT EXISTS thermopack_requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_data jsonb NOT NULL,
  submitter_name text,
  thermopack_type text,
  units_to_monitor text,
  operating_hours text,
  data_capture_method text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE thermopack_requirements ENABLE ROW LEVEL SECURITY;

-- Allow public insert access for form submissions
CREATE POLICY "Allow public insert"
  ON thermopack_requirements
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read all requirements
CREATE POLICY "Allow authenticated read"
  ON thermopack_requirements
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update requirements
CREATE POLICY "Allow authenticated update"
  ON thermopack_requirements
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_thermopack_requirements_updated_at
  BEFORE UPDATE ON thermopack_requirements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();