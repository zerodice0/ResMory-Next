import { createClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';

const supabaseUrl:string = process.env.SUPABASE_URL ?? "";
const supabaseKey:string = process.env.SUPABASE_KEY ?? "";

export default createClient<Database>(
  supabaseUrl, supabaseKey
)