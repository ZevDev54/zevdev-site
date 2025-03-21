import { Link } from 'react-router-dom';
import zevdevlogo from '../images/logo/FrogOnlyClear@2x.png';
import navitems from "../navbar-items.json";

const navbits = navitems.map((nav) => {
    return (
        <Link to={nav.slug}>
            <li className='navlinkitem pagelink'>
                <h2 >{nav.navtitle}</h2>
            </li>
        </Link>

    )
}
)

export default function Navbar() {
    return (
        <div className="Navbar">

            <Link to="/">
                <img src={zevdevlogo} className='topLeftLogo' alt='ZevDev Logo' />
            </Link>

            
            <ul className="linklist">
                <div className='linksdiv'>
                    {navbits}
                </div>
            </ul>

        </div>
    )
};