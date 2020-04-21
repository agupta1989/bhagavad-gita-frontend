import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import useProvideAuth from '../hooks/useProviderAuth';

const authContext = createContext();

// Context Provider component that wraps your app and makes auth object
// available to any child component that calls the useAuth() hook.
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook that enables any component to subscribe to auth state
export const useAuth = () => useContext(authContext);
