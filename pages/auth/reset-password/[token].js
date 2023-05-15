import ResetPasswordContainer from '@/containers/resetPassword.container';

export default function ResetPasswordPage({ token }) {
  return (
    <section className='flex justify-center xl:pt-12'>
      <div className='w-full max-w-3xl flex-col items-center justify-center rounded-xl border bg-white p-6'>
        <ResetPasswordContainer token={token} />
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
