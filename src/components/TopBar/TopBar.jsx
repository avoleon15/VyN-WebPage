import { useScrollDirection } from '../../utils/useScrollDirection';
import './TopBar.css';

function TopBar() {
    const visible = useScrollDirection()

    return(
        <div className={`top-bar ${visible ? 'visible' : 'hidden'}`}>
            <span>+502 1234 5678</span>
            <span>Guatemala City, Guatemala</span>
            <span>vyn@gmail.com</span>
        </div>
    )}

export default TopBar
