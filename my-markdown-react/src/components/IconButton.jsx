
export const IconButton = ({ type, text, icon, customClickEvent }) => {
  return (
    <button
      type={ type }
      onClick={ customClickEvent }
      className='bg-purple-500 hover:bg-purple-800 transition py-2 px-8 rounded-md text-white flex gap-2 justify-center items-center w-full'
    >
      { icon }
      { text }
    </button>
  )
}
