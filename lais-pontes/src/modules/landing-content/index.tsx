import AboutSection from "@/common/components/about/about";
import Activity from "@/common/components/areas-of-activity/areas";
import { HeaderNav } from "@/common/components/header/header";
import Hero from "@/common/components/hero/hero";

function LandingContent() {
    return (
      <>
        <HeaderNav />
        <div className="mt-[9rem]">
          <Hero />
          <AboutSection />
          <Activity />
        </div>
      </>
    );
}

export default LandingContent;