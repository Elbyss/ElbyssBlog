import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };
export default function PostCard({
  post: { title, desc, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-t-lg shadow-lg overflow-hidden border-2 border-purple-50 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 duration-150'>
        <Image
          className='w-full h-[20vh]'
          src={`/images/posts/${path}.png`}
          width={200}
          height={150}
          alt={title}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{date.toString()}</time>
          <h3 className='text-2xl text-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{desc}</p>
          <span className='rounded-lg p-1 bg-green-200 my-2'>{category}</span>
        </div>
      </article>
    </Link>
  );
}
