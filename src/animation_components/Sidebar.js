import React from "react";
import Rectangle from "./Rectangle";

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebarContent">
                <Rectangle width="15%" height="100%" color="#252526" />
                <Rectangle width="0.3%" height="100%" color="#F15A22" />    
            </div>
        </div>
    );
}

export default Sidebar;