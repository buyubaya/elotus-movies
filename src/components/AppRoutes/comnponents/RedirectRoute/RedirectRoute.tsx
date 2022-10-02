import React from 'react';
import { Navigate } from 'react-router-dom';

function RedirectRoute({ to }: { to: string }) {
  return <Navigate to={to} replace />;
}

export default RedirectRoute;
