import GameFrame from "./GameFrame"
import React from "react"


export default function GamePage(props) {
    const [shown, setShown] = React.useState(false)
    return(
        <>
            
            
            <div className="whitecard gameregion">
                {/* Show the iframe and hide self button */}
                {!shown ? <button className="startgamebutton" onClick={() => setShown(!shown)}>
                    <img src={require('../images/gamethumbnails/' + props.game.thumbpath)} className="gamepagethumb"></img>
                    <h1 className="bigtext">Click to start {props.game.name}</h1>
                </button> : null} 
                <GameFrame game={props.game} active={shown}></GameFrame>
            
            </div>

            <div className="whitecard">
            <p>{props.game.description}</p>
            </div>
        </>
    )
};