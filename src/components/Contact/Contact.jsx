import Forms from '../Forms/Forms.jsx'
import './Contact.css'

function Contact(){
    return(
        <div id='contact'>
            <div id='contact-container'>
                <div className='contact-info'>
                    <h3 className='contact-title'>¿Listo para mover tu carga?</h3>
                    <p className='contact-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium nam vel minus odio, mollitia voluptatibus sequi </p>
                </div>
                <div className='contact-forms'>
                    <Forms/>
                </div>
            </div>
        </div>
    )
}

export default Contact