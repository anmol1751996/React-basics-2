import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
      <br/>
      <ul>
        <li><Link to={"/about"}>About</Link> </li>
        <li> <Link to={"/home"}>Home</Link></li>
      </ul>
        </div>

  )
}
export default Navbar;