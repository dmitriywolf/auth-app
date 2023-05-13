import { BeatLoader } from 'react-spinners';

export default function SlideBtn(props) {
  const { type, text, slide_text, disabled, icon } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className='group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-md border-2 bg-blue-500 px-8 py-3 font-medium transition duration-300 ease-out'
    >
      {disabled ? (
        <BeatLoader color='#fff' size={15} />
      ) : (
        <>
          <span className='ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-600 text-white duration-300 group-hover:translate-x-0'>
            {icon}&nbsp;{slide_text}
          </span>
          <span className='ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full'>
            {text}
          </span>
          <span className='invisible relative'>{text}</span>
        </>
      )}
    </button>
  );
}
