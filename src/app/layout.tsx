import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
