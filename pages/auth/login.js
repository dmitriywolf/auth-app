import { getProviders } from 'next-auth/react';

import Divider from '@/components/Divider';
import Providers from '@/components/Providers';
import LogInContainer from '@/containers/logIn.container';

export default function LoginPage({ providers }) {
  return (
    <section className='flex flex-1'>
      <div className='container mx-auto'>
        <div className='flex justify-center lg:pt-12'>
          <div className='w-full max-w-3xl flex-col items-center justify-center rounded-xl border bg-white p-6'>
            <LogInContainer />
            <Divider />
            <Providers providers={providers} label='Log in' />
          </div>
        </div>
      </div>
    </section>
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
