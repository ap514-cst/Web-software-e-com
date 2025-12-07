
import Home from "./Home"
import{BrowserRouter, Route, Routes}from "react-router-dom"
import SingIn from "./pages/Login"
import Checkout from "./components/Checkout"
import Register from "./pages/Register"
import AdminDeshbord from "./Admin/AdminDeshbord"
import AdminLoing from "./Admin/AdminLoing"
function App ()  {
  


  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn/>}></Route>
            <Route path="/register" element={<Register/>}/>  
            <Route path="/home" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/adminLogin" element={<AdminLoing/>}/>
            <Route path="/adminLogin/admindeshboard"element={<AdminDeshbord/>}/>
          </Routes>
          
            
              
      </BrowserRouter>
     
    </div>
  )
}

export default App
