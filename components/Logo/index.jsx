import LogoIcon from '@/public/img/Logo.svg';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <LogoIcon className='rotate-25 h-12 w-12 rotate-12 fill-cyan-500 pr-2' />
      <p className='font-bold uppercase text-gray-400'>NEXT.js Auth</p>
    </div>
  );
}
