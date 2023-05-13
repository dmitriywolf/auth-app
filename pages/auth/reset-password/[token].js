import ResetPasswordContainer from '@/containers/resetPassword.container';

export default function ResetPasswordPage({ token }) {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='h-100 flex w-full items-center justify-center'>
        <div className='sm:w5/6 lg:w1/2 flex h-full w-full flex-col items-center justify-center bg-white md:w-2/3 xl:w-1/3 2xl:w-1/3'>
          <ResetPasswordContainer token={token} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
