
import toursData from '../../data/db.json'
import Tour from './tour/Tour.js'
import './Tours.css'

export default function Tours(){

    
    return (

        //return the cards in a container
        <section className="CardsContainer">
            {
            toursData.map((tour)=> <Tour key={tour.id} data={tour}/>)
            }
        </section>
    );

}

