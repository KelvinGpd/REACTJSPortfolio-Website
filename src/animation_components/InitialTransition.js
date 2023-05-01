import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const blackBox = {
  initial: {
    height: "100vh",    
    bottom: 0,
  },
  animate: {
    height:0,
    transition: {
      when:"afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
    delay:5,
  },
};

const InitialTransition = () => {
  return (
    <div className="some">
      <motion.div 
        className="blackBox"
        initial="initial"
        animate="animate"
          variants={blackBox}
      />
    </div>
  );
};

export default InitialTransition;