import React from "react";

export default function About() {
    return (
        <section className="container" style={{ backgroundColor: "gray", padding: 50, textAlign: "center"}}>
            <h1 style={{ color: "cyan" }}>About me</h1>
            <div>
                <br></br>
                <p className="m-10" style={{ color: "cyan", fontSize: 25, textAlign: "center" }}>
                    I'm from Buford, Georgia. 
                    I do not have a collage education, however I make up for this by being a jack of all trades. 
                    I have lived in Buford since I was 6 months old, and have just bought my first house. 
                    I worked in construction for two and a half years installing lightning protection.  
                    During the last few years, I have sparked an interest in coding, particularly in web development. 
                    My father has been a software engineer for the last 25 years. 
                    I decided to pursue a career in web development to help my father's company.
                    I will soon be earning my certificate in full-stack web development from the Georgia Tech Coding BootCamp.  
                    During my BootCamp, I developed a passion for back-end web development and love to learn new ways to do actions and hook everything together.  
                    Throughout my BootCamp I have learned the skills necessary to build a full functional application and has me excited to begin my new job as a software engineer.
                </p>
                <br></br>
                <p className="m-10" style={{ color: "cyan", fontSize: 25, textAlign: "center" }}>
                    In my spare time, I enjoy playing video games, rebuilding cars, exercising, hiking, and playing with my animals.
                </p>
            </div>
        </section>
    )
}