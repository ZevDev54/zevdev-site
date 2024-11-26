
import designProjects from '../images/design/designprojectlist.json';

import PageProjectCardBuilder from './PageProjectCardBuilder';

export default function Design() {

    return(
        <>
        <h1 className='bigtext whitecard aligncenter'>Media Studies 20 Graphic Design Projects</h1>
        <PageProjectCardBuilder projectsMeta={designProjects} containerDirectory={"images/design/"}></PageProjectCardBuilder>
        
        
        
        <div className="whitecard slidesContainer">
        <h1 className='bigtext aligncenter'>Brand Identity Presentation</h1>
        <p className='aligncenter projectDescription'>We used a prompt generator to create a fictional company which we would then make a logo and brand identity for. My company was called "Squirrel Forecasting", which boasted AI cloud computing powered weather prediction.</p>
            <iframe title='Squirrel Forecasting brand preesentation'  src="https://drive.google.com/file/d/1mlMNNhPsQgboUu7oBLUwBuPDSMgvBVcc/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>
        
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