
import toursData from '../../data/db.json'
import './Tours.css'

export default function Tours(){

    
    return (

        <div className="CardsContainer">
            {toursData.map((tour)=> <Tour key={tour.id} data={tour}/>)}
        </div>
    );

}

function Tour(prop){

    return (
        <div className="TourCard">
            <img className="TourCardImage" src={prop.data.image} alt= {prop.data.info}></img>
            <h2>{prop.data.name}</h2> 

        </div>
    );

}