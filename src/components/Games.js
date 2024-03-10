import GameGallery from "./GameGallery";
import GamesToCardlist from './GamesToCardlist.js'


export default function Games() {

    return(
        <>
            <div className="whitecard" style={{textAlign:"center"}}>
                <h1 className="bigtext aligncenter">Games</h1>
                {/* <GameGallery></GameGallery> */}
                <GamesToCardlist></GamesToCardlist>
            </div>
        </>
    )
};