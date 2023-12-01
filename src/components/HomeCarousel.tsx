import { getNonFeaturedPosts } from '@/service/posts';
import CarouselCard from './CarouselCard';
import PostCard from './PostCard';

export default async function HomeCarousel() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4 px-40'>
      <h2 className='text-2xl font-bold my-2'>이건 오때?</h2>
      <CarouselCard>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </CarouselCard>
    </section>
  );
}
