import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }: any) => {

  return (
    <Route
      {...rest}
      render={() =>
        children
      }
    />
  )
}

export default PublicRoute
