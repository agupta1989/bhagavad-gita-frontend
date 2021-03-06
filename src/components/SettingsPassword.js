import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import FormAlert from './FormAlert';
import FormField from './FormField';
import SectionButton from './SectionButton';
import { useAuth } from '../util/auth';

function SettingsPassword({ parentColor, onRequireReauth }) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const {
    register, handleSubmit, errors, reset, getValues,
  } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    auth
      .updatePassword(data.pass)
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: 'success',
          message: 'Your password has been updated',
        });
      })
      .catch((error) => {
        if (error.code === 'auth/requires-recent-login') {
          // Remove existing alert message
          setFormAlert(null);

          // Show re-authentication modal and
          // then re-call onSubmit() when done.
          onRequireReauth(() => {
            onSubmit({ pass: data.pass });
          });
        } else {
          // Show error alert message
          setFormAlert({
            type: 'error',
            message: error.message,
          });
        }
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
        <FormField
          name="pass"
          type="password"
          label="Password"
          placeholder="Password"
          error={errors.pass}
          inputRef={register({
            required: 'Please enter a password',
          })}
        />
        <FormField
          name="confirmpass"
          type="password"
          label="Confirm New Password"
          placeholder="Confirm Password"
          error={errors.confirmPass}
          inputRef={register({
            required: 'Please enter your new password again',
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              }
              return "This doesn't match your password";
            },
          })}
        />
        <div className="field">
          <div className="control">
            <SectionButton
              parentColor={parentColor}
              size="medium"
              state={pending ? 'loading' : 'normal'}
            >
              Save
            </SectionButton>
          </div>
        </div>
      </form>
    </>
  );
}

SettingsPassword.propTypes = {
  parentColor: PropTypes.string.isRequired,
  onRequireReauth: PropTypes.func.isRequired,
};

export default SettingsPassword;
