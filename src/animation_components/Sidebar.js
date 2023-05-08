import React from "react";
import Rectangle from "./basic shapes/Rectangle";
import SidebarButton from "./SidebarButton";
import { useState } from "react";

const Sidebar = ({sendActiveToParent}) =>{
    
    const [buttons, setButtons] = useState ([
        { text: "Projects", svgIcon: "2", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white", currentActive: false },
        { text: "Skills", svgIcon: "3", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white",  currentActive: false },
        { text: "About me", svgIcon: "1", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white",  currentActive: false }
    ])

    const handleButtonClick = (key) => {
        const updatedButtons = buttons.map(button => {
            if (button.text === key) {
                return {...button, currentActive: true};
            } 
            else {
                return {...button, currentActive: false};
            }
        });
        setButtons(updatedButtons);
        sendActiveToParent(key);
    }

    return(
        <div className="sidebar">
            <div className="sideBarOptions">
                    <div className="toggleOptions">
                        {buttons.map((button) => (
                            <SidebarButton
                            key={button.text}
                            text={button.text}
                            svgIcon={button.svgIcon}
                            color1={button.color1}
                            color2={button.color2}
                            switchColor={button.switchColor}
                            currentActive={button.currentActive} 
                            onClick={() => handleButtonClick(button.text)}
                            />
                        ))}
                    </div>
                <Rectangle width="98%" height="100%" color="#D3BBAF" className= "optionsContainer"/>
                <Rectangle width="2%" height="100%" color="white"/>
            </div>
        </div>
    );
}

export default Sidebar;
