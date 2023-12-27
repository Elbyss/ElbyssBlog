import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <section className='flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <Image
            src={`/61DDE84B-EE47-4A4E-8007-0EBC65F9C9A7_1_105_c.jpeg`}
            alt='프로필'
            width={250}
            height={250}
            className='rounded-full my-0 mx-auto'
          />
          <h2 className='text-sky-300 font-bold text-2xl'>j0n9hyun</h2>
          <span className='text-base'>FrontEnd Engineer</span>
          <p className='text-sm'>안녕하세요 프론트엔드 개발자입니다.</p>
          <Link
            href='/contact'
            className='my-2 bg-yellow-500 rounded-xl px-4 py-1.5 text-sm font-bold mx-auto text-slate-800'
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
