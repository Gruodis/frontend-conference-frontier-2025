import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Topics from "./components/Topics";
//import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import SurveyForm from "./components/Survey";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Partners />
      <Speakers />
      <Schedule />
      <Topics />
      <SurveyForm />
      <FAQ />
    </main>
  );
}

export default App;
