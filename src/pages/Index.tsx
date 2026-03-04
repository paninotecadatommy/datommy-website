import Hero from "@/components/Hero";
import StrengthsStrip from "@/components/StrengthsStrip";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReviewsSlider from "@/components/ReviewsSlider";
import HowToOrder from "@/components/HowToOrder";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Hero />
      <StrengthsStrip />
      <FeaturedMenu />
      <ReviewsSlider />
      <HowToOrder />
      <Location />
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
