import TypeWriterEffect from 'react-typewriter-effect';

function Typewriter() {

    return ( 
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
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
      );
}

export default Typewriter;