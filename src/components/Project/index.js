function Project({ name, tech, description, image, github, deployed}) {
    return (
      <div class="card">
        <img src={image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2">{tech}</h6>
          <p class="card-text">{description}</p>
          {deployed !== undefined ? <a href={deployed} class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a> : <div></div>}
          <a href={github} class="btn "><i class="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    );
}


export default Project;