import { BsMarkdown, MdNavigateNext } from 'react-icons/all';
import { Link } from 'react-router-dom';

export const MarkdownItem = () => {
  return (
    <Link className="bg-gray-600 hover:brightness-105 transition rounded-md overflow-hidden w-80 shadow-md">

      <div className='py-2 overflow-hidden'>
        <div className='inline-block rotate-12 scale-[1.8]'>
          <BsMarkdown size='4rem' color='white' />
        </div>
      </div>

      <div className='bg-gray-500 rounded-md p-5'>

        <h5 className='text-white font-bold text-lg text-right'>Example</h5>

        <div className="mt-2 flex items-center justify-end gap-2">
          <span className="text-gray-200">View</span>
          <button
            className="text-4xl bg-gray-600 text-white rounded-full"
          ><MdNavigateNext width='64em' /></button>
        </div>

      </div>

    </Link>
  )
}
