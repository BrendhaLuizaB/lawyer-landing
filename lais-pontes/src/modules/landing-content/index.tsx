import AboutSection from "@/components/about/about";
import Activity from "@/components/areas-of-activity/areas";
import FAQ from "@/components/faq/faq";
import Feedbacks from "@/components/feedbacks/feedbacks";
import Footer from "@/components/footer/footer";
import { HeaderNav } from "@/components/header/header";
import Hero from "@/components/hero/hero";
import { MessageForm } from "@/components/sendEmail/message-form";

function LandingContent() {
    return (
      <>
        <HeaderNav />
        <div className="mt-[9rem]">
          <Hero />
          <AboutSection />
          <Activity />
          <Feedbacks />
          <FAQ />
          <MessageForm />
          <Footer />
        </div>
      </>
    );
}

export default LandingContent;