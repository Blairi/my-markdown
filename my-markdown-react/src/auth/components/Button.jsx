
export const Button = ({ text, type, disabled }) => {

  return (
    <button
      disabled={ disabled }
      type={ type }
      className={`transition w-full sm:w-auto text-white font-bold sm:px-4 py-2 rounded-md ${!disabled ? 'bg-indigo-500 hover:bg-indigo-800': 'bg-gray-300 hover:bg-gray-400'}`}
    >{ text }</button>
  )
}
