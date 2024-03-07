import React from 'react'
import games from '../games/games.json';
import GameCard from "./GameCard.js"

// C:\Users\zevyj\Desktop\Projects\Website Stuff\zevdev-reactwebsite-2\zevdev-site\src\

const list = games.map((game) => {
    return (

        <GameCard game={game}></GameCard>


    )
}
)

export default function GameGallery() {
    return (
        <div className='gamelist'>
            
            {list}
        </div>
    )

}