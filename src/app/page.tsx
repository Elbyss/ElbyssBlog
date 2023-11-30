import HomeCarousel from '@/components/HomeCarousel';
import Profile from '@/components/Profile';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home() {
  return (
    <>
      <Profile />
      <HomeCarousel />
    </>
  );
}
