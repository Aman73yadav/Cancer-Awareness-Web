import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import BestFeatures from './components/BestFeatures';
import ProcessSection from './components/ProcessSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AISupport from './components/AISupport';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BestFeatures />
      <QuotesSection />
      <ProcessSection />
      <ContactForm />
      <Footer />
      <AISupport />
    </div>
  );
}

export default App;
