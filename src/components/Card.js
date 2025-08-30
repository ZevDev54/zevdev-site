import { Link } from "react-router-dom";


export default function Card({ imgPath, title, link, isExternalLink }) {
    return(
        <>
        <Link to={link} className="zcard">
        {/* <div> */}
            
                <img className="zcardimg" src={imgPath}></img>
                {/* <ModalImage className="zcardimg" small={imgPath} large={imgPath} hideDownload="true"></ModalImage> */}

                <div className="zcardlabel">
                    <h1 className="zcardtitle">{title}</h1>
                </div>
                
        {/* </div> */}
        </Link>
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