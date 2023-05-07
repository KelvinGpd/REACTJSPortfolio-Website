import React, { useState } from 'react';

const RoundedRectangle = ({ width, height, borderRadius, color1, color2 }) => {
    const [backgroundColor, setBackgroundColor] = useState(color1);

    const handleClick = () => {
        if (backgroundColor == color1) {
        setBackgroundColor(color2);
        }
        else{
            setBackgroundColor(color1);
        }
    };

    const style = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
    };

    return <div style={style} onClick={handleClick}></div>;
};

export default RoundedRectangle;
