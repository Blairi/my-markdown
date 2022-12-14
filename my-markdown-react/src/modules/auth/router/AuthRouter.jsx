import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRouter = () => {
  return (
    <Routes>

      <Route path="register" element={ <RegisterPage /> }/>

      <Route path="login" element={ <LoginPage /> }/>

    </Routes>
  )
}
