import ForgotPasswordContainer from '@/containers/forgotPassword.container';

export default function ForgotPasswordPage() {
  return (
    <section className='flex justify-center xl:pt-12'>
      <div className='w-full max-w-3xl flex-col items-center justify-center rounded-xl border bg-white p-6'>
        <ForgotPasswordContainer />
      </div>
    </section>
  );
}
