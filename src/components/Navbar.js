import { Link } from 'react-router-dom';
import zevdevlogo from '../images/logo/ZDLogoNoBackground.png';

export default function Navbar() {
    return(
        <div className="whitecard flex bowlby">

            <Link to="/">
                <img src={zevdevlogo} className='size-1/5 w-1/12 min-w-20 min-h-20 m-8' />
            </Link>

            <div className='flex justify-end limegreen'>
                <Link to="/Games" >
                    <h2 >Games</h2>
                </Link>
                <Link to="/Contact">
                    <h2 >Contact</h2>
                </Link>
                <Link to="/Contact">
                    <h2 >Design</h2>
                </Link>
            </div>
        </div>
    )
};