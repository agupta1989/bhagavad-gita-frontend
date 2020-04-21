import React from 'react';
import { useRouter } from 'next/router';
import AuthSection from '../../components/AuthSection';

function AuthTypePage() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <AuthSection
      color="white"
      size="large"
      backgroundImage=""
      backgroundImageOpacity={1}
      type={type}
      providers={['google', 'facebook', 'twitter']}
      afterAuthPath="/dashboard"
    />
  );
}

// Disable static pre-rendering because page needs a dynamic value from router.query.
// Otherwise value will be undefined when Next tries to pre-render this page.
export async function getServerSideProps() {
  return { props: {} };
}

export default AuthTypePage;
