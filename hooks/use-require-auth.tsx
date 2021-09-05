import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './use-auth';

const useRequireAuth = (redirectUrl = '/login') => {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push(redirectUrl);
    }
  }, [auth]);
  return auth;
};

export default useRequireAuth;
