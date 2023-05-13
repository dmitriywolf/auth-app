import Link from 'next/link';

import { PATHS } from '@/common/constants';

export default function AuthMenu() {
  return (
    <div className='flex items-center gap-x-4'>
      <Link className='px-4 leading-9 text-gray-500 hover:text-cyan-500' href={PATHS.logIn}>
        LogIn
      </Link>

      <Link className='rounded-md bg-cyan-500 px-4 leading-9 text-slate-50 hover:bg-purple-400' href={PATHS.signUp}>
        SignUp
      </Link>
    </div>
  );
}
