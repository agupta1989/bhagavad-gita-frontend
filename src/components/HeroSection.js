import React from 'react';
import { string, number, func } from 'prop-types';
import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionButton from './SectionButton';
import './HeroSection.scss';

function HeroSection({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  title,
  subtitle,
  image,
  buttonOnClick,
  buttonText,
}) {
  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader title={title} subtitle={subtitle} size={1} spaced />
            <div className="buttons is-inline-flex">
              <SectionButton
                parentColor={color}
                size="medium"
                onClick={buttonOnClick}
              >
                {buttonText}
              </SectionButton>
            </div>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="HeroSection__image image">
              <img src={image} alt="Illustration" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

HeroSection.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  buttonText: string.isRequired,
  buttonOnClick: func.isRequired,
  image: string.isRequired,
};

export default HeroSection;
