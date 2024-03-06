import React from 'react'
import games from '../games/games.json';
import { Link } from 'react-router-dom';

// C:\Users\zevyj\Desktop\Projects\Website Stuff\zevdev-reactwebsite-2\zevdev-site\src\

const list = games.map((game) => {
    return (

        <div className='greencard gamecard'>
            <Link to={game.pageslug} className='gamecard'>
                <img src={require('../images/gamethumbnails/' + game.thumbpath)} className='gamethumb' alt={'game thumnail for ' + game.name}></img>
                <h1 className='whitecard gametitle'>{game.name}</h1>
                {/* <p>{game.pageslug}</p> */}
            </Link>
        </div >


    )
}
)

export default function DrawImages() {
    return (
        <div className='whitecard gamelist'>
            <h1 className="bigtext">Games</h1>
            {list}
        </div>
    )

}