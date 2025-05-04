import logo from '../../assets/images/logo.webp';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} alt="SweetMoments Logo" className="logo" />
            <ul className="nav-links">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#products">Nos Produits</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}