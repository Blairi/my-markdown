import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BsChevronBarDown, FaSave } from "react-icons/all";
import { DashboardLayout } from '../layout/DashboardLayout';
import { Field, IconButton } from '../../../components';
import { useDocumentTitle } from '../../../hooks';

export const CreateMarkdown = () => {

  const [ toggle, setToggle ] = useState(false);
  const [ markdown, setMarkdown ] = useState('# Hello world');

  const onSubmit = (event) => {
    event.preventDefault();
  }

  useDocumentTitle("Create markdown");

  return (
    <DashboardLayout>

      <div className='h-screen md:h-auto overflow-hidden bg-gray-200 md:bg-inherit'>

        <form className='md:w-[95%] md:mx-auto md:max-w-[1920px]' onSubmit={ onSubmit }>

          <div className='md:my-2'>

            <div className='bg-gray-100 p-3 space-y-5 md:w-[50%]'>

              <Field 
                label='Title'
                name='title'
                placeholder='Markdown title'
                type='text'
              />

              <IconButton 
                text='Save'
                type='submit'
                icon={ <FaSave /> }
              />

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

      </div>

    </DashboardLayout>
  )
}
