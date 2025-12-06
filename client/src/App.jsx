
import Home from "./Home"
import{BrowserRouter, Route, Routes}from "react-router-dom"
import SingIn from "./pages/SingIn"
function App ()  {
  


  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn/>}></Route>
            <Route path="/home" element={<Home/>}/>
          </Routes>      
      </BrowserRouter>
     
    </div>
  )
}

export default App
