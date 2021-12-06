import React from "react";
import Cards from "./card.js";

const Projects = [
    {
        "id": 1
        , "name": "Password Generator"
        , "image": "https://csachse74.github.io/Portfolio-Unit-2/images/PasswordGenerator.jpg"
        , "link": "https://csachse74.github.io/Password-Generator-Unit-3/"
        , "repo":  "https://github.com/Csachse74/Password-Generator-Unit-3"
    }
    , {
        "id": 2
        , "name": "Notes Tracker"
        , "image": "https://csachse74.github.io/Portfolio-Unit-2/images/NoteTaker.jpg"
        , "link": "https://note-tracker-unit-11.herokuapp.com/notes"
        , "repo": "https://github.com/Csachse74/Note-Tracker"
    }
    , {
        "id": 3
        , "name": "Employee Management"
        , "image": "https://csachse74.github.io/Portfolio-Unit-2/images/EmployeeManagement.jpg"
        , "link": "https://github.com/Csachse74/Employee-Management"
        , "repo": "https://github.com/Csachse74/Employee-Management"
    }
    , {
        "id": 4
        , "name": "Weather Predictor"
        , "image": "https://csachse74.github.io/Portfolio-Unit-2/images/WeatherPredictor.jpg"
        , "link": "https://csachse74.github.io/Weather-Unit-6/"
        , "repo": "https://github.com/Csachse74/Weather-Unit-6"
    }
    , {
        "id": 5
        , "name": "Project 1"
        , "image": "https://csachse74.github.io/Portfolio-Unit-2/images/ProjectOne.jpg"
        , "link": "https://joeygitsit.github.io/teammatezTracker/index.html"
        , "repo": "https://github.com/JoeyGitsIt/teammatezTracker"
    }
];
function Portfolio() {
    return (
        <section className="container" style={{ display: "flex", justifyContent: "center" }}>
            <div className="project">
                <h1 style={{ color: "black" }}>Portfolio</h1>
                <br></br>
            </div>
            <div className="col-md-4">
                {Projects.map((project) => (
                    <Cards
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        repo={project.repo}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;