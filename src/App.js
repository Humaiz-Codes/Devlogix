import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import About from './Components/Elements/About';
import ChooseUs from './Components/Elements/ChooseUs';
import Engagement from './Components/Elements/Engagement';
import TestomonialCrousal from './Components/Elements/TestomonialCarousel';
import HeroCarousel from './Components/Elements/HeroCarousel';
import Hero from './Components/Elements/Hero';
import Services from './Components/Elements/Services';
import Devfaq from './Components/Elements/Devfaq';
import Team from './Components/Elements/Team';
import Appointment from './Components/Elements/Appointment';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <HeroCarousel/>
      <About/>
      <Services/>
      <ChooseUs/>
      <Engagement/>
      <TestomonialCrousal/>
      <Appointment/>
      <Team/>
      <Devfaq/>
      <Footer/>
    </div>
  );
}

export default App;
