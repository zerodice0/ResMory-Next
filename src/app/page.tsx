import supabase from '../module/supabase';
import WritePost from '../components/write_review/write_review';

const test = async () => {
  const {data, error} = await supabase
  .from('store')
  .select();

  return data;
}

export default function Page() {
  test();
  
  return (
    <WritePost></WritePost>
  )
}
