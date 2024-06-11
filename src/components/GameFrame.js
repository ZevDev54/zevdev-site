


export default function GameFrame(props) {

    return(
        <>
            <div className="iframewrapper">
                {props.active ?
                 <iframe src={props.game.iframelink}  width="1200" height="800" title="Game Embed" scrolling="no" overflow="hidden" overflow-y="hidden" allowfullscreen="true"></iframe>
                 : null}
            </div>
        </>
    )
};
