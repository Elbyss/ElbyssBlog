import Categories from '@/components/Categories';
import FilterablePost from '@/components/FilterablePost';
import Pinned from '@/components/Pinned';
import PostCard from '@/components/PostCard';
import PostsGrid from '@/components/PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <>
      <FilterablePost posts={posts} categories={categories} />
    </>
  );
}
