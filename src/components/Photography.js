
import designProjects from '../images/design/photography-project-list.json';

import PageProjectCardBuilder from './PageProjectCardBuilder';

export default function Photography() {

    return(
        <PageProjectCardBuilder projectsMeta={designProjects} containerDirectory={"images/design/"}></PageProjectCardBuilder>
    );
    

    // const projectsList = designProjects.projects.map(
    //     (projectListing) => {
    //         const trueProject=require(`../images/design/${designProjects.relpath}/${projectListing.relpath}/project.json`)

    //         return(
    //             <>
    //             {/* draws an individual project */}
    //                 <h1>{trueProject.name}</h1>
    //                 <div>
    //                     {/* <DesignProjectToCardlist project={trueProject} ></DesignProjectToCardlist> */}
    //                     <ProjectToCardList project={trueProject} projectsDirectoryPath={"images/design/"+designProjects.relpath} ></ProjectToCardList>

    //                 </div>
    //             </>
    //         )
    //     }
    // )

    // return(
    //     <>
    //         <div className='whitecard'>
    //             {projectsList}
    //         </div>
    //     </>
    // )
};