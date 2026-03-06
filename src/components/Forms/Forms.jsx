import './Forms.css'

function Forms() {
    return (
        <form id='contact-form'>
            <div id='contact-row'>
                <div className='field-group'>
                    <label htmlFor='name'>Nombre</label>
                    <input type="text" id='name' placeholder='Tu nombre' name='name'/>
                </div>
                <div className='field-group'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' placeholder='tu@email.com' name='email'/>
                </div>
            </div>

            <div className='field-group'>
                <label htmlFor='subject'>Asunto</label>
                <input type="text" id='subject' placeholder='¿En qué podemos ayudarte?' name='subject'/>
            </div>

            <div className='field-group'>
                <label htmlFor='message'>Mensaje</label>
                <textarea id='message' placeholder='Cuéntanos sobre tu carga...' rows='6' name='message'/>
            </div>

            <button type='submit' id='form-submit'>
                Enviar mensaje
            </button>
        </form>
    )
}

export default Forms