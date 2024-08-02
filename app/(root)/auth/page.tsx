'use client';

import React, { useEffect } from 'react';
import AuthComponent from '../../../components/auth/auth';

const Auth = () => {
  useEffect(() => {
    // Get the current reload count from sessionStorage
    const reloadCount = sessionStorage.getItem('reloadCount');

    // Function to handle page reload
    const handlePageReload = () => {
      if (reloadCount === null) {
        // If no reload count is set, start with 1 and reload
        sessionStorage.setItem('reloadCount', '1');
        window.location.reload();
      } else if (reloadCount === '1') {
        // If reload count is 1, set to 2 and reload
        sessionStorage.setItem('reloadCount', '2');
        window.location.reload();
      }
      // If reload count is 2 or more, do nothing
    };

    handlePageReload();
  }, []);

  return <AuthComponent />;
};

export default Auth;
