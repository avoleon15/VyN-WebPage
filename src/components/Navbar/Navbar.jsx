import vynLogo from "../../assets/images/VyN-logo.png";
import './Navbar.css';


function Navbar(){


    return(
        <nav id="navbar">
            <div id="left-nav">
                <img src={vynLogo} alt='vyn logo'></img>
            </div>
            <div id="center-nav">
                <ul className='list-nav'>
                    <li>Servicios</li>
                    <li>Contactanos</li>
                    <li>EN/ESP</li>
                    <li>DarkMODE</li>
                </ul>
            </div>
            <div id="right-nav">
                <button>Log in</button>
            </div>
        </nav>
    )
}

export default Navbar