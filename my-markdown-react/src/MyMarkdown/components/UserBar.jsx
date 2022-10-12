import profilePlaceholder from '../../assets/profile-placeholder.png';

export const UserBar = () => {
  return (
    <div className='flex bg-white items-center justify-between px-3 py-4'>

      <span className='font-bold'>Axel Montiel</span>

      <div className='flex items-center gap-5'>

        <div>
          <button
            className='bg-red-500 text-white py-1 px-3 rounded-md'
          >Log out</button>
        </div>

        <div className="h-14 w-14">
          <img src={ profilePlaceholder } alt="profile placeholder" className='h-14 w-14 object-contain' />
        </div>
      </div>

    </div>
  )
}
