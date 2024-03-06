import { Link } from 'react-router-dom';
import zevdevlogo from '../images/logo/ZDLogoNoBackground.png';

export default function Navbar() {
    return(
        <div className="Navbar">

            <Link to="/">
                <img src={zevdevlogo} className='img' alt='ZevDev Logo'/>
            </Link>
            <div className='linksdiv'>
                <Link to="/Games" className='pagelink'>
                    <h2 >Games</h2>
                </Link>
                <Link to="/Design" className='pagelink'>
                    <h2 >Design</h2>
                </Link>
                <Link to="/Electronics" className='pagelink'>
                    <h2 >Electronics</h2>
                </Link>
                <Link to="/Contact" className='pagelink'>
                    <h2 >Contact</h2>
                </Link>
                <Link to="/Art" className='pagelink'>
                    <h2 >Art</h2>
                </Link>
            </div>
        </div>
    )
};