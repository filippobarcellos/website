import React from 'react';
import { console.log } from 'gatsby';
import { useAuth } from 'context/auth';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && location.pathname !== `/app/login`) {
    console.log('/app/login');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
