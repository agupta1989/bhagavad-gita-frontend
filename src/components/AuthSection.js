import React from 'react';
import {
  string, number, arrayOf, shape,
} from 'prop-types';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Auth from './Auth';
import './AuthSection.scss';

function AuthSection({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  providers,
  afterAuthPath,
  type,
}) {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: 'Welcome back',
      // Submit button text
      buttonText: 'Sign in',
      // Link text to other auth types
      linkTextSignup: 'Create an account',
      linkTextForgotpass: 'Forgot Password?',
    },
    signup: {
      title: 'Get yourself an account',
      buttonText: 'Sign up',
      linkTextSignin: 'Sign in',
    },
    forgotpass: {
      title: 'Get a new password',
      buttonText: 'Reset password',
    },
    changepass: {
      title: 'Choose a new password',
      buttonText: 'Change password',
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[type] ? type : 'signup';

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="AuthSection__container container">
        <SectionHeader
          title={allTypeValues[currentType].title}
          subtitle=""
          size={3}
          spaced
          className="has-text-centered"
        />
        <Auth
          type={currentType}
          typeValues={typeValues}
          parentColor={color}
          providers={providers}
          afterAuthPath={afterAuthPath}
          key={currentType}
        />
      </div>
    </Section>
  );
}

AuthSection.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  type: string.isRequired,
  afterAuthPath: string.isRequired,
  providers: arrayOf(shape({})).isRequired,
};

export default AuthSection;
