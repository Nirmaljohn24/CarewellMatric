import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import HeroCarousel from "./components/HeroCarousel";
import VisionMissionMotto from "./components/VisionMissionMotto";
import AboutSchool from "./components/AboutSchool";
import StatsSection from "./components/StasSection";
import AboutSchoolUs from "./components/AboutSchoolUs";
import Academic from "./components/Academic";
import Admission from "./components/Admission";
import Features from "./components/Features";
import Activities from "./components/Activities";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <VisionMissionMotto />
              <AboutSchool />
              <StatsSection />
              <Academic/>
              <Admission/>
              <Features/>
              <Activities/>
            </>
          }
        />

        <Route path="/about-school" element={<AboutSchoolUs />} />
      </Routes>
    </Router>
  );
}

export default App;
