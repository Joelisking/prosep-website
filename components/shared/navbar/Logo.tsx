'use client';

import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';

const Logo = () => (
  <div className="">
    <Link href={'/'}>
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Society of St. Vincent de Paul"
        priority
      />
    </Link>
  </div>
);

export default Logo;
