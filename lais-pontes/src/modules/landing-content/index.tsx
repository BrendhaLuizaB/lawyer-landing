import AboutSection from "@/common/components/about/about";
import { HeaderNav } from "@/common/components/header/header";
import Hero from "@/common/components/hero/hero";

function LandingContent() {
    return (
      <>
        <HeaderNav />
        <div className="mt-[9rem]">
          <Hero />
          <AboutSection />
        </div>
      </>
    );
}

export default LandingContent;