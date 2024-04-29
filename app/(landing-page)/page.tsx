import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";
import Footer from "@/components/footer";

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        
        <SixthSection />
        <SeventhSection />
        <GetStartedFree />
        <Footer />
    </div>
  )
}
export default LandingPage;