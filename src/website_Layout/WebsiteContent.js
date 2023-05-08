import { motion } from "framer-motion";
import React, { useState } from "react";
import ContentBody from "../animation_components/ContentBody";
import Sidebar from "../animation_components/Sidebar";
import Typewriter from "../animation_components/Typewriter";

const WebsiteContent = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  
  const handleOnClick = () => {
    setIsClicked(true);
  };

    return (
      <div onClick={handleOnClick}>
        <motion.div
          initial ={{
            scale: 1.7,
          }}
          animate={
            isClicked?{
              scale: 1,
              transitionEnd: {
              display: "none",
              },
              transition: {
                duration: 3,
              },
            }
            : {}
          }
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
      </div>
    );
  };
  
  export default WebsiteContent ;