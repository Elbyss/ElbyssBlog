'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

const DEFAULT_VALUE = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  type Form = {
    from: string;
    subject: string;
    message: string;
  };
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [form, setForm] = useState<Form>(DEFAULT_VALUE);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '전송 완료', state: 'success' });
        setForm(DEFAULT_VALUE);
      })
      .catch(() => {
        setBanner({ message: '전송 실패', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='w-full max-w-md flex flex-col items-center  bg-[#7e538f] rounded-xl gap-2 m-4 p-4 mx-auto'
      >
        <label htmlFor='from' className='text-yellow-400 font-semibold'>
          이메일
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject' className='text-yellow-400 font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message' className='text-yellow-400 font-semibold'>
          메세지
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
        />
        <button>제출</button>
      </form>
    </>
  );
}
