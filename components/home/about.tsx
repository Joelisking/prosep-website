import React from 'react';
import { Button, Icon } from '../ui';
import Image from 'next/image';
import Container from '../shared/container';
import Link from 'next/link';

function HomeAbout() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32 bg-gradient-to-r from-[#00254F] to-[#077BCF] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Us
            </h2>
            <p className="mt-4 text-base md:text-lg">
              We always put our customers first, ensuring your needs
              are met from the very beginning of our process till you
              have your desired goods in hand. We always put our
              customers first, ensuring your needs are met from the
              very beginning of our process till you have your desired
              goods in hand. We always put our customers first,
            </p>
            <Link href="/about">
              <Button className="mt-4 bg-white hover:bg-white/90 transition-all duration-300 text-black">
                Read More <Icon name="MoveRight" />
              </Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <Image
              src="/home/about.png"
              alt="About"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAbout;
