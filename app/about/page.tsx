import Mission from '@/components/about/mission';
import SetsUsApart from '@/components/about/sets-us-apart';
import Team from '@/components/about/team';
import WhoAreWe from '@/components/about/who-are-we';
import PageHero from '@/components/shared/hero';
import React from 'react';

function About() {
  return (
    <main>
      <PageHero title="About Us." />
      <WhoAreWe />
      <Mission />
      <SetsUsApart />
      <Team />
    </main>
  );
}

export default About;
