import ProviderBtn from '@/components//ProviderBtn';

export default function Providers({ providers, label }) {
  return (
    <div className='mt-3 grid grid-cols-2 gap-x-4 gap-y-2'>
      {providers.map(({ id, name }) => {
        if (name == 'Credentials') return;
        return <ProviderBtn key={id} id={id} label={`${label} with ${name}`} />;
      })}
    </div>
  );
}
