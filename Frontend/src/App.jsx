import { Route, Routes } from "react-router-dom"
import './App.css'
// import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App