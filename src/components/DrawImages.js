import React, { Component } from 'react'
import games from '../images/gamethumbnails/thumbnail-list.json';
import { Path } from 'react-router-dom';
// C:\Users\zevyj\Desktop\Projects\Website Stuff\zevdev-reactwebsite-2\zevdev-site\src\

const list = games.map((game) => {
    return (
        <div className='m-10 bg-slate-500 rounded-lg'>
            <img src={require('../images/gamethumbnails/'+game.thumbpath)} className='m-10 w-96' ></img>
            <h1 className='text-center text-3xl'>{game.name}</h1>
            <p>{game.pageslug}</p>
            
        </div>
    )
}
)

export default function DrawImages() {
    return (
        <div className='flex m-16'>
            {list}
        </div>
    )

}