import { PostData } from '@/service/posts';

export default function PostFooter({
  title,
  desc,
  date,
  path,
  content,
}: PostData) {
  return (
    <section className='flex border-sky-500 border-2 text-center rounded-md'>
      <div className='border- border-red-500 flex-1'>{title}</div>
      <div className='border-1 border-purple-500 flex-1'>{desc}</div>
    </section>
  );
}
