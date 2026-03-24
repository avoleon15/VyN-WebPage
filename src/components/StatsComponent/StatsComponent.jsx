import './StatsComponent.css';

function StatsComponent(props){
    const {stat, symbol, description} = props;

    return(
        <section className='stat'>
            <h2>{stat}<span className='stat-span'>{symbol}</span></h2>
            <p>{description}</p>
        </section>
    )
}

export default StatsComponent