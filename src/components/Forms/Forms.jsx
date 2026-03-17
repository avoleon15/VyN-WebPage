import { useLanguage } from '../../context/LanguageContext.jsx';
import './Forms.css';

function Forms() {
    const { text } = useLanguage()

    return (
        <form id='contact-form'>
            <div id='contact-row'>
                <div className='field-group'>
                    <label htmlFor='name'>{text.forms.name.title}</label>
                    <input type="text" id='name' placeholder={text.forms.name.input} name='name'/>
                </div>
                <div className='field-group'>
                    <label htmlFor='email'>{text.forms.mail.title}</label>
                    <input type="email" id='email' placeholder={text.forms.mail.input} name='email'/>
                </div>
            </div>

            <div className='field-group'>
                <label htmlFor='subject'>{text.forms.about.title}</label>
                <input type="text" id='subject' placeholder={text.forms.about.input} name='subject'/>
            </div>

            <div className='field-group'>
                <label htmlFor='message'>{text.forms.messaje.title}</label>
                <textarea id='message' placeholder={text.forms.messaje.input}rows='6' name='message'/>
            </div>

            <button type='submit' id='contact-submit'>{text.forms.button}</button>
        </form>
    )
}

export default Forms