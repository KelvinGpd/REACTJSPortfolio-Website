import React, { useState } from 'react';

const RoundedRectangle = ({ width, height, borderRadius, color}) => {

    const style = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: color,
    };

    return <div style={style}></div>;
};

export default RoundedRectangle;
