import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import About from "@/sections/about";
import Explore from "@/sections/explore";
import Feedback from "@/sections/feedback";
import GetStarted from "@/sections/getStarted";
import Hero from "@/sections/hero";
import Insights from "@/sections/insights";
import WhatsNew from "@/sections/whatsNew";
import World from "@/sections/world";

export default function Home() {
  return (
    <main className="bg-primary-black overflow-hidden">
      <NavBar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-05 z-0" />
        <Feedback />
      </div>
      <Footer />
    </main>
  );
}
