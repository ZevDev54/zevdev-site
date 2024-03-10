
import artProjects from '../images/art/artprojectlist.json';

import PageProjectCardBuilder from './PageProjectCardBuilder';

export default function ArtPage() {

    return(
        <PageProjectCardBuilder projectsMeta={artProjects} containerDirectory={"images/art/"}></PageProjectCardBuilder>
    );

}