import { MyMarkdownLayout } from "../layout/MyMarkdownLayout"
import { MarkdownList, SearchBar } from "../../../components"

export const Explore = () => {
  return (
    <MyMarkdownLayout>
      <div className="p-5">

        <h1 className="font-bold text-3xl text-indigo-500">Explore markdowns</h1>

        <div className="shadow-md">
          <SearchBar />
        </div>

        <div className="mt-5">

          <h2 className="text-lg text-gray-700 mb-5">Your markdowns</h2>
          <MarkdownList array={[1,1]} />

          <hr className="my-5"/>

          <h2 className="text-lg text-gray-700 mb-5">More markdowns</h2>
          <MarkdownList array={[1,11,1,1,1,1,1,1,1,1]} />

        </div>

      </div>
    </MyMarkdownLayout>
  )
}
