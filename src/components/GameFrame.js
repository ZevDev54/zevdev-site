


export default function GameFrame(props) {

    return(
        <>
            <div className="iframewrapper">
                {props.active ?
                 <iframe src={props.game.iframelink} allow="cross-origin-isolated" width="1200" height="800" title="Jam N' Jelly" scrolling="no" overflow="hidden" overflow-y="hidden" allowfullscreen="true"></iframe>
                 : null}
            </div>
        </>
    )
};
