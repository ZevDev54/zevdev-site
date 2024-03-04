import React from 'react'
import games from '../images/gamethumbnails/thumbnail-list.json';

// C:\Users\zevyj\Desktop\Projects\Website Stuff\zevdev-reactwebsite-2\zevdev-site\src\

const list = games.map((game) => {
    return (
        <div className='greencard gamecard'>
            <img src={require('../images/gamethumbnails/'+game.thumbpath)} className='gamethumb' alt={'game thumnail for '+game.name}></img>
            <h1 className='whitecard gametitle'>{game.name}</h1>
            {/* <p>{game.pageslug}</p> */}
            
        </div>
    )
}
)

export default function DrawImages() {
    return (
        <div className='whitecard gamelist'>
            {list}
        </div>
    )

}