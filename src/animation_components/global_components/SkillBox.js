import SingleSkill from "./SingleSkill";
import Skills from "../../data/Skills.json";

const SkillBox = ({category}) => {

    function getSkillsByCategory(category) {
        return Skills.filter(skill => skill.category === category);
    }

    let skills = getSkillsByCategory(category);

    return(
        <div className="categorySkills">
            {skills.map((skill) =>(
                <SingleSkill
                name={skill.name}
                image={skill.image}
                color={skill.color}
                shadowCol={skill.shadowCol}
                />
            ))}
        </div>
    );
};

export default SkillBox;