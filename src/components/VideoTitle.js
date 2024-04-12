
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faInfoCircle  } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-slate-100  bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div className="">
      <button className="bg-white text-black p-4 px-12 text-xl rounded-lg font-bold hover:bg-opacity-70">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70">
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
