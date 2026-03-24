import './StepComponent.css'

function StepComponent(props){
    const {number, title, description} = props

    return(
        <div className='step'>
            <div className='step-box'>
                <div className='step-circle'>
                    <h3>{number}</h3>
                </div>
                <h4>{title}</h4>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default StepComponent