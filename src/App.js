import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  const [pages] = useState([
    "about",
    "portfolio",
    "contact",
    "resume"
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  function renderCurrentPage() {
    switch (currentPage) {
      case pages[0]:
        return (<About />);
      case pages[1]:
        return (<Portfolio />);
      case pages[2]: 
        return (<Contact />);
      case pages[3]:
        return (<Resume />);
      default:
        return (<About />);
    }
  }
  
  return (
    <div className='App'>
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}


export default App;
