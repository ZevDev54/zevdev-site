import { Link } from 'react-router-dom';
import zevdevlogo from '../images/logo/ZDLogoNoBackground.png';
import navitems from "../navbar-items.json";

const navbits = navitems.map((nav) => {
    return (

        <li className='navlinkitem pagelink'>
            <Link to={nav.slug}>
                <h2 >{nav.navtitle}</h2>
            </Link>
        </li>


    )
}
)

export default function Navbar() {
    return (
        <div className="Navbar">

            <Link to="/">
                <img src={zevdevlogo} className='img' alt='ZevDev Logo' />
            </Link>

            
            <ul className="linklist">
                <div className='linksdiv'>
                    {navbits}
                </div>
            </ul>

        </div>
    )
};