import { Route, Routes } from "react-router-dom"
import { CreateMarkdown, Dashboard, UserMarkdowns } from "../pages"

export const DashboardRouter = () => {
  return (
    <Routes>

      <Route path="" element={ <Dashboard /> } />

      <Route path="markdowns" element={ <UserMarkdowns /> } />

      <Route path="markdowns/create" element={ <CreateMarkdown /> } />

    </Routes>
  )
}
