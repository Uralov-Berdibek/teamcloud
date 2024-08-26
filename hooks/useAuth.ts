// hooks/useAuth.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/auth');
          return;
        }

        // Check user existence
        await axios.get('http://localhost:8090/api/v1/user', {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Redirect based on team existence
        // Logic to check if the team exists should be implemented here
        // Example: await axios.get('/api/v1/team'); // Adjust the endpoint

        // For demo purposes, redirecting to add team if team does not exist
        // router.push('/add-team');
      } catch (err) {
        router.push('/auth');
      }
    };

    checkAuth();
  }, [router]);
};

export default useAuth;
