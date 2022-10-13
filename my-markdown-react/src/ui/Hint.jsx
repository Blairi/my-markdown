import { AiFillInfoCircle } from 'react-icons/all';

export const Hint = ({ hint }) => {
  return (
    <p className="text-sm text-gray-700 flex items-center gap-2">
      <AiFillInfoCircle size='1.3rem' />
      { hint }
    </p>
  )
}
