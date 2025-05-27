import AboutSection from "@/common/components/about/about";
import Activity from "@/common/components/areas-of-activity/areas";
import Feedbacks from "@/common/components/feedbacks/feedbacks";
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
          <Feedbacks />
        </div>
      </>
    );
}

export default LandingContent;