import CustomerStoreSection from './sections/customer-store-section';
import FeatureSection from './sections/feature-section';
import HeroSection from './sections/hero-section';
import SupportSection from './sections/support-section';

export default function LandingPage() {
  return (
    <article className='flex flex-col'>
      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <CustomerStoreSection />
    </article>
  );
}
