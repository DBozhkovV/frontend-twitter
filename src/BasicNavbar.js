import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import isLoged from './isLoged';

function BasicNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">Twitter AliExpress</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
            {isLoged() ? <Nav.Link href="posts">Posts</Nav.Link> : null}
            {isLoged() ? null : <Nav.Link href="login">Login</Nav.Link>}
            {isLoged() ? null : <Nav.Link href="register">Register</Nav.Link>}
            {isLoged() ? <Nav.Link href="logout">Logout</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;