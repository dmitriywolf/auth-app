import Link from 'next/link';

import { PATHS } from '@/common/constants';

export default function AuthMenu() {
  return (
    <div className='flex items-center gap-x-4'>
      <Link className='leading-9 hover:text-primary' href={PATHS.logIn}>
        LogIn
      </Link>
      <Link className='rounded-md bg-primary px-4 leading-9 text-slate-50 hover:bg-primaryHover' href={PATHS.signUp}>
        SignUp
      </Link>
    </div>
  );
}
