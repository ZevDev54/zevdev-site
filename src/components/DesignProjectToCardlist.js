import Card from "./Card";



export default function DesignProjectToCardlist({ project }) {
        const projectElementList = project.pieces.map((piece) => {
        const pieceImage= require("../images/design/media20/" + project.containingFolder + "/" + piece.file);
        return (
                <Card imgPath={pieceImage} title={piece.pieceName}></Card>
        )
    }
    );

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