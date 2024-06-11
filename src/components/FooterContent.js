import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from '../images/logo/Instagram_Glyph_Black.svg'
import { ReactComponent as ItchIcon } from '../images/logo/itch-io-seeklogo.svg'

import { ExternalLink } from 'react-external-link';

export default function FooterContent() {
    return (
        <footer className="footerContent">
            <p className="aligncenter">&#169; Zev Johnston, all rights reserved.</p>

            
                <div className='socialLink'>
                    <ExternalLink href="https://zevdev.itch.io/">
                        <ItchIcon className="itchIcon"/>
                    </ExternalLink>

                    <ExternalLink href="https://www.instagram.com/zevdev.net_/">
                    <InstagramIcon className='instagramIcon' />
                    </ExternalLink>
                    



                </div>
        </footer>
    );
};