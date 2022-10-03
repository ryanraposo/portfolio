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
        }
    ])
    
    return (
        <div>
                {projects.map((i) => {
                    return (
                        <Project
                            name={i.name}
                            description={i.description}
                            image={i.image}
                            link={i.link}
                        />
                    );
                })}
        </div>
    );
}


export default Portfolio;