import React from 'react';
import { string, number, node } from 'prop-types';
import BackgroundImage from './BackgroundImage';

import './Section.scss';

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    children,
    ...otherProps
  } = props;

  return (
    <section
      className={`SectionComponent hero section is-block is-relative${
        color ? ` is-${color}` : ''
      }${size ? ` is-${size}` : ''}`}
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
          repeat={backgroundImageRepeat}
        />
      )}

      {children}
    </section>
  );
}

Section.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  backgroundImageRepeat: string.isRequired,
  children: node.isRequired,
};

export default Section;
