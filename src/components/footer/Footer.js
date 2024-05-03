import './Footer.css';


export default function Footer() {

    return (
        <div className="Footer">

            <MediaLink link='https://github.com/Loiy2002-SW' imageUrl='https://cdn-icons-png.flaticon.com/128/2504/2504911.png' name='Github' />

            <MediaLink link='https://www.linkedin.com/in/loiyal-hasan/' imageUrl='https://cdn-icons-png.flaticon.com/128/2504/2504923.png' name='LinkedIn' />
            
            <MediaLink link='mailto:lloiy9310@gmil.com' imageUrl='https://cdn-icons-png.flaticon.com/128/732/732200.png' name='G-mail' />

            <h2> &copy; {new Date().getFullYear()} Loai Hasan </h2>


        </div>
    );
}


function MediaLink(props) {

       const handleClick = () => {
        window.open(props.link, '_blank');
    };

    return (
        <div className="MediaLink" onClick={handleClick}>
            <img className='AccountsImg' src={props.imageUrl} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    );

}
