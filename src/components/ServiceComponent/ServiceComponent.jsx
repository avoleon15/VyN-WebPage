import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceComponent.css';


function ServiceComponent(props){

    const {icon, title} = props;

    return(
        <div className='service-component'>
            <FontAwesomeIcon className='icon-component' icon={icon} />
            <h4>{title}</h4>
        </div>
    )
}

export default ServiceComponent