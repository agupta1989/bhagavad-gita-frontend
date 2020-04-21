import React from 'react';
import { string, number } from 'prop-types';
import Section from './Section';
import SectionHeader from './SectionHeader';

function HeroSection2({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  title,
  subtitle,
}) {
  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          size={1}
          spaced
          className="has-text-centered"
        />
      </div>
    </Section>
  );
}

HeroSection2.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default HeroSection2;
