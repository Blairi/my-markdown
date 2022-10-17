import { Brand } from '../../../ui';

import authImage from '../../../assets/code-image.jpg';

export const AuthLayout = ({ title, children }) => {
  return (
    <div className='grid grid-rows-[1fr_4fr] sm:grid-rows-none sm:grid-cols-2 min-h-screen'>

      <div className='order-2 sm:order-none flex items-center w-full py-12'>

        <div className='bg-gray-100 rounded-md shadow-md mx-auto p-5 sm:p-10 w-[90%] sm:w-[80%] max-w-[500px]'>

          <div className='mb-5'>
            <Brand />
          </div>

          <h2 className='text-lg text-indigo-500 mb-3 font-bold'>{ title }</h2>
          { children }

        </div>

      </div>
      
      <div 
        className='order-1 sm:order-none' 
        style={{ 
          backgroundImage: `url(${authImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    </div>
  )
}
