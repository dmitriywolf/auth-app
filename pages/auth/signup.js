import { getProviders } from 'next-auth/react';

import Providers from '@/components/Providers';
import SignUpContainer from '@/containers/signUp.container';

export default function SignupPage({ providers }) {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='h-100 flex w-full items-center justify-center'>
        <div className='sm:w5/6 lg:w1/2 flex h-full w-full flex-col items-center justify-center bg-white md:w-2/3 xl:w-1/3 2xl:w-1/3'>
          <SignUpContainer />
          <div className='flex w-full items-center justify-between px-12'>
            <div className='h-[1px] w-full bg-gray-300'></div>
            <span className='mx-6 text-sm uppercase text-gray-400'>Or</span>
            <div className='h-[1px] w-full bg-gray-300'></div>
          </div>
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
