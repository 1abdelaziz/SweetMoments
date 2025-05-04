import Header from '../Header/Header.jsx';
import './MainHero.css';

export default function MainHero() {
    return (
        <div className="main-hero">
            <Header />
            <div className="content">
                <div className="left">
                    <h1><span>Welcome</span> to Sweet Home</h1>
                    <div className="buttons">
                        <a href="#" className="btn">Check Menu</a>
                        <a href="#" className="btn btn-secondary">About More</a>
                    </div>
                </div>
                <div className="right">
                    <h2><span>Chez </span><span>nous</span></h2>
                    <p>
                        La douceur au bout des doigts, le goût du bonheur à chaque bouchée. 
                        Nos créations éveillent les sens et réchauffent les cœurs.
                    </p>
                </div>
            </div>
        </div>
    )
}