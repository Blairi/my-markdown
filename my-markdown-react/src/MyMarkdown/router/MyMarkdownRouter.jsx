import { Route, Routes } from "react-router-dom"
import { DashboardRouterProvider } from "./DashboardRouterProvider"
import { HomePage } from "../pages"

export const MyMarkdownRouter = () => {
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> }/>
      <Route path="/dashboard/*" element={ <DashboardRouterProvider /> }/>

    </Routes>
  )
}
