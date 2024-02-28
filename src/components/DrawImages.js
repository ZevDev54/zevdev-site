import React, { Component } from 'react'
import games from '../images/gamethumbnails/thumbnail-list.json';
import { Path } from 'react-router-dom';
// C:\Users\zevyj\Desktop\Projects\Website Stuff\zevdev-reactwebsite-2\zevdev-site\src\

const list = games.map((game) => {
    return (
        <div className='m-10 greencard rounded-lg'>
            <img src={require('../images/gamethumbnails/'+game.thumbpath)} className='m-10 w-96' ></img>
            <h1 className='text-center text-3xl m-10 whitecard'>{game.name}</h1>
            {/* <p>{game.pageslug}</p> */}
            
        </div>
    )
}
)

export default function DrawImages() {
    return (
        <div className='whitecard flex m-16 rounded-3xl'>
            {list}
        </div>
    )

}