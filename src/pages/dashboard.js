import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardPlaceholder from '../components/DashboardPlaceholder';
import { useAuth } from '../util/auth';

function DashboardPage() {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/auth/signin');
    }
  }, [auth, router]);

  return (
    <DashboardPlaceholder
      color="white"
      size="large"
      title="Dashboard"
      subtitle="Dashboard components are coming to the Divjoy library soon. For now, you can implement a custom dashboard here after exporting your code."
    />
  );
}

export default DashboardPage;
