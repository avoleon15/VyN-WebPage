import { Link } from 'react-router-dom';
import './TransportCard.css';

function TransportCard(props){

    const {image, title, description, button, link} = props;
    const imageAlt = image + " image"

    return(
        <div className='transport-card'>
            <div className='transport-image-container'>
                <img className='transport-image' src={image} alt={imageAlt}></img>
            </div>
            <div className='transport-info-container'>
                <h4 className='transport-title'>{title}</h4>
                <p className='transport-description'>{description}</p>
                <Link to={`/transport/${link}`} className='transport-button'>{button}</Link>
            </div>
        </div>
    )
}

export default TransportCard