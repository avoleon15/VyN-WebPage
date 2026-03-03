import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceComponent.css';


function ServiceComponent(props){

    const {icon, title, description} = props;

    return(
        <div className='service-component'>
            <div className='service-info-component'>
            <FontAwesomeIcon className='icon-component' icon={icon} />
            <h4 className='service-component-title'>{title}</h4>
            <p className='service-component-description'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceComponent