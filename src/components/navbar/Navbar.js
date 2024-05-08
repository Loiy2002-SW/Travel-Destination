import { Link } from "react-router-dom";


export default function Navbar(prop){

    return(
        <nav>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={`/city/:${prop.id}`}>Details</Link></button>
        </nav>
    );

}