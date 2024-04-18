import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-slate-100 bg-gradient-to-r from-black">
      <div className='mt-20 md:mt-0 m-auto'>
        <h1 className="text-sm md:text-5xl font-semibold mb-1 md:mb-0">{title}</h1>
        <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>
        <div className='flex justify-start '> {/* Adjusted justify-start for phone screens */}
          <button className="bg-white text-black p-2 px-4 md:p-4 md:px-12 text-xl rounded-lg font-bold hover:bg-opacity-70">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="text-xl mx-2 p-2 md:mx-2 bg-gray-500 md:text-white md:p-4 md:px-12 bg-opacity-50 rounded-lg hover:bg-opacity-70">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="hidden md:inline md:ml-2 md:text-xl">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
