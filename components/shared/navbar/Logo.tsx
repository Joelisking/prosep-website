'use client';

/* eslint-disable @next/next/no-img-element */
import logo from '@/public/logo.png';
import Link from 'next/link';

const Logo = () => (
  <div className="">
    <Link href={'/'}>
      <img
        src={logo.src.toString()}
        width={100}
        height={100}
        alt="Society of St. Vincent de Paul"
      />
    </Link>
  </div>
);

export default Logo;
