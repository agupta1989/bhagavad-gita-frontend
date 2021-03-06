import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SettingsSection from '../components/SettingsSection';
import { useAuth } from '../util/auth';

function SettingsPage() {
  const auth = useAuth();
  const router = useRouter();

  // Redirect if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/auth/signin');
    }
  }, [auth, router]);

  // Show loading until we have user
  if (!auth.user) {
    return 'Loading...';
  }

  return (
    <SettingsSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
    />
  );
}

export default SettingsPage;
