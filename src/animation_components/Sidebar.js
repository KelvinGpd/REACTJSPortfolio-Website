import React from "react";
import Rectangle from "./basic shapes/Rectangle";
import SidebarButton from "./SidebarButton";
import { useState } from "react";
import { Edit } from "@mui/icons-material";

import AddReactionIcon from '@mui/icons-material/AddReaction';
import TerminalIcon from '@mui/icons-material/Terminal';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const Sidebar = ({sendActiveToParent}) =>{
    
    const [buttons, setButtons] = useState ([
        { 
            text: "Projects", 
            svgIcon: <TerminalIcon color="#D3BBAF"> <Edit/> </TerminalIcon>,
            currentActive: false 
        },
        { 
            text: "Skills", 
            svgIcon: <EqualizerIcon color="#D3BBAF"> <Edit/> </EqualizerIcon>, 
            currentActive: false 
        },
        { 
            text: "About me", 
            svgIcon: <AddReactionIcon color="#D3BBAF"> <Edit/> </AddReactionIcon>, 
            currentActive: false 
        },
        { 
            text: "Work experience", 
            svgIcon: <WorkHistoryIcon color="#D3BBAF"> <Edit/> </WorkHistoryIcon>, 
            currentActive: false 
        }
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
