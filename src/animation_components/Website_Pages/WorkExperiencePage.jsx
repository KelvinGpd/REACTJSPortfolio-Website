import { useEffect, useState } from "react";
import WorkExperience from "../../data/WorkExperience.json"
import WorkExperienceContainer from "../global_components/WorkExperienceContainer.jsx";
import WorkExperienceTop from "./WorkExperience_Components/WorkExperienceTop.jsx";
import WorkExperienceBottom from "./WorkExperience_Components/WorkExperienceBottom.jsx";

const WorkExperiencePage = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    useEffect (() => {
        console.log("Selected experience" + selectedExperience);
    }, [selectedExperience])

    return (
        <div className="work-experience-page">
            {WorkExperience.map((experience) => {
                return (
                    <WorkExperienceContainer
                        experience = {experience}
                        selectedExperience = {selectedExperience}
                        setSelectedExperience = {(experience) => {setSelectedExperience(experience)}}
                    />
                )
            })}

            {selectedExperience ? 
                <div className="selected-experience-display-page"> 
                    <WorkExperienceTop
                        experience = {selectedExperience}
                        setSelectedExperience = {setSelectedExperience}
                    />
                    <WorkExperienceBottom
                        experience = {selectedExperience}
                    />
                </div> : null
            }

        </div>
    )

}
export default WorkExperiencePage;