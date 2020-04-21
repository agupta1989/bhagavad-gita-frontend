import React from 'react';
import { string, number } from 'prop-types';

import Section from './Section';
import SectionHeader from './SectionHeader';
import { useAuth } from '../util/auth';
import './DashboardPlaceholder.scss';

function DashboardPlaceholder({ color, size }) {
  const auth = useAuth();
  if (!auth.user) return null;

  return (
    <Section color={color} size={size}>
      <div className="container">
        <SectionHeader
          title="Hey there 👋"
          subtitle={`You are logged in as ${auth.user.email}`}
          size={3}
          spaced
          className="has-text-centered"
        />
        <div className="columns is-vcentered is-desktop">
          <div className="column is-6-desktop">
            This would be a good place to build your custom product features
            after exporting your codebase.
            <br />
            <br />
            You can grab the current user, query your database, and render
            custom components. Divjoy gives you everything you need so that you
            can get right to work on building your web app.
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="DashboardPlaceholder__image image">
              <img
                src="https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
                alt="Illustration"
              />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

DashboardPlaceholder.propTypes = {
  color: string.isRequired,
  size: number.isRequired,
};
export default DashboardPlaceholder;
