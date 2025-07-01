import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import HomeAbout from '@/components/home/about';
import TopProducts from '@/components/home/top-products';
import Partners from '@/components/home/partners';
// import ContactCta from '@/components/shared/contact-cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HomeAbout />
      <TopProducts />
      <Partners />
      {/* <ContactCta /> */}
    </main>
  );
}
