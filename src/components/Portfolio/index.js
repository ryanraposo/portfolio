import { useState } from 'react';
import Project from '../Project';


function Portfolio() {

    const [projects] = useState([
        {
            name: "CodeUI",
            tech: "Typescript, Node, Electron",
            description: "Easily customize your color theme for VS Code",
            image: require("../../assets/images/codeui-card-image.png"),
            github: "https://github.com/ryanraposo/codeui"
        },
        {
            name: "Shard Projector",
            tech: "Python, TKinter", 
            description: "Desktop dedicated servers for SteamCMD-based games",
            image: require("../../assets/images/shardprojector-card-image.png"),
            github: "https://github.com/ryanraposo/shard-projector"
        },
        {
            name: "PetHub",
            tech: "Node, Express, MySQL",
            description: "Share your pets and find resources in your area",
            image: require("../../assets/images/pethub-card-image.png"),
            github: "https://github.com/Beca-d/Project2",
            deployed: "https://pets-projects.herokuapp.com/"
        },
        {
            name: "READirect",
            tech: "HTML/JS/CSS, Bulma",
            description: "Pulls reviews on book-movie adaptations for easier comparison",
            image: require("../../assets/images/readirect-card-image.png"),
            github: "https://github.com/katiebutler37/readirect",
            deployed: "https://katiebutler37.github.io/readirect/"
        },
        {
            name: "Whats Cookin'",
            tech: "Mongodb, Express, React, Node.js",
            description: "A food blogging site",
            image: require("../../assets/images/whatscookin-card-image.png"),
            github: "https://github.com/ryanraposo/whats-cookin",
            deployed: "https://floating-river-67151.herokuapp.com/"
        },
        {
            name: "Poetai",
            tech: "Python, Numpy, Tensorflow",
            description: "A tool for human-machine collaboration in poetry",
            image: require("../../assets/images/poetai-card-image.png"),
            github: "https://github.com/ryanraposo/poetai"
        }
    ])
    
    return (
        <div class="projects container text-center">
            <div class="row">
                <div class="col">
                    <Project name={projects[0].name} tech={projects[0].tech} description={projects[0].description} image={projects[0].image} github={projects[0].github} />
                </div>
                <div class="col">
                    <Project name={projects[1].name} tech={projects[1].tech} description={projects[1].description} image={projects[1].image} github={projects[1].github} />
                </div>
                <div class="col">
                    <Project name={projects[2].name} tech={projects[2].tech} description={projects[2].description} image={projects[2].image} github={projects[2].github} deployed={projects[2].deployed} />
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <Project name={projects[3].name} tech={projects[3].tech} description={projects[3].description} image={projects[3].image} github={projects[3].github} deployed={projects[3].deployed} />
                </div>
                <div class="col">
                    <Project name={projects[4].name} tech={projects[4].tech} description={projects[4].description} image={projects[4].image} github={projects[4].github} deployed={projects[4].deployed} />
                </div>
                <div class="col">
                    <Project name={projects[5].name} tech={projects[5].tech} description={projects[5].description} image={projects[5].image} github={projects[5].github} />
                </div>
            </div>
        </div>
    );
}


export default Portfolio;