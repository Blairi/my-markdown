import { MarkdownItem } from "./"

export const MarkdownList = ({ array = [], limit = 10 }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {
        array.slice(0, limit).map((markdown, index) => (
          <MarkdownItem key={ index } />          
        ))
      }
    </div>
  )
}
