/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { string, func } from 'prop-types';

function SettingsNav({ activeKey, onSelect }) {
  return (
    <div className="tabs is-toggle is-centered">
      <ul>
        <li className={`${activeKey === 'general' ? ' is-active' : ''}`}>
          <a onClick={() => onSelect('general')}>General</a>
        </li>
        <li className={`${activeKey === 'password' ? ' is-active' : ''}`}>
          <a onClick={() => onSelect('password')}>Password</a>
        </li>
      </ul>
    </div>
  );
}

SettingsNav.propTypes = {
  activeKey: string.isRequired,
  onSelect: func.isRequired,
};
export default SettingsNav;
