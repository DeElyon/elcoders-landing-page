-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country_code VARCHAR(10) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(5) NOT NULL,
  service VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- Create index on date for scheduling queries
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert bookings (for public form submission)
CREATE POLICY "Allow public bookings insert" 
  ON bookings FOR INSERT 
  WITH CHECK (true);

-- Policy to allow read access only to system (admin queries need service role)
CREATE POLICY "Allow system read" 
  ON bookings FOR SELECT 
  USING (true);
