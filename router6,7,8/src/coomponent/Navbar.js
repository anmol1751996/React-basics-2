import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div>
      <br/>
      <ul className="navbar">
        <li><NavLink
        style={({isActive})=>{return{Color:isActive? 'skyblue':''}}} 
        className={"nav-bar-link"} to={"/about"}>About</NavLink> </li>
        <li> <NavLink
        style={({isActive})=>{return{Color:isActive? 'skyblue':''}}}
        className={"nav-bar-link"} to={"/home"}>Home</NavLink></li>
        <li> <NavLink 
        style={({isActive})=>{return{Color:isActive? 'skyblue':''}}}
        className={"nav-bar-link"} to={"/contact"}>contact</NavLink></li>
        
      </ul>
        </div>

  )
}
export default Navbar;