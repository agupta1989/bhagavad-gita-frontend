import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import ReauthModal from './ReauthModal';
import SettingsNav from './SettingsNav';
import SettingsGeneral from './SettingsGeneral';
import SettingsPassword from './SettingsPassword';
import { useAuth } from '../util/auth';
import './SettingsSection.scss';

function SettingsSection({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
}) {
  const auth = useAuth();
  const [section, setSection] = useState('general');

  // If an action is security sensitive it will
  // trigger a re-authentication flow.
  const [reauthState, setReauthState] = useState({
    show: false,
  });

  const handleRequireReauth = (callback) => {
    setReauthState({
      show: true,
      callback,
    });
  };

  const handleCompleteReauth = () => {
    reauthState.callback();
    setReauthState({ show: false });
  };

  const handleCancelReauth = () => {
    setReauthState({ show: false });
  };

  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      {reauthState.show && (
        <ReauthModal
          provider={auth.user.providers[0]}
          onComplete={handleCompleteReauth}
          onCancel={handleCancelReauth}
        />
      )}

      <SettingsNav
        activeKey={section}
        onSelect={(selected) => setSection(selected)}
      />
      <div className="SettingsSection__container container">
        {section === 'general' && (
          <SettingsGeneral
            onRequireReauth={handleRequireReauth}
            parentColor={color}
          />
        )}

        {section === 'password' && (
          <SettingsPassword
            onRequireReauth={handleRequireReauth}
            parentColor={color}
          />
        )}
      </div>
    </Section>
  );
}

SettingsSection.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundImageOpacity: PropTypes.string.isRequired,
};

export default SettingsSection;
