import React from 'react';
import Container from './container';
import { Button } from '../ui/button';
import { Icon } from '../ui';

function ContactCta() {
  return (
    <Container>
      <section className="bg-gradient-to-r from-[#00254F] to-[#077BCF] py-12 mt-32 flex flex-col items-center justify-center rounded-3xl mb-12">
        <h2 className="font-bold text-4xl text-white">
          Ready to Make an Enquiry?
        </h2>
        <p className="text-white mt-4">
          Reach out to us with your needs, and we will respond to you
          as quickly as possible!
        </p>
        <Button className="mt-4 bg-white text-black hover:bg-white/90">
          Contact Us <Icon name="MoveRight" />
        </Button>
      </section>
    </Container>
  );
}

export default ContactCta;
