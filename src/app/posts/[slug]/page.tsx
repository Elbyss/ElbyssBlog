import PostContent from '@/components/PostContent';
import PostFooter from '@/components/PostFooter';
import { getpostData } from '@/service/posts';
import Image from 'next/image';
type Props = {
  params: {
    slug: string;
  };
};
export default async function Postpage({ params: { slug } }: Props) {
  const post = await getpostData(slug);
  const { title, content, date, path, desc, next, prev } = post;
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

        <PostContent post={post} />
        <section className='flex shadow-xl'>
          {prev && <PostFooter post={prev} type='prev' />}
          {next && <PostFooter post={next} type='next' />}
        </section>
      </article>
    </>
  );
}
