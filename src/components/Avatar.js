import React from 'react';
import { string, number, shape } from 'prop-types';

function Avatar({
  image, size, alt, ...otherProps
}) {
  return (
    <figure className={`image${size ? ` is-${size}x${size}` : ''}`}>
      <img className="is-rounded" src={image} alt={alt} {...otherProps} />
    </figure>
  );
}

Avatar.propTypes = {
  image: string.isRequired,
  size: number.isRequired,
  alt: string.isRequired,
  otherProps: shape({}).isRequired,
};
export default Avatar;
