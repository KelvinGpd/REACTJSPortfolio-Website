import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from 'framer-motion';

function Typewriter() {

    return ( 
      <div className='TypewriterContainer'>
        <TypeWriterEffect
            textStyle={{
              fontFamily: 'Inter-Regular',
              color: 'black',
              fontWeight: 300,
              fontSize: '1.5em',
            }}
            startDelay={100}
            cursorColor="black"
            multiText={[
              'Im Kelvin Chen, a Software developper.',
              'Welcome to my Website!'
            ]}
            multiTextDelay={1200}
            typeSpeed={60}
        /> 
          <motion.p className='typeText' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>Click anywhere to continue</motion.p>
      </div>
      );
}

export default Typewriter;