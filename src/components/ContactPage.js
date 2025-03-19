import { ExternalLink } from "react-external-link";
import Card from "./Card";


export default function ContactPage() {

    return(
        <div className='whitecard bodytext centerText paragraph'>
            <p className>email: contact@zevdev.net</p>
            <ExternalLink className="extLink" href="https://www.instagram.com/zevdev.net_/"></ExternalLink>
        </div>
        
    );

}