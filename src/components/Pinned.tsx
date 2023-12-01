import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function Pinned() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <section className='mb-6 px-40'>
        <div className='flex font-bold text-xl my-6 mx-6'>Pinned Posts</div>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
}
