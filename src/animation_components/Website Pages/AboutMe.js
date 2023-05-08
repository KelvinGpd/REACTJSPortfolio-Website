
const AboutMe = () => { 

    return(
        <div className = "AboutMe">
            <div className="profilePicture">
                <img src="./assets/ProfilePic.png" alt="ME!"></img>
            </div>
            <div className="AboutMeText">
                <h3>Hi! Im Kelvin Chen, 20 years old <br/>
                    Passionate Software and Web developper from Montreal. <br/> 
                    I designed and built this website myself
                </h3>
                <p>
                    Currently enrolled at University of Montreal in COOP computer science,<br/>
                    I am in my third semester of studies, taking on many summer classes.
                </p>

                <p>
                    I have spent 6+ years working on my own in the field of design and computer graphics, <br/>
                    making logos, conceptual designs, editing videos and making 3d assets for video games. <br/>
                    While freelancing, I've also spent the time to run my own Youtube channel, currently ~ 100k.
                </p>

                <p>
                    I love front end, since I've been doing design for so long, and backend equally, <br/>
                    because of my love of modelling logic for complex problems.
                </p>

                <p>
                    with a lighthearted attitude, I am ready to learn new skills and technolgies!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;