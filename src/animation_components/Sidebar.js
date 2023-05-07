import React from "react";
import Rectangle from "./basic shapes/Rectangle";
import SidebarButton from "./SidebarButton";
import { useState } from "react";

const Sidebar = () =>{
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
      }

    const buttons = [
        { text: "Projects", svgIcon: "2", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white" },
        { text: "Skills", svgIcon: "3", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white" },
        { text: "About me", svgIcon: "1", color1: "#D3BBAF", color2: "#fae7e0", switchColor: "white" }
    ]

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
                                handleClick={() => handleButtonClick(button)}
                                active={button === activeButton}
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