import { Link } from "react-router-dom"

export const Brand = () => {
  return (
    <Link to='/'>
      <h1 className='text-2xl'>My<span className='text-black font-bold'>Markdown</span></h1>
    </Link>
  )
}
