
import { Link } from 'react-router-dom';
import './Tour.css'


export default function Tour(prop){


    return (
        <Link className="LinkClass" to={`/city/${prop.data.id}`}>
            <div className="TourCard">
            <img className="TourCardImage" src={prop.data.image} alt= {prop.data.info}></img>
            <h2>{prop.data.name}</h2> 
        </div>
        </Link>
    );

}