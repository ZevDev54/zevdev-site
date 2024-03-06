


export default function GamePage(props) {

    return(
        <>

            
            <div className="whitecard">
            <iframe src={props.game.iframelink} width="600" height="500" title="Jam N' Jelly" scrolling="no" overflow="hidden" overflow-y="hidden" allowfullscreen="true"></iframe>
            
            
            </div>

            <div className="whitecard">
            <p>{props.game.description}</p>
            </div>
        </>
    )
};