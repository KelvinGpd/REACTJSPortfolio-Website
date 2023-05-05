import { motion } from "framer-motion";
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='burgerMenu'>
        <motion.div onClick={handleMenuClick} className="burgerIcon"
        whileHover={{ scale:1.2 }}>
            <MenuRoundedIcon/>
        </motion.div>
      {isMenuOpen && (
        <div className='burgerItems'>
            <motion.a href='https://github.com/KelvinGpd' target="_blank"
            whileHover={{ scale: 1.2 }}>
                <EmailIcon/> 
            </motion.a>
            <motion.a href='https://github.com/KelvinGpd' target="_blank"
            whileHover={{ scale: 1.2 }}>
                <GitHubIcon/> 
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/kelvin-chen-762167261/' target="_blank"
            whileHover={{ scale: 1.2 }}>
                <LinkedInIcon/> 
            </motion.a> 
            <motion.a href='https://www.youtube.com/@GrapefruitBush' target="_blank"
            whileHover={{ scale: 1.2 }}>
                <YouTubeIcon/> 
            </motion.a>           
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;