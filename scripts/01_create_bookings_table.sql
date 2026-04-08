-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country_code VARCHAR(10),
  date DATE NOT NULL,
  time VARCHAR(5) NOT NULL,
  service VARCHAR(255) NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- Create index on date for filtering by date
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);

-- Enable RLS (Row Level Security)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting new bookings (allow anyone)
CREATE POLICY "Allow anyone to insert bookings"
  ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Create policy for reading bookings (authenticated users only)
CREATE POLICY "Allow authenticated users to view bookings"
  ON bookings
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy for updating bookings (authenticated users only)
CREATE POLICY "Allow authenticated users to update bookings"
  ON bookings
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create policy for deleting bookings (authenticated users only)
CREATE POLICY "Allow authenticated users to delete bookings"
  ON bookings
  FOR DELETE
  USING (auth.role() = 'authenticated');
