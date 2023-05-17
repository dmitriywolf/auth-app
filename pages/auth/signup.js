import Head from 'next/head';
import { getProviders } from 'next-auth/react';

import Providers from '@/components/Providers';
import { Divider, Plate, Section } from '@/components/UI';
import SignUpContainer from '@/containers/signUp.container';

export default function SignupPage({ providers }) {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Section>
        <Plate>
          <SignUpContainer />
          <Divider />
          <Providers providers={providers} label='Signup' />
        </Plate>
      </Section>
    </>
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
