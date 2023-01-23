import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import resume from "../assets/emmanuelosayame_resume.pdf";

const MiniHeader = ({
  header,
  headerOff,
  scrollToProjects,
}: {
  header: Boolean;
  headerOff: () => void;
  scrollToProjects: () => void;
}) => {
  return (
    <div className='p-2 backdrop-blur-lg bg-white bg-opacity-40 rounded-[50px] fixed z-20 top-3 right-2 md:right-7'>
      <div className='flex flex-row  bg-white rounded-xl space-x-2 px-4 py-1 drop-shadow-md'>
        {header ? (
          <>
            <button
              className='py-2 text-gray-700 font-semibold'
              onClick={() => scrollToProjects()}>
              Projects
            </button>
            <a className='py-2 text-red-500 font-semibold' href={resume}>
              Resume
            </a>
            {/* <Button variant='link' px={0} py={2} color='blue.600'>
              My Shelf
            </Button> */}
          </>
        ) : (
          <button
            className='text-gray-500 hover:bg-opacity-60'
            aria-label='mini-menu'
            onClick={headerOff}>
            <Bars3BottomLeftIcon width={25} stroke='gray' />
          </button>
        )}
      </div>
    </div>
  );
};

export default MiniHeader;
