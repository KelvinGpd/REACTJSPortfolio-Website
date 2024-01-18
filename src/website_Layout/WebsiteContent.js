import { motion } from "framer-motion";
import React, { useState } from "react";
import ContentBody from "./ContentBody";
import Sidebar from "../animation_components/Website_Pages/Sidebar.jsx";
import Typewriter from "../animation_components/Typewriter";

const WebsiteContent = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleSetActiveButton = (key) => {
    setActiveButton(key);
  }

  const renderTypewriter = () => {
    if (activeButton === '') {
      return <Typewriter/>
    }
  }

  const handleOnClick = (event) => {
    event.stopPropagation();
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
              },
              transition: {
                duration: 3,
              },
            }
            : {}
          }
          transition = {{duration:3}}
          className = "websiteDisplay"
          >
            {renderTypewriter()}
            <div className="initialDisplay">
              <Sidebar sendActiveToParent={handleSetActiveButton}/>
              <ContentBody activeButton={activeButton}/>
            </div>
        </motion.div>
      </div>
    );
  };
  
  export default WebsiteContent ;