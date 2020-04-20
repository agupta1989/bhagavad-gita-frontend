import React from 'react';
import ContactSection from '../components/ContactSection';

function ContactPage() {
  return (
    <ContactSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Contact Us"
      subtitle=""
      buttonText="Send message"
      showNameField
    />
  );
}

export default ContactPage;
