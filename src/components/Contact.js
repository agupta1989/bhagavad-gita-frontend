import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { bool, string } from 'prop-types';

import FormAlert from './FormAlert';
import FormField from './FormField';
import SectionButton from './SectionButton';
import contact from '../util/contact';

function Contact({ showNameField, parentColor, buttonText }) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const {
    handleSubmit, register, errors, reset,
  } = useForm();

  const onSubmit = ({ name, email, message }) => {
    // Show pending indicator
    setPending(true);

    contact
      .submit({ name, email, message })
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: 'success',
          message: 'Your message has been sent!',
        });
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
          type: 'error',
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <>
      {formAlert && <FormAlert type={formAlert.type} message={formAlert.message} />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-horizontal">
          <div className="field-body">
            {showNameField && (
              <FormField
                name="name"
                type="text"
                placeholder="Name"
                error={errors.name}
                inputRef={register({
                  required: 'Please enter your name',
                })}
              />
            )}

            <FormField
              name="email"
              type="email"
              placeholder="Email"
              error={errors.email}
              inputRef={register({
                required: 'Please enter your email',
              })}
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <FormField
              name="message"
              type="textarea"
              placeholder="Message"
              rows={5}
              error={errors.message}
              inputRef={register({
                required: 'Please enter a message',
              })}
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <SectionButton
                  parentColor={parentColor}
                  size="medium"
                  state={pending ? 'loading' : 'normal'}
                >
                  {buttonText}
                </SectionButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

Contact.propTypes = {
  showNameField: bool.isRequired,
  parentColor: string.isRequired,
  buttonText: string.isRequired,
};
export default Contact;
