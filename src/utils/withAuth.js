"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      // Add your authentication logic here
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
