import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import Navbar from '../navbar/Navbar';



export default function Header(){

    //if the user is in the home page he shouldn't see the button that lead him to the home (because he is already there)
    //this is to know on which route the user is
    //so the app can conditionally rendering the home button
    const location = useLocation();


    return (
        <div className="Header">
            <h1>Travel Destaination</h1>
            {location.pathname !== '/' && (
                <Navbar/>
            )}
        </div>
    );
}