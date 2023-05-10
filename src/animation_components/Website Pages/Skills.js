import { useState } from "react";
import SkillBox from "./SkillBox";

const Skills = () => { 

    const [categories, setCategory] = useState ([
        {category: "Development"},
        {category: "Design"},
        {category: "Other"}
    ])

    return(
        <div className = "Skills">
            {categories.map((category) => (
                <div className="skillCategory">
                    <h3 className="categoryName">{category.category}</h3>
                    <SkillBox category={category.category}/>
                </div>
            ))}    
        </div>
    );
};

export default Skills;