import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './ServiceComponent.css';


function ServiceComponent(props){

    const {icon, title, description} = props;
    const[open, setOpen] = useState(false)

    return(
        <div className={`service-component ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <div className='service-info-component'>
                <FontAwesomeIcon className='icon-component' icon={icon} />
                <h4 className='service-component-title'>{title}</h4>
            <FontAwesomeIcon className={`chevron ${open ? 'rotated' : ''}`} icon={faChevronDown} />
            </div>
            <div className={`service-component-description ${open ? 'visible' : ''}`}>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ServiceComponent