import { getProviders } from 'next-auth/react';

import Divider from '@/components/Divider';
import Providers from '@/components/Providers';
import LogInContainer from '@/containers/logIn.container';

export default function LoginPage({ providers }) {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='h-100 flex w-full items-center justify-center'>
        <div className='sm:w5/6 lg:w1/2 flex h-full w-full flex-col items-center justify-center bg-white md:w-2/3 xl:w-1/3 2xl:w-1/3'>
          <LogInContainer />
          <Divider />
          <Providers providers={providers} label='Log in' />
        </div>
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
