import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from 'framer-motion';

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function Typewriter() {
    return ( 
      <motion.div
      initial= "initial"
      animate= "animate"
      variants= {text}>
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#FFF',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={1000}
        cursorColor="#FFF"
        multiText={[
          'Hello World!',
          'My name is...',
          'Kelvin'
        ]}
        multiTextDelay={1200}
        typeSpeed={100}
      /> 
      </motion.div>
      );
}

export default Typewriter;