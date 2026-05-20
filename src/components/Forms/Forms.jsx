import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Forms.css';

// Replace these with your EmailJS credentials from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

function Forms() {
    const { text } = useLanguage()
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatus('success')
                formRef.current.reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <form id='contact-form' ref={formRef} onSubmit={handleSubmit}>
            <div id='contact-row'>
                <div className='field-group'>
                    <label htmlFor='name'>{text.forms.name.title}</label>
                    <input type="text" id='name' placeholder={text.forms.name.input} name='name' required />
                </div>
                <div className='field-group'>
                    <label htmlFor='email'>{text.forms.mail.title}</label>
                    <input type="email" id='email' placeholder={text.forms.mail.input} name='email' required />
                </div>
            </div>

            <div className='field-group'>
                <label htmlFor='subject'>{text.forms.about.title}</label>
                <input type="text" id='subject' placeholder={text.forms.about.input} name='subject' required />
            </div>

            <div className='field-group'>
                <label htmlFor='message'>{text.forms.messaje.title}</label>
                <textarea id='message' placeholder={text.forms.messaje.input} rows='6' name='message' required />
            </div>

            {status === 'success' && (
                <p className='form-feedback success'>{text.forms.successMessage ?? 'Message sent successfully!'}</p>
            )}
            {status === 'error' && (
                <p className='form-feedback error'>{text.forms.errorMessage ?? 'Something went wrong. Please try again.'}</p>
            )}

            <button type='submit' id='contact-submit' disabled={status === 'sending'}>
                {status === 'sending' ? '...' : text.forms.button}
            </button>
        </form>
    )
}

export default Forms
