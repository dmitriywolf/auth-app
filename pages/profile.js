import Head from 'next/head';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function ProfilePage() {
  const { data: session } = useSession();

  const event = new Date(session?.expires);

  return (
    <>
      <Head>
        <title>{session?.user?.name || 'Profile'}</title>
      </Head>
      <section className='flex flex-1'>
        <div className='container mx-auto'>
          <div className='mt-5 flex w-full flex-col items-center gap-6 rounded-xl border bg-white p-4 md:flex-row'>
            {session?.user?.image && (
              <Image
                className='rounded-lg'
                src={session?.user?.image}
                alt={`${session?.user?.name} image`}
                width={150}
                height={150}
              />
            )}
            <div className='flex flex-col gap-1 px-2 md:px-0'>
              <p className='flex items-center text-sm md:gap-2 md:text-base'>
                <span className='w-20 text-slate-400'>Name:</span>
                <span className='font-semibold'>{session?.user?.name}</span>
              </p>
              <p className='flex items-center text-sm md:gap-2 md:text-base'>
                <span className='w-20 text-slate-400'>Email:</span>
                <span>{session?.user?.email}</span>
              </p>
              <p className='flex items-center text-sm md:gap-2 md:text-base'>
                <span className='w-20 text-slate-400'>Expires to:</span>
                <span>{event.toLocaleDateString('en-GB', options)}</span>
              </p>
              <p className='flex items-center text-sm md:gap-2 md:text-base'>
                <span className='w-20 text-slate-400'>Logged by:</span>
                <span className='inline-block rounded-md bg-primary px-2 capitalize leading-8 text-slate-50'>
                  {session?.user?.provider}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
