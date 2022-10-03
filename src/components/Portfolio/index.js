import { useState } from 'react';
import Project from '../Project';


function Portfolio() {

    const [projects] = useState([
        {
            name: "CodeUI", 
            description: "Customize your color theme for VS Code",
            image: "/assets/images/codeui-card-image.png",
            link: "https://github.com/ryanraposo/codeui"
        },
        {
            name: "Shard Projector", 
            description: "Desktop dedicated servers for SteamCMD-based games",
            image: "/assets/images/shardprojector-card-image.png",
            link: "https://github.com/ryanraposo/shard-projector"
        },
        {
            name: "PetHub",
            description: "Share your pets",
            image: "/assets/images/pethub-card-image.png",
            link: "https://github.com/Beca-d/Project2"
        },
        {
            name: "READirect",
            description: "Pulls reviews on book-movie adaptations for easier comparison",
            image: "/assets/images/readirect-card-image.png",
            link: "https://github.com/katiebutler37/readirect"
        },
        {
            name: "Portfolio Generator",
            description: "Answer a series of questions to generate a portfolio",
            image: "/assets/images/portfoliogenerator-card-image.png",
            link: "https://github.com/ryanraposo/portfolio-generator"
        },
        {
            name: "Poetai",
            description: "A tool for human-machine collaboration in poetry",
            image: "/assets/images/poetai-card-image.png",
            link: "https://github.com/ryanraposo/poetai"
        }
    ])
    
    return (
        <div class="projects container text-center">
            <div class="row">
                <div class="col">
                    <Project name={projects[0].name} description={projects[0].description} image={projects[0].image} link={projects[0].link} />
                </div>
                <div class="col">
                    <Project name={projects[1].name} description={projects[1].description} image={projects[1].image} link={projects[1].link} />
                </div>
                <div class="col">
                    <Project name={projects[2].name} description={projects[2].description} image={projects[2].image} link={projects[2].link} />
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <Project name={projects[3].name} description={projects[3].description} image={projects[3].image} link={projects[3].link} />
                </div>
                <div class="col">
                    <Project name={projects[4].name} description={projects[4].description} image={projects[4].image} link={projects[4].link} />
                </div>
                <div class="col">
                    <Project name={projects[5].name} description={projects[5].description} image={projects[5].image} link={projects[5].link} />
                </div>
            </div>
        </div>
    );
}


export default Portfolio;