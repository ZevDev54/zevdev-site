import Card from "./Card";



export default function ProjectToCardList({ project, projectsDirectoryPath}) {
        const projectElementList = project.pieces.map((piece) => {
        // const path = require("" + projectsDirectoryPath + "/" + project.containingFolder + "/" + piece.file);
        //const path = ('../images/design/media20' + "/" + project.containingFolder + "/" + piece.file)
        //const p = require(path.toString())

        return (
                <Card imgPath={require("../" + projectsDirectoryPath + "/" + project.containingFolder + "/" + piece.file)} title={piece.pieceName}></Card>
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