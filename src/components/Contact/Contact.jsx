import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../context/LanguageContext.jsx';
import Forms from '../Forms/Forms.jsx';
import './Contact.css';

function Contact(){
    const { text } = useLanguage()

    // TODO: Replace this with your real Google Maps embed src.
    // Go to maps.google.com → search your address → Share → Embed a map → copy the src URL.
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(text.contact.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

    return(
        <div id='contact'>
            <div id='contact-container'>
                <div className='contact-info'>
                    <h3 className='contact-title'>{text.contact.title}</h3>
                    <p className='contact-description'>{text.contact.description}</p>
                    <div id='contact-section'>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faMapPin} />{text.contact.location}
                    </div>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faPhone} />{text.contact.phone}
                    </div>
                    <div className='contact-sections'>
                        <FontAwesomeIcon icon={faEnvelope} />{text.contact.mail}
                    </div>
                    </div>
                </div>
                <div className='contact-forms'>
                    <Forms/>
                </div>
            </div>
            <div id='contact-map'>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VYN Logistics location"
                />
            </div>
        </div>
    )
}

export default Contact