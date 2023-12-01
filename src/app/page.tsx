import HomeCarousel from '@/components/HomeCarousel';
import Pinned from '@/components/Pinned';
import Profile from '@/components/Profile';
export default function HomePage() {
  return (
    <>
      <Profile />
      <Pinned />
      <HomeCarousel />
    </>
  );
}
