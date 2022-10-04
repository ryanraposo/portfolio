function About() {
    return (
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4"> 
                <div class=" image d-flex flex-column justify-content-center align-items-center">
                    <img className="img-thumbnail" src={require("../../assets/images/portrait.jpg")} height="241" width="241asa" alt="Portrait" />
                    <span class="name mt-3">Ryan Raposo</span>
                    <span class="idd">Software Engineer</span>
                    <div class="text mt-2">
                        <span>Experienced creator & consultant from Toronto, Ontario. </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;