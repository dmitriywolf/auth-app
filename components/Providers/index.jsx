import ProviderBtn from '@/components//ProviderBtn';

export default function Providers({ providers, label }) {
  return (
    <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-4'>
      {providers.map(({ id, name }) => {
        if (name == 'Credentials') return;
        return <ProviderBtn key={id} id={id} label={`${label} ${name}`} />;
      })}
    </div>
  );
}
