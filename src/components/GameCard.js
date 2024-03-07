import { Link } from 'react-router-dom';


export default function GameCard(props) {

    return(
        <>
            <div className='greencard gamecard'>
            <Link to={props.game.pageslug}>
                <img src={require('../images/gamethumbnails/' + props.game.thumbpath)} className='gamethumb' alt={'game thumbnail for ' + props.game.name}></img>
                <div className='gamelabel'>
                    <h1 className='gametitle'>{props.game.name}</h1>
                </div>
            </Link>
        </div >
        </>
    )
};