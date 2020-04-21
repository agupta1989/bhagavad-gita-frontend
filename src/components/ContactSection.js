import React from 'react';
import { string, number, bool } from 'prop-types';
import Section from './Section';
import SectionHeader from './SectionHeader';

import Contact from './Contact';
import './ContactSection.scss';

function ContactSection({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  title,
  subtitle,
  parentColor,
  showNameField,
  buttonText,
}) {
  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="ContactSection__container container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          size={3}
          spaced
          className="has-text-centered"
        />
        <Contact
          parentColor={parentColor}
          showNameField={showNameField}
          buttonText={buttonText}
        />
      </div>
    </Section>
  );
}

ContactSection.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  parentColor: string.isRequired,
  showNameField: bool.isRequired,
  buttonText: string.isRequired,
};

export default ContactSection;
