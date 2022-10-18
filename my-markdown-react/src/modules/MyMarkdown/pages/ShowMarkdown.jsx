import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { MyMarkdownLayout } from "../layout/MyMarkdownLayout";
import profilePlaceholder from '../../../assets/profile-placeholder.png';

const markdown = `# Example title 
_Lorem ipsum, dolor sit amet consectetur adipisicing elit._ **Blanditiis quod sint qui possimus adipisci id quo.**
Ipsam nemo recusandae unde eaque, quibusdam libero quis harum corrupti assumenda, necessitatibus at natus.# Example title 
_Lorem ipsum, dolor sit amet consectetur adipisicing elit._ **Blanditiis quod sint qui possimus adipisci id quo.**
Ipsam nemo recusandae unde eaque, quibusdam libero quis harum corrupti assumenda, necessitatibus at natus.# Example title 
_Lorem ipsum, dolor sit amet consectetur adipisicing elit._ **Blanditiis quod sint qui possimus adipisci id quo.**`

export const ShowMarkdown = () => {
  return (
    <MyMarkdownLayout>

      <div className="flex items-center justify-between bg-indigo-500 px-5 py-3">

        <div className="text-white">
          <h1 className="font-bold text-2xl">Example title</h1>
          <p>By <Link to='/markdowns/user/1' className="font-bold">Axel Montiel</Link></p>
        </div>

        <div className='h-10 w-10 md:h-12 md:w-12 bg-white'>
          <Link to='/markdowns/user/1' >
            <img src={ profilePlaceholder } alt="profile placeholder" className='h-10 w-10 md:h-12 md:w-12 object-contain' />
          </Link>
        </div>

      </div>
      
      <div className="bg-white prose max-w-none px-5 py-3">
        <ReactMarkdown>{ markdown }</ReactMarkdown>
      </div>

    </MyMarkdownLayout>

  )
}
