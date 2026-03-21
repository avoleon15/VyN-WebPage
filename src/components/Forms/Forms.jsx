import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Forms.css';

function Forms() {
    const { text } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form id='contact-form' onSubmit={handleSubmit}>
            <div id='contact-row'>
                <div className='field-group'>
                    <label htmlFor='name'>{text.forms.name.title}</label>
                    <input type="text" id='name' placeholder={text.forms.name.input} value={formData.name} onChange={handleChange} name='name'/>
                </div>
                <div className='field-group'>
                    <label htmlFor='email'>{text.forms.mail.title}</label>
                    <input type="email" id='email' placeholder={text.forms.mail.input} value={formData.email} onChange={handleChange} name='email'/>
                </div>
            </div>

            <div className='field-group'>
                <label htmlFor='subject'>{text.forms.about.title}</label>
                <input type="text" id='subject' placeholder={text.forms.about.input} value={formData.subject} onChange={handleChange} name='subject'/>
            </div>

            <div className='field-group'>
                <label htmlFor='message'>{text.forms.messaje.title}</label>
                <textarea id='message' placeholder={text.forms.messaje.input} value={formData.message} onChange={handleChange} rows='6' name='message'/>
            </div>

            <button type='submit' id='contact-submit'>{text.forms.button}</button>
        </form>
    )
}

export default Forms