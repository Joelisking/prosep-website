import AboutHero from '@/components/about/hero';
import Mission from '@/components/about/mission';
import SetsUsApart from '@/components/about/sets-us-apart';
import Team from '@/components/about/team';
import WhoAreWe from '@/components/about/who-are-we';
import React from 'react';

function About() {
  return (
    <main>
      <AboutHero />
      <WhoAreWe />
      <Mission />
      <SetsUsApart />
      <Team />
    </main>
  );
}

export default About;
