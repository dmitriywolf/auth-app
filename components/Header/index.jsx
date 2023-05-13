import { useSession } from 'next-auth/react';

import AuthMenu from '@/components//AuthMenu';
import Logo from '@/components//Logo';
import ProfileMenu from '@/components/ProfileMenu';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className='absolute h-20 w-full'>
      <div className='container mx-auto h-full'>
        <div className='flex h-full items-center justify-between'>
          <Logo />
          {session ? <ProfileMenu session={session} /> : <AuthMenu />}
        </div>
      </div>
    </header>
  );
}
