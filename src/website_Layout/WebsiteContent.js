import { motion } from "framer-motion";
import React from "react";
import ContentBody from "../animation_components/ContentBody";
import Sidebar from "../animation_components/Sidebar";
import Typewriter from "../animation_components/Typewriter";


const WebsiteContent = () => {
    return (
      <motion.div
        initial ={{
          scale: 1.5,
        }}
        animate={{
          scale: 1,
          transitionEnd: {
          display: "none",
          },
        }}
        transition = {{duration:3}}
        className = "initialAnimation"
        >
        <div className="websiteDisplay">
            <Typewriter/>
            <div className="initialDisplay">
              <Sidebar/>
              <ContentBody/>
            </div>
        </div>
      </motion.div>
    );
  };
  
  export default WebsiteContent ;