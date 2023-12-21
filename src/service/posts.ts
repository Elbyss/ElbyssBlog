import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  desc: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string }; // intersection type(typescript)

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
키;

export async function getpostData(filename: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${filename}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === filename)
  );
  if (!metadata) throw new Error(`${filename}을 찾을 수 없음!`);
  const content = await readFile(filePath, 'utf-8');
  return {
    ...metadata,
    content,
  };
}
