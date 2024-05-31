
import designProjects from '../images/design/designprojectlist.json';

import PageProjectCardBuilder from './PageProjectCardBuilder';

export default function Design() {

    return(
        <>
        <iframe src="https://drive.google.com/file/d/1mlMNNhPsQgboUu7oBLUwBuPDSMgvBVcc/preview" width="640" height="480" allow="autoplay"></iframe>
        <PageProjectCardBuilder projectsMeta={designProjects} containerDirectory={"images/design/"}></PageProjectCardBuilder>
        </>
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