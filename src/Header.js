import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
    return (
      <Navbar variant="dark" className="custom-nav" fixed="top">
          <Container>
          <Nav.Link href={process.env.PUBLIC_URL + "/message"} className="custom-nav-link">Message</Nav.Link>
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>March 19, 2022</Navbar.Brand>
          <Nav.Link href={process.env.PUBLIC_URL + "/photos"} className="custom-nav-link">Photos</Nav.Link>
          </Container>
      </Navbar>
    );
  }
  
  export default Header;