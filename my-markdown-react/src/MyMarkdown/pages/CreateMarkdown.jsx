import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BsChevronBarDown, FiSave } from "react-icons/all";
import { NavBar } from '../components/NavBar';

export const CreateMarkdown = () => {

  const [ toggle, setToggle ] = useState(false);
  const [ markdown, setMarkdown ] = useState('# Hello world');

  return (
    <div>

      <NavBar />

      <main className='h-screen md:h-auto overflow-hidden bg-gray-200'>

        <form className='md:w-[95%] md:mx-auto md:max-w-[1920px]'>

          <div className='md:my-2'>

            <div className='bg-gray-100 p-3 md:flex md:justify-between md:rounded-md'>

              <div>
                <div className='flex items-center justify-between'>

                  <label htmlFor='title' className="text-lg font-medium text-gray-700">Title</label>

                  <button
                    type='button'
                    className='bg-purple-500 py-2 px-8 rounded-md text-white md:hidden'
                  ><FiSave size='1.2rem'/></button>

                </div>

                <div className="mt-1">
                  <input
                    type='text'
                    id='title'
                    name='title'
                    className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder='Markdown title'
                  />
                </div>
              </div>

              <button
                type='button'
                className='bg-purple-500 py-2 px-12 rounded-md text-white hidden md:block'
              ><FiSave size='1.5rem'/></button>

            </div>

          </div>

          <div className='mt-2 md:mt-0 md:grid md:grid-cols-2 md:gap-2 md:h-screen'>

            <div className='w-full md:bg-gray-300 md:overflow-y-scroll md:flex md:justify-center md:rounded-md'>
              <div className={`md:h-full prose md:flex-1 p-3 ${ toggle ? 'h-[12vh] overflow-hidden' : 'h-[70vh] overflow-y-scroll' }` }>
                <ReactMarkdown>{ markdown }</ReactMarkdown>
              </div>
            </div>

            <div className='w-full rounded-t-xl bg-gray-200'>

              <button
                onClick={ () => setToggle( !toggle ) }
                type='button'
                className='w-full text-white bg-gray-800 flex justify-center py-3 rounded-t-xl md:hidden'
              >
                <BsChevronBarDown size='2rem' style = {{transform: `${ toggle ? '' : 'rotate(180deg)' }` }}/>
              </button>

              <div className='py-4 px-4 md:p-0 h-screen'>
                <textarea 
                className='w-full h-[70%] md:h-full rounded p-2 border-gray-300 border-2 resize-none'
                name="markdown" 
                id="markdown"
                placeholder='# Hello world!'
                value={ markdown }
                onChange={ (event) => setMarkdown(event.target.value) }
                ></textarea>
              </div>

            </div>
            
          </div>

        </form>

      </main>

    </div>
  )
}
