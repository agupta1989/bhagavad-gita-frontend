import React, { useState } from 'react';
import { string } from 'prop-types';

import './FaqItem.scss';

function FaqItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article className="FaqItem" onClick={() => setExpanded(!expanded)}>
      <div className="title is-spaced is-4">
        <span className="FaqItem__icon icon is-size-5 has-text-primary">
          <i
            className={`fas${expanded ? ' fa-minus' : ''}${
              !expanded ? ' fa-plus' : ''
            }`}
          />
        </span>
        {question}
      </div>

      {expanded && <div className="subtitle">{answer}</div>}
    </article>
  );
}
FaqItem.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
};
export default FaqItem;
