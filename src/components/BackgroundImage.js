import React from 'react';
import { bool, string, number } from 'prop-types';
import './BackgroundImage.scss';

function BackgroundImage({ repeat, image, opacity }) {
  return (
    <div
      className={`BackgroundImage${repeat ? ' repeat' : ''}`}
      style={{
        '--image': `url(${image})`,
        '--opacity': opacity,
      }}
    />
  );
}

BackgroundImage.propTypes = {
  repeat: bool.isRequired,
  image: string.isRequired,
  opacity: number.isRequired,
};

export default BackgroundImage;
