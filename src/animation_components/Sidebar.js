import React from "react";
import Rectangle from "./basic shapes/Rectangle";
import RoundedRectangle from "./basic shapes/RoundedRectangle";
import SidebarButton from "./SidebarButton";

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sideBarOptions">
                    <div className="toggleOptions">
                        <SidebarButton text="Click Me!"/>
                    </div>
                <Rectangle width="15%" height="100%" color="#D3BBAF" className= "optionsContainer"/>
                <Rectangle width="0.3%" height="100%" color="white"/>
            </div>
        </div>
    );
}

export default Sidebar;