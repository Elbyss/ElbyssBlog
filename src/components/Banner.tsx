export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';
  return (
    <div className='opacity-90 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center'>
      <p
        className={`shadow-xl p-4 font-semibold rounded-xl ${
          isSuccess ? 'bg-green-300' : 'bg-red-300'
        }`}
      >
        {`${icon} ${message}`}
      </p>
    </div>
  );
}
