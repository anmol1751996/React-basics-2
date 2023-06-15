import {Link} from "react-router-dom";

function Home(){
    return<>
    <h1>Home page</h1>
    <p>This is a home page of our awesome App</p>
    <Link to="/about">Go to About page</Link>
    </>
}
export default Home;