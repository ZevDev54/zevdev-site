import ProjectToCardList from './ProjectToCardList';



export default function PageProjectCardBuilder({projectsMeta, containerDirectory}) {
    const projectsList = projectsMeta.projects.map(
        (projectListing) => {
            const trueProject=require(`../${containerDirectory}${projectsMeta.relpath}/${projectListing.relpath}/project.json`)

            return(
                <>
                {/* draws an individual project */}
                    <h1 className='bigtext aligncenter'>{trueProject.name}</h1>
                    <div>
                        {/* <DesignProjectToCardlist project={trueProject} ></DesignProjectToCardlist> */}
                        <ProjectToCardList project={trueProject} projectsDirectoryPath={containerDirectory+projectsMeta.relpath} ></ProjectToCardList>

                    </div>
                </>
            )
        }
    )

    return(
        <>
            <div className='whitecard'>
                {projectsList}
            </div>
        </>
    )
}