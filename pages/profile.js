import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div className='home flex min-h-screen items-center justify-center bg-black text-white'>
      <div className='container mx-auto'>
        <div className='relative flex w-full flex-col rounded-lg border border-white'>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='w-full text-right'>
              <div className='px-3 py-6'>
                <button
                  className='text-md mb-1 rounded-md bg-blue-500 px-8 py-2 font-bold uppercase transition-all duration-150 ease-linear hover:bg-blue-700 sm:mr-2'
                  onClick={signOutHandler}
                >
                  Log out
                </button>
              </div>
            </div>
            <div className='flex w-full justify-center'>
              {session?.user?.image && (
                <Image
                  src={session?.user?.image}
                  alt={`${session?.user?.name} image`}
                  className='rounded-full'
                  width={90}
                  height={90}
                />
              )}
            </div>
            <div className='mt-12 text-center'>
              <h3 className='mb-2 text-4xl font-semibold'>{session?.user?.name}</h3>
              <div className='mb-2 text-sm font-bold'>{session?.user?.email}</div>
              <div className='mb-2 mt-10'>
                You logged in using &nbsp;
                <span className='italix ml-2 rounded-md bg-blue-400 px-4 py-1 text-lg font-bold capitalize text-white'>
                  {session?.user?.provider}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
