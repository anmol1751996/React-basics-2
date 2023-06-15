import { Link } from "react-router-dom";


function About(){
    return<>
    <h1>Home page</h1>
    <li> <Link to={"/profile/anil"}>Anil</Link></li>
        <li> <Link to={"/profile/peter"}>Peter</Link></li>
    </>
}
export default About;