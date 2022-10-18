import profilePlaceholder from '../../../assets/profile-placeholder.png';

export const UserCard = () => {
  return (
    <div className="bg-indigo-500 md:flex md:justify-between md:gap-5 p-3 rounded-md">

      <div className="flex items-center gap-4 mb-5 md:mb-0">

        <div className='h-10 w-10 md:h-12 md:w-12 bg-white'>
          <img src={profilePlaceholder} alt="profile placeholder" className='h-10 w-10 md:h-12 md:w-12 object-contain' />
        </div>

        <div>
          <h2 className="text-white font-bold text-lg">Axel Montiel</h2>
          <span className="text-gray-100">Joined 2 weeks ago</span>
        </div>

      </div>

      <div className="bg-indigo-600 rounded-md text-white p-5 space-y-5 md:flex-1">

        <h3 className="text-xl text-gray-100">Markdowns created</h3>

        <div className="text-right">
          <span className="text-2xl font-bold">13</span>
        </div>

      </div>

    </div>
  )
}
