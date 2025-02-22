import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import CustomBreadcrumb from "./Components/CustomBreadcrumb";
import Homepage from "./Components/homepage";
import PhysiciansPage from "./Components/Physicians";
import ServicesPage from "./Components/Services";
import EducationPage from "./Components/Education";
import BlogPage from './Components/Blog';
import ContactUsPage from './Components/Contact';
import Footer from "./Components/footer";
import DialysisPage from "./Components/Dialysis";
import HypertensionPage from "./Components/Hypertension";
import KidneyDiseasePage from "./Components/KidneyDisease";
import KidneyDoctorPage from "./Components/KidneyDoctor";
import KidneyStonesPage from "./Components/KidneyStones";
import PatientRegistrationPage from "./Components/PatientRegistration";
import DirectionPage from "./Components/Direction";
import SignSymptomPage from './Components/SignSymptom';
import HowNephrologistsPage from './Components/HowNephrologists';
import UnderstandingHypertensionPage from './Components/UnderstandingHypertension';
import KidneyStonesCausesPage from './Components/KidneyStonesCauses';
import WelcomeBlogPage from './Components/WelcomeBlog';
import InsideKidneyStonePage from './Components/InsideKidneyStone';
import InsideNephrologistsPage from './Components/InsideNephrologists';
import SiteMapPage from './Components/SiteMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <CustomBreadcrumb /> {/* Breadcrumb component */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/physicians" element={<PhysiciansPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/services/dialysis" element={<DialysisPage />} />
            <Route path="/services/hypertension" element={<HypertensionPage />} />
            <Route path="/services/kidney-disease" element={<KidneyDiseasePage />} />
            <Route path="/services/kidney-doctor" element={<KidneyDoctorPage />} />
            <Route path="/services/kidney-stones" element={<KidneyStonesPage />} />
            <Route path="/patient-registration" element={<PatientRegistrationPage />} />
            <Route path="/education/blog" element={<BlogPage />} />
            <Route path="/locations-directions" element={<DirectionPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/signs-symptoms-kidney-stones-want-to-see-a-doctor" element={<SignSymptomPage />} />
            <Route path="/how-nephrologists-diagnose-kidney-disorders" element={<HowNephrologistsPage />} />
            <Route path="/understanding-hypertension-causes-symptoms-and-risk-factors" element={<UnderstandingHypertensionPage />} />
            <Route path="/kidney-stones-causes-for-concern" element={<KidneyStonesCausesPage />} />
            <Route path="/welcome-to-our-blog" element={<WelcomeBlogPage />} />
            <Route path="/blog/kidney-stones" element={<InsideKidneyStonePage />} />
            <Route path="/blog/nephrologists" element={<InsideNephrologistsPage />} />
            <Route path="/sitemap" element={<SiteMapPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
