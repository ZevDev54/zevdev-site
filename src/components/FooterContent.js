import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from '../images/logo/Instagram_Glyph_Black.svg'
import { ExternalLink } from 'react-external-link';

export default function FooterContent() {
    return (
        <footer className="footerContent">
            <p className="aligncenter">&#169; Zev Johnston, all rights reserved.</p>

            <ExternalLink href="https://www.instagram.com/zevdev.net_/">
                <div className='socialLink'>
                    <InstagramIcon className='instagramIcon' />


                </div>
            </ExternalLink>
        </footer>
    );
};