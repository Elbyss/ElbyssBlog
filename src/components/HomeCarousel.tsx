'use client';
import Carousel from 'react-multi-carousel';

export default function HomeCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className='text-red-400 border-2 h-60 w-128 flex text-center'
    >
      <div>포스트 1</div>
      <div>포스트 2</div>
      <div>포스트3 3</div>
      <div>포스트 4</div>
    </Carousel>
  );
}
