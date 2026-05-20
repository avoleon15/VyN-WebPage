import { useLanguage } from '../../context/LanguageContext.jsx';
import StepComponent from '../StepComponent/StepComponent';

import './HowItWorks.css';

function HowItWorks(){
    const { text } = useLanguage()

    return(
        <section id='howItWorks'>
            <div id='how-box1'>
                <div className='how-info'>
                <h2>{text.howItWorks.title}</h2>
                <p>{text.howItWorks.description}</p>
                </div>
            </div>
            <div id='how-box2'>
                <StepComponent
                number={text.howItWorks.step1.number}
                title={text.howItWorks.step1.title}
                description={text.howItWorks.step1.description}
                />
                <StepComponent
                number={text.howItWorks.step2.number}
                title={text.howItWorks.step2.title}
                description={text.howItWorks.step2.description}
                />
                <StepComponent
                number={text.howItWorks.step3.number}
                title={text.howItWorks.step3.title}
                description={text.howItWorks.step3.description}
                />
            </div>
        </section>
    )
}

export default HowItWorks