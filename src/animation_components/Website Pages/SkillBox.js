import { useEffect, useState } from "react";
import SingleSkill from "./SingleSkill";
import Skills from "./Skills.json"


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
                description={skill.description}
                color={skill.color}
                shadowCol={skill.shadowCol}
                />
            ))}
        </div>
    );
};

export default SkillBox;