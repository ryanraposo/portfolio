import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';

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
        return (<></>);
      case pages[2]: // Contact
        return (<></>);
      case pages[3]: // Resume
        return (<></>);
      default:
        return (<></>);
    }
  }
  
  return (
    <div>
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
