import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
