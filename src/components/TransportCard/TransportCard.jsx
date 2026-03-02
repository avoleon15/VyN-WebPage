import './TransportCard.css';

function TransportCard(props){

    const {image, title, description} = props;
    const imageAlt = image + " image"

    return(
        <div className='transport-card'>
            <img src={image} alt={imageAlt}></img>
            <h4>{title}</h4>
            <p>{description}</p>
            <button>Mirar mas</button>
        </div>
    )
}

export default TransportCard