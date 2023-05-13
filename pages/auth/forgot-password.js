import ForgotPasswordContainer from '@/containers/forgotPassword.container';

export default function ForgotPasswordPage() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='h-100 flex w-full items-center justify-center'>
        <div className='sm:w5/6 lg:w1/2 flex h-full w-full flex-col items-center justify-center bg-white md:w-2/3 xl:w-1/3 2xl:w-1/3'>
          <ForgotPasswordContainer />
        </div>
      </div>
    </div>
  );
}
