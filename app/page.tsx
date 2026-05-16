import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Trust } from '@/components/trust';
import { Features } from '@/components/features';
import { ServiceCatalog } from '@/components/ServiceCatalog';
import { Pricing } from '@/components/pricing';
import { Timeline } from '@/components/timeline';
import { Booking } from '@/components/booking';
import { FAQ } from '@/components/faq';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'ELCODERS - Transform Your Vision Into Reality',
  description: 'Premium web development, design, and AI solutions for your business.',
  openGraph: {
    title: 'ELCODERS - Premium Digital Solutions',
    description: 'Web development, UI/UX design, and AI integration services.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <ServiceCatalog />
      <Pricing />
      <Timeline />
      <Booking />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
