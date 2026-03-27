import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar.jsx"
import './TransportX.css'

function TransportX(){
    return(
        <>
            <Navbar/>
            <section className="transportX-header">
                <div className="transportX-header-box">
                    <h1>Seafreight</h1>
                    <p>TRANSPORTS</p>
                </div>
            </section>
            <section className="divided-container">
                <div>
                    <p>Our customers save cost with our shipping services , both full loads FCL, LCL and consolidated . Due to preferential rates with the major shipping companies worldwide, we can offer solutions for shipping to or from Guatemala with rates and transit times very competitive, even for oversized cargo or any other logistics project , taking any need, let us offer our customer support and compliance.</p>
                </div>
                <div>
                    <img src='src/assets/images/airfreight.jpg' alt='airfreight image'></img>
                </div>
            </section>
            <section className="divided-container inverted-container">
                <div>
                    <ul>
                        <li>uno</li>
                        <li>dos</li>
                        <li>tres</li>
                    </ul>
                </div>
                <div>
                    <img src='src/assets/images/airfreight.jpg' alt='airfreight image'></img>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default TransportX