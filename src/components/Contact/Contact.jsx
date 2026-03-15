import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Forms from '../Forms/Forms.jsx';
import './Contact.css';

function Contact(){
    return(
        <div id='contact'>
            <div id='contact-container'>
                <div className='contact-info'>
                    <h3 className='contact-title'>¿Listo para mover tu carga?</h3>
                    <p className='contact-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium nam vel minus odio, mollitia voluptatibus sequi </p>
                    <div id='contact-section'>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faMapPin} />    Guatemala, Guatemala
                    </div>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faPhone} />   (+502) 1234 5678
                    </div>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faEnvelope} />   vyn@gmail.com
                    </div>
                    </div>
                </div>
                <div className='contact-forms'>
                    <Forms/>
                </div>
            </div>
        </div>
    )
}

export default Contact