import { signIn } from 'next-auth/react';
import {
  FaDiscord,
  // FaFacebook,
  FaGithub,
  FaGoogle,
  // FaSpotify,
  // FaTwitter
} from 'react-icons/fa';
import { SiAuth0 } from 'react-icons/si';

const colors = {
  google: '#DB4437',
  // facebook: '#4285F4',
  auth0: '#eb5424',
  github: '#333',
  discord: '#7289da',
  // spotify: '#1DB954',
  // twitter: '#1DA1F2',
};

const getIcon = (id) => {
  switch (id) {
    case 'google':
      return <FaGoogle />;
    // case 'facebook':
    //   return <FaFacebook />;
    case 'auth0':
      return <SiAuth0 />;
    case 'github':
      return <FaGithub />;
    case 'discord':
      return <FaDiscord />;
    // case 'spotify':
    //   return <FaSpotify />;
    // case 'twitter(Leagcy)':
    //   return <FaTwitter />;
    default:
      return;
  }
};

export default function ProviderBtn({ id, label }) {
  const signInHandler = () => {
    signIn(id);
  };

  return (
    <button
      onClick={signInHandler}
      className='mb-2 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'
      type='button'
      style={{ background: colors[id] }}
    >
      {getIcon(id)}
      {label}
    </button>
  );
}
