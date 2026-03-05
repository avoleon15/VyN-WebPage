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
                    <li><a href="#mainService">Servicios</a></li>
                    <li><a>Contactanos</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>EN/ES</a></li>
                </ul>
            </div>
            <div id="right-nav">
                <button id='login-nav'>Log in</button>
            </div>
        </nav>
    )
}

export default Navbar