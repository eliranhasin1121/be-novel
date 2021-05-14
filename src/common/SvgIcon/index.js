import React from 'react';

const SvgIcon = ({ src, width, height }) => {
    return <img src={`${src}`} alt={src} with={width} height={height} />
}

export default SvgIcon;
