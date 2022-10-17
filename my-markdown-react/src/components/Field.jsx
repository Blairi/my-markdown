
export const Field = ({ name, label, placeholder, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={ name } className="block font-medium text-gray-700">{ label }</label>
      <div className="mt-1">
        <input
          type={ type }
          id={ name }
          name={ name }
          className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={ placeholder } 
          value={ value }
          onChange={ onChange }
        />
      </div>
    </div>
  )
}
