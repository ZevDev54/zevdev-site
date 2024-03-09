


export default function DesignPageDrawer({ project }) {
    const projectElementList = project.pieces.map((piece) => {

        return (
            <div className='gamecard'>
                <div className='greencard gamecard'>
                    <img className="gamethumb" src={require("../images/design/media20/" + project.containingFolder + "/" + piece.file)}></img>
                    <div className="gamelabel">
                        <h1 className="designTitle">{piece.pieceName}</h1>
                    </div>
                </div>
            </div>
        )
    }
    );

    return (
        <>
            <div className="designList">
                {projectElementList}
            </div>
        </>
    )
};