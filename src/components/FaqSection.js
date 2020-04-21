import React from 'react';
import { string, number } from 'prop-types';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Faq from './Faq';

function FaqSection({
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
          size={3}
          spaced
          className="has-text-centered"
        />
        <Faq
          items={[
            {
              question: 'Integer ornare neque mauris?',
              answer:
                'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.',
            },
            {
              question: 'Lorem ipsum dolor sit amet?',
              answer:
                'Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.',
            },
            {
              question: 'Suspendisse ut tincidunt?',
              answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.',
            },
            {
              question: 'Ut enim ad minim veniam?',
              answer:
                'Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.',
            },
            {
              question: 'In velit mi, rhoncus dictum neque?',
              answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            },
          ]}
        />
      </div>
    </Section>
  );
}

FaqSection.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default FaqSection;
