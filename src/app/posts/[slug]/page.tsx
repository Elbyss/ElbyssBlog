import MarkdownViewer from '@/components/MarkdownViewer';
import PostFooter from '@/components/PostFooter';
import { getpostData } from '@/service/posts';
import Image from 'next/image';
import path from 'path';
type Props = {
  params: {
    slug: string;
  };
};
export default async function Postpage({ params: { slug } }: Props) {
  const { title, content, date, path, desc } = await getpostData(slug);

  return (
    <>
      <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
        <Image
          className='w-full h-1/5 max-h-[500px]'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={760}
          height={420}
        />
        <section className='flex flex-col p-4'>
          <div className='flex items-center self-end text-sky-600'>
            <p className='font-semibold ml-2'>{date.toString()}</p>
          </div>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <p className='text-xl font-bold'>{desc}</p>
          <div className='w-44 border-2 border-sky-500 mt-4 mb-8'></div>
          <MarkdownViewer content={content} />
        </section>
      </article>
      <PostFooter title={title} date={date} path={path} desc={desc} />
    </>
  );
}
