import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(props) {
  const {
    pages,
    setCurrentPage,
    currentPage
  } = props;
  
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Ryan Raposo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#about" onClick={() => setCurrentPage(pages[0])}>About</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentPage(pages[1])}>Portfolio</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setCurrentPage(pages[2])}>Contact</Nav.Link>
                <Nav.Link href="#resume" onClick={() => setCurrentPage(pages[3])}>Resume</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
}


export default Navigation;
