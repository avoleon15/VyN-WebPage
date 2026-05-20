import { useLanguage } from '../../context/LanguageContext.jsx';
import { useScrollDirection } from '../../utils/useScrollDirection';
import './TopBar.css';

function TopBar() {
    const { text } = useLanguage()
    const visible = useScrollDirection()

    return(
        <div className={`top-bar ${visible ? 'visible' : 'hidden'}`}>
            <span>{text.topBar.number}</span>
            <span>{text.topBar.mail}</span>
            <span>{text.topBar.location}</span>
        </div>
    )}

export default TopBar
