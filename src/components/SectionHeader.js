import React from 'react';
import { string, number, bool } from 'prop-types';
import './SectionHeader.scss';

function SectionHeader({
  title, subtitle, className, size, spaced,
}) {
  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <header className={`SectionHeader${className ? ` ${className}` : ''}`}>
      {title && (
        <h1
          className={`title has-text-weight-bold${size ? ` is-${size}` : ''}${
            size === 1 ? ' is-size-2-mobile' : ''
          }${spaced ? ' is-spaced' : ''}`}
        >
          {title}
        </h1>
      )}

      {subtitle && (
        <p className={`subtitle${size > 4 ? ' is-6' : ''}`}>
          <span className="SectionHeader__no-classname">{subtitle}</span>
        </p>
      )}
    </header>
  );
}

SectionHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  className: string,
  size: number.isRequired,
  spaced: bool.isRequired,
};

SectionHeader.defaultProps = {
  className: '',
};
export default SectionHeader;
