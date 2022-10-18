import { DashboardLayout } from "../layout"
import { MarkdownList, SearchBar } from "../../../components"
import { useDocumentTitle } from "../../../hooks";

export const UserMarkdowns = () => {

  useDocumentTitle("My markdowns");

  return (
    <DashboardLayout>

      <h1 className="text-gray-700 font-bold text-lg">Your markdowns</h1>

      <div className="my-10">
        <SearchBar />
      </div>
      
      <MarkdownList array={[1,2,3,4,5]} />

    </DashboardLayout>
  )
}
