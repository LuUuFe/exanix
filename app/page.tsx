import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import MarketAnalysisSection from './components/MarketAnalysisSection';
import PartnershipsSection from './components/PartnershipsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <MarketAnalysisSection />
      <PartnershipsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}