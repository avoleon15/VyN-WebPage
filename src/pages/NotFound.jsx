import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './NotFound.css';

function NotFound() {
    const navigate = useNavigate()
    const { text } = useLanguage()

    return (
        <>
            <TopBar />
            <Navbar />
            <section id='not-found'>
                <h1>404</h1>
                <p>{text.notFound?.message ?? 'Page not found'}</p>
                <button onClick={() => navigate('/')}>{text.notFound?.button ?? 'Back to Home'}</button>
            </section>
            <Footer />
        </>
    )
}

export default NotFound
