import GameGallery from "./GameGallery";


export default function Games() {

    return(
        <>
            <div className="whitecard" style={{textAlign:"center"}}>
                <h1 className="bigtext aligncenter">Games</h1>
                <GameGallery></GameGallery>
            </div>
        </>
    )
};