import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TransportXService.css';

function TransportXService(props){
    const{icon, title ,description} = props

    return(
        <section id='TransportXService'>
            <div>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </section>
    )
}

export default TransportXService