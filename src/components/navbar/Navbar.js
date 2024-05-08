import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <Link to={'/'}>
            <button className='HomeButton'>Home</button>
        </Link>
    );

}