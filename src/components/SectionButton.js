import React from 'react';
import {
  string, number, node, bool,
} from 'prop-types';

function SectionButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={`button${
        [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'black',
          'dark',
        ].includes(parentColor)
          ? ` is-${parentColor} is-inverted`
          : ''
      }${
        ['white', 'light'].includes(parentColor) || !parentColor
          ? ' is-primary'
          : ''
      }${size ? ` is-${size}` : ''}${state ? ` is-${state}` : ''}${
        fullWidth ? ' is-fullwidth' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

SectionButton.propTypes = {
  parentColor: string.isRequired,
  size: number.isRequired,
  state: string.isRequired,
  fullWidth: bool.isRequired,
  children: node.isRequired,
};

export default SectionButton;
