import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import JoinCreator from "./components/JoinCreator";
import ApplyCreator from "./components/ApplyCreator";
import WorkWithUs from "./components/WorkWithUs";
import StartCampaign from "./components/Compaign";
import CampaignThankYou from "./components/CompaignThankyou";
import CreatorThankYou from "./components/CreatorThankyou";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-creator" element={<JoinCreator />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/start-compaign" element={<StartCampaign />} />
          <Route path="/campaign-success" element={<CampaignThankYou />} />
          <Route path="/apply-success" element={<CreatorThankYou />} />
          <Route path="/apply-creator" element={<ApplyCreator />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
