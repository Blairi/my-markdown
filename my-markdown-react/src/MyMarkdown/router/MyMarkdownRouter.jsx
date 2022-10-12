import { Route, Routes } from "react-router-dom"
import { Dashboard, HomePage } from "../pages"

export const MyMarkdownRouter = () => {
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> }/>
      <Route path="/dashboard" element={ <Dashboard /> }/>

    </Routes>
  )
}
