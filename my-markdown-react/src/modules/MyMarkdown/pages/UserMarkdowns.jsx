import { MyMarkdownLayout } from "../layout/MyMarkdownLayout"
import { MarkdownList } from "../../../components";
import { UserCard } from "../components";

export const UserMarkdowns = () => {
  return (
    <MyMarkdownLayout>

      <div className="p-5">

        <UserCard />

        <section className="mt-5">

          <h1 className="font-bold text-xl mb-5">Axel Montiel's markdowns</h1>

          <MarkdownList array={[1,1,1,1,1,1,1]} />

        </section>

      </div>


    </MyMarkdownLayout>
  )
}
