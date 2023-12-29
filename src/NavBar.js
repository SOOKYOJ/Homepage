import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/homepage">Soo's Clothes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/top">Top</Nav.Link>
            <Nav.Link href="/bottom">Bottom</Nav.Link>
            <Nav.Link href="/jacket">Jacket</Nav.Link>
            <NavDropdown title="Accessory" id="basic-nav-dropdown">
              <NavDropdown.Item href="/accessory/ring">ring</NavDropdown.Item>
              <NavDropdown.Item href="/accessory/earing">earing</NavDropdown.Item>
              <NavDropdown.Item href="/accessory/belt">belt</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
