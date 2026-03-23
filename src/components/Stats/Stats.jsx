import { useLanguage } from '../../context/LanguageContext.jsx';
import StatsComponent from '../StatsComponent/StatsComponent';

import './Stats.css';

function Stats(){

    const { text } = useLanguage()

    return(
        <section id='stats'>
            <h2 className='stats-title'>{text.stats.title}</h2>
            <p className='stats-description'>{text.stats.description}</p>
            <div className='stats-component'>
                <StatsComponent
                stat={text.stats.stat1.stat}
                symbol="+"
                description={text.stats.stat1.description}
                />
                <StatsComponent
                stat={text.stats.stat2.stat}
                symbol="+"
                description={text.stats.stat2.description}
                />
                <StatsComponent
                stat={text.stats.stat3.stat}
                symbol="+"
                description={text.stats.stat3.description}
                />
                <StatsComponent
                stat={text.stats.stat4.stat}
                symbol="%"
                description={text.stats.stat4.description}
                />
            </div>
        </section>
    )
}

export default Stats