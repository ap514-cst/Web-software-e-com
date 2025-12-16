
import Home from "./Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SingIn from "./pages/Login"
import Checkout from "./components/Checkout"
import Register from "./pages/Register"
import AdminDeshbord from "./Admin/AdminDeshbord"
import AdminLoing from "./Admin/AdminLoing"
import { useState } from "react"
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={
            isAuthenticated ?
              <Navigate to="/" /> :

              <Register setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<SingIn />}></Route>

          <Route path="/home" element={
            isAuthenticated ?
              <Navigate to="/" /> :
              <Home setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/adminLogin" element={<AdminLoing />} />
          <Route path="/adminLogin/admindeshboard" element={
            isAuthenticated ?
              <Navigate to="/adminLogin/admindeshboard" /> :
              <AdminDeshbord setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>



      </BrowserRouter>

    </div>
  )
}

export default App
