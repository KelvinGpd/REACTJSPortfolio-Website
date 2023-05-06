import { motion } from "framer-motion";
import React, { useState } from 'react';
import RoundedRectangle from "./basic shapes/RoundedRectangle";


const SidebarButton = ({text, link, svgIcon}) => {
    return( 
        <motion.div>
            <div className="buttonContainer">
                <h1 className="buttonText">{text}</h1>
                <RoundedRectangle className="buttonRect" width="90%" height="15%" borderRadius="8px" color1="#D3BBAF" color2="white"/>
            </div>
        </motion.div>
    );
};

export default SidebarButton;