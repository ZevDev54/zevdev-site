


export default function GameFrame(props) {

    return(
        <>
            <div className="iframewrapper">
                {props.active ?
                 <iframe src={props.game.iframelink} allow="cross-origin-isolated" width="600" height="500" title="Jam N' Jelly" scrolling="no" overflow="hidden" overflow-y="hidden" allowfullscreen="true"></iframe>
                 : null}
            </div>
        </>
    )
};
