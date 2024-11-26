
import GamesToCardlist from './GamesToCardlist.js'


export default function Games() {

    return(
        <>
            <div className="whitecard alignCenter" >
                <h1 className="bigtext aligncenter">Games</h1>
            <p className='aligncenter projectDescription'>Small game projects made by me in Unity and Godot! Playable in browser, <strong>click thumbnail to open game page.</strong></p>

                {/* <GameGallery></GameGallery> */}
                <GamesToCardlist></GamesToCardlist>
            </div>
        </>
    )
};