# ELCODERS Lander - Setup Guide

## Supabase Configuration

### 1. Create Tables
Run the SQL migration in your Supabase dashboard:

```bash
# Go to Supabase Dashboard > SQL Editor
# Copy and paste the contents of: scripts/01_create_bookings_table.sql
# Execute the SQL
```

### 2. Add Environment Variables
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EMAIL_USER=your_gmail_address
EMAIL_PASSWORD=your_gmail_app_password
```

### 3. Get Your Supabase Keys
1. Go to Supabase Dashboard
2. Click on your project
3. Go to Settings > API
4. Copy the URL and `anon` (public) key

### 4. Gmail Setup
1. Enable 2-factor authentication on your Google Account
2. Create an app password at https://myaccount.google.com/apppasswords
3. Use this app password as `EMAIL_PASSWORD`

## Features Fixed & Implemented

✅ Fixed all spelling and grammar errors in FAQ and copy
✅ Simplified hero text and removed redundant content
✅ **Booking button now redirects to WhatsApp chat** (https://wa.link/x7p0yz)
✅ Fixed hydration mismatch error in date input
✅ Removed unused form submission code
✅ Updated FAQ to reflect WhatsApp booking flow
✅ Clean, well-structured component architecture with no build errors

## Database Schema

The `bookings` table stores:
- `id` - Unique booking ID
- `name` - Client name
- `email` - Client email
- `phone` - Client phone number
- `country_code` - Country code (e.g., +234)
- `date` - Preferred appointment date
- `time` - Preferred appointment time
- `service` - Selected service
- `message` - Project details
- `status` - Booking status (pending, confirmed, etc.)
- `created_at` - When booking was created
- `updated_at` - When booking was last updated
