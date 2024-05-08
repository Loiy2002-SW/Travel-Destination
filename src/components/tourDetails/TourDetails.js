import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import toursData from '../../data/db.json'
import './TourDetails.css';
import { useState } from 'react';


export default function TourDetails() {

    const { id } = useParams();
    let cityData = getCityData(id);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const onToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
        <>
            <Header />
            <div className="CityDetailsContainer">
                <Details data={cityData} showFullDescription={showFullDescription} onToggleDescription={onToggleDescription}/>
            </div>
            <Footer />

        </>
    )

}


function Details(prop) {

    const renderDescription = () => {
        
        if (prop.showFullDescription == true) {
            return prop.data.info; 
        } else {
            
            const words = prop.data.info.split(' ');
            const truncatedDescription = words.slice(0, 30).join(' ');
            return `${truncatedDescription} ...`;
        }
    };

    

    return (

        <div className="TourDetailsCard">
            <img className="CityImage" src={prop.data.image} alt={prop.data.info}></img>
            <h2>{prop.data.name}</h2>
            <p>{renderDescription()}</p>
            <button onClick={prop.onToggleDescription}>
                {prop.showFullDescription ? 'See less' : 'See more'}
            </button>
        </div>

    );

}


//this function will filter the tours data to get the city data with the matched id.
function getCityData(id) {

    return toursData.filter((tour) => tour.id === id)[0];

}


