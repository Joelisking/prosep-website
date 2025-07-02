import React from 'react';
import Container from './container';
import { Button } from '../ui/button';
import { Icon } from '../ui';
import Link from 'next/link';

function ContactCta() {
  return (
    <Container>
      <section className="bg-gradient-to-r from-[#00254F] to-[#077BCF] py-8 sm:py-10 md:py-12 mt-16 sm:mt-24 md:mt-32 flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl mb-8 sm:mb-10 md:mb-12 px-4 sm:px-8 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          Ready to Make an Enquiry?
        </h2>
        <p className="text-white mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-2xl">
          Reach out to us with your needs, and we will respond to you
          as quickly as possible!
        </p>
        <Link href="/contact">
          <Button className="mt-4 bg-white hover:bg-white/90 transition-all duration-300 text-black">
            Contact Us <Icon name="MoveRight" />
          </Button>
        </Link>
      </section>
    </Container>
  );
}

export default ContactCta;
