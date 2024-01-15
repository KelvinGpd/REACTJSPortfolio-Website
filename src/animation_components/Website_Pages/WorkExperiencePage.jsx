import WorkExperience from "../../data/WorkExperience.json"
import WorkExperienceContainer from "../global_components/WorkExperienceContainer.jsx";

const WorkExperiencePage = () => {

    return (
        <div className="work-experience-page">

            {WorkExperience.map((experience) => {
                return (
                    <WorkExperienceContainer
                        experience = {experience}
                    />
                )
            })}
            
        </div>
    )

}
export default WorkExperiencePage;