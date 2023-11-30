import Image from 'next/image';

export default function Profile() {
  return (
    <>
      <Image
        src={`/1a03f57b24e7c67ee1fa1e5a23dce3be.jpg`}
        alt='프로필'
        width={300}
        height={300}
        className='rounded-full my-0 mx-auto'
      />
      <section className='flex flex-col text-center'>
        <h2 className='text-sky-500 font-bold text-2xl'>j0n9hyun</h2>
        <span className='text-base'>FrontEnd Engineer</span>
        <p className='text-sm'>안녕하세요 프론트엔드 개발자입니다.</p>
        <button className='my-2 bg-yellow-500 rounded-xl px-4 py-1.5 text-sm font-bold mx-auto text-slate-800'>
          Contact Me
        </button>
      </section>
    </>
  );
}
