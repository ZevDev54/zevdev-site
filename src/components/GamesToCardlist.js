import Card from "./Card";
import games from '../games/games.json';
import { Link } from "react-router-dom";


const projectElementList = games.map((game) => {
    const gameThumb= require('../images/gamethumbnails/' + game.thumbpath);
    return (
        <Link to={game.pageslug}>
            <Card imgPath={gameThumb} title={game.name}></Card>
        </Link>
    )
}
);


export default function DesignProjectToCardlist() {



    return (
        <>
            <div className="zcardlist">
                {projectElementList}
                {/* <img src={require('../images/design/media20/fortune-cookie/FortuneCookiePoster_Analogous.png')}></img> */}
                {/* <Card imgPath={require('../images/design/media20/fortune-cookie/FortuneCookiePoster_Analogous.png')} title={"fortnite"}></Card> */}

            </div>
        </>
    )
};