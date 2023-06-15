import {Link, useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const navToPage=()=>{
        navigate('/about')
        let x=true;
        if(x){
            navigate('/about')
        }else{
            navigate('/Home')
        }
    }
    return<>
    <h1>Home page</h1>
    <p>This is a home page of our awesome App</p>
    <Link to="/about">Go to About page</Link><br/>
    <button onClick={()=>navToPage('/about')}>Go to about Page</button>
    <br/>
    <button>Go to Filter Page</button>
    </>
}
export default Home;