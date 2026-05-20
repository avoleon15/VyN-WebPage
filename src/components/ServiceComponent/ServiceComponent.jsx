import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceComponent.css';


function ServiceComponent(props){

    const { icon, title, description, button, isOpen, onClick } = props

    return (
        <div className={`service-component ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className='service-info-component'>
                <FontAwesomeIcon className='icon-component' icon={icon} />
                <h4 className='service-component-title'>{title}</h4>
                <FontAwesomeIcon className={`chevron ${isOpen ? 'rotated' : ''}`} icon={faChevronDown} />
            </div>
            <div className={`service-component-description ${isOpen ? 'visible' : ''}`}>
                <p>{description}</p>
                <button className='service-button'>{button}</button>
            </div>
        </div>
    )
}

export default ServiceComponent