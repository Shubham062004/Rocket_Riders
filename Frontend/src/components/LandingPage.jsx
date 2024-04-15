import { Link } from "react-router-dom"
import "../App.css"
import Bike from "../Images/Kawasaki_Ninja-removebg-preview.png"

function LandingPage() {
  return (
    <>
      <div className="homebody">
        <h1>KAWASAKI</h1>
        <img src={Bike} alt="" />
      </div>
    </>
  )
}

export default LandingPage