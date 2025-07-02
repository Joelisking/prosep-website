import Form from '@/components/contact/Form';
import Info from '@/components/contact/Info';
import Container from '@/components/shared/container';
import PageHero from '@/components/shared/hero';
import React from 'react';

function Contact() {
  return (
    <main>
      <PageHero title="Contact Us." />
      <Container className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 xl:gap-16 mt-16 md:mt-24 lg:mt-32">
        <Form />
        <Info />
      </Container>
    </main>
  );
}

export default Contact;
