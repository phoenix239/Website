import React from 'react';
import { ContactForm, PageTitleFrame } from 'components';

const ContactPage = () => {
  return (
    <PageTitleFrame title='Contact Me' noBottomRule>
      <ContactForm />
    </PageTitleFrame>
  );
};

export default ContactPage;
