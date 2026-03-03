import './TransportCard.css';

function TransportCard(props){

    const {image, title, description} = props;
    const imageAlt = image + " image"

    return(
        <div className='transport-card'>
            <div className='transport-image-container'>
                <img className='transport-image' src={image} alt={imageAlt}></img>
            </div>
            <div className='transport-info-container'>
                <h4 className='transport-title'>{title}</h4>
                <p className='transport-description'>{description}</p>
                <button className='transport-button'>Mirar mas</button>
            </div>
        </div>
    )
}

export default TransportCard