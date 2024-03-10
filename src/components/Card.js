

export default function Card({ imgPath, title }) {
    return(
        <>
        <div className='zcard'>

                <img className="zcardimg" src={imgPath}></img>
                <div className="zcardlabel">
                    <h1 className="zcardtitle">{title}</h1>
                </div>
        </div>
    </>
    );
}

// export default function Card({ imgPath, title }) {
//     return(
//     <div className='gamecard greencard'>

//             <img className="gamethumb" src={imgPath}></img>
//             <div className="gamelabel">
//                 <h1 className="gametitle">{title}</h1>
//             </div>
//     </div>
//     );
// }