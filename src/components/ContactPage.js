import { ExternalLink } from "react-external-link";
import Card from "./Card";


export default function ContactPage() {

    return(
        <div className='whitecard bodytext centerText paragraph'>
            <h3 className="BigText">Please reach out with any questions!</h3>
            <p className='paragraph'>contact@zevdev.net</p>
            <ExternalLink className="extLink" href="https://www.instagram.com/zevdev.net_/">Instagram</ExternalLink>
            <br></br>
            <ExternalLink className="extLink" href="https://zevdev.itch.io/">Itch.io</ExternalLink>
            <br></br>
            <ExternalLink className="extLink" href="https://www.youtube.com/@ZevDev54">Youtube</ExternalLink>
            <br></br>
            <ExternalLink className="extLink" href = "https://github.com/ZevDev54">Github</ExternalLink>
        </div>
        
    );

}