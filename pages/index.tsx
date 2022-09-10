import type { NextPage } from "next";
import AboutSection from "../components/about/AboutSection";
import StartConversation from "../components/contact/StartConversation";
import HeroSection from "../components/hero/HeroSection";
import { Layout } from "../components/layout";
import Pricing from "../components/pricing/Pricing";
import Services from "../components/services/Services";
import Welcome from "../components/welcome/Welcome";
import RecentWork from "../components/work/RecentWork";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Welcome />
      <Services />
      <RecentWork />
      <StartConversation />
      <AboutSection />
      <Pricing />
    </Layout>
  );
};

export default Home;
