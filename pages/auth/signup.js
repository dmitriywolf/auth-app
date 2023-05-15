import { getProviders } from 'next-auth/react';

import Divider from '@/components/Divider';
import Providers from '@/components/Providers';
import SignUpContainer from '@/containers/signUp.container';

export default function SignupPage({ providers }) {
  return (
    <div className='flex items-center justify-center  xl:pt-12'>
      <div className='w-full max-w-3xl flex-col items-center justify-center rounded-xl border bg-white p-6'>
        <SignUpContainer />
        <Divider />
        <Providers providers={providers} label='Signup' />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers: Object.values(providers),
    },
  };
}
