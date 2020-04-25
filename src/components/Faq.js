import React from 'react';
import { arrayOf, shape } from 'prop-types';

import FaqItem from './FaqItem';

function Faq({ items }) {
  return (
    <>
      {items.map((item) => (
        <FaqItem question={item.question} answer={item.answer} key={item.question} />
      ))}
    </>
  );
}

Faq.propTypes = {
  items: arrayOf(shape({})).isRequired,
};
export default Faq;
