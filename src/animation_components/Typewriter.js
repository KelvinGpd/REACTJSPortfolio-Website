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
      );
}

export default Typewriter;