import { FaSearch } from "react-icons/fa"

export const SearchBar = () => {
  return (
    <div className="flex rounded-md overflow-hidden">
      
      <input
        type="search"
        className="p-5 block w-11/12 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Search markdown title..."
      />

      <button className="w-1/12 text-xl flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-800 transition">
        <FaSearch />
      </button>
    </div>
  )
}
