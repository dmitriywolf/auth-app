import { getProviders } from 'next-auth/react';

import Providers from '@/components/Providers';
import LogInContainer from '@/containers/logIn.container';
import SignUpContainer from '@/containers/signUp.container';

export default function AuthPage({ tab, providers, callbackUrl, csrfToken }) {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='h-100 flex w-full items-center justify-center'>
        <div className='sm:w5/6 lg:w1/2 flex h-full w-full flex-col items-center justify-center bg-white md:w-2/3 xl:w-1/3 2xl:w-1/3'>
          {tab == 'login' ? <LogInContainer callbackUrl={callbackUrl} /> : <SignUpContainer />}
          <div className='flex w-full items-center justify-between px-12'>
            <div className='h-[1px] w-full bg-gray-300'></div>
            <span className='mx-6 text-sm uppercase text-gray-400'>Or</span>
            <div className='h-[1px] w-full bg-gray-300'></div>
          </div>
          <Providers providers={providers} csrfToken={csrfToken} label={tab === 'login' ? 'Log in' : 'Sign up'} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const tab = query.tab || 'login';
  //const callbackUrl = query.callbackUrl || process.env.NEXTAUTH_URL;

  const providers = await getProviders();

  return {
    props: {
      tab,
      providers: Object.values(providers),
      // callbackUrl,
    },
  };
}
