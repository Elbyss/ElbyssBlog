import MarkdownViewer from './MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, content, date, desc } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end text-sky-600'>
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{desc}</p>
      <div className='w-44 border-2 border-sky-500 mt-4 mb-8'></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
