import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import HomeAbout from '@/components/home/about';
import TopProducts from '@/components/shared/top-products';
import Partners from '@/components/home/partners';
import { getTopProducts } from '@/lib/topProducts';
// import ContactCta from '@/components/shared/contact-cta';

export default async function Home() {
  const topProductsData = await getTopProducts('home');

  return (
    <main>
      <Hero />
      <Services />
      <HomeAbout />
      <TopProducts data={topProductsData} />
      <Partners />
    </main>
  );
}
