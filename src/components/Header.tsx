import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center m-4 mx-auto w-[80vw]'>
      <Link href='/'>
        <span className='font-bold text-2xl'>엘비스 연구실</span>
      </Link>
      <nav className='flex gap-6'>
        <Link href='/'>홈</Link>
        <Link href='/about'>소개</Link>
        <Link href='/posts'>글목록</Link>
        <Link href='/contact'>문의</Link>
      </nav>
    </header>
  );
}
