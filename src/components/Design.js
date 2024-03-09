
import designProjects from '../images/design/designprojects.json';
import DesignPageDrawer from './DesignPageDrawer';


export default function Design() {

    

    const projectsList = designProjects.projects.map(
        (projectListing) => {
            const trueProject=require(`../images/design/${designProjects.relpath}/${projectListing.relpath}/designproject.json`)
            return(
                <div className='designList'>
                    <div>
                        <h1>{trueProject.name}</h1>
                        <DesignPageDrawer project={trueProject} ></DesignPageDrawer>
                    </div>
                </div>
            )
        }
    )

    return(
        <>
            <div className='whitecard '>
                {projectsList}
            </div>
        </>
    )
};