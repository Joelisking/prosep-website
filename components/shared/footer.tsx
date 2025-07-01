import React from 'react';
import Container from './container';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@/components/ui';
import Link from 'next/link';
import ContactSection from '@/components/shared/contact-cta';

function Footer() {
  return (
    <div>
      <ContactSection />

      <footer className="bg-gradient-to-r from-[#00254F] to-[#077BCF] text-white py-20 mt-12 sm:mt-16">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={300}
                height={300}
              />
            </div>
            <div className="max-w-xl">
              <span>
                <span className="text-[#00C2FF] font-bold">
                  Working Days:
                </span>{' '}
                Monday to Friday, 8:00 AM to 5:00 PM
              </span>
            </div>
          </div>

          <Separator className="opacity-30 my-10" />

          <div className="flex items-center justify-between">
            <div>
              <p>
                Copyright © 2025 Prosep Services Limited. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href={''}>
                <Icon name="Facebook" fill="#fff" />
              </Link>
              <Link href={''}>
                <Icon name="Twitter" fill="#fff" />
              </Link>
              <Link href={''}>
                <Icon name="Linkedin" fill="#fff" />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
