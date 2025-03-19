import { ExternalLink } from "react-external-link";
import Card from "./Card";


export default function ContactPage() {

    return(
        <div className='whitecard bodytext centerText paragraph'>
            <h3 className="BigText">Please reach out with any questions!</h3>
            <p className>email: contact@zevdev.net</p>
            <ExternalLink className="extLink" href="https://www.instagram.com/zevdev.net_/"></ExternalLink>
            <br></br>
            <ExternalLink className="extLink" href="https://zevdev.itch.io/"></ExternalLink>
            <br></br>
            <ExternalLink href="https://www.youtube.com/@ZevDev54"></ExternalLink>
        </div>
        
    );

}