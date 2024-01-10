import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar className='bg-body-primary'>
      <Container>
        <Nav className='ms-auto'>
          <Link to='/' className='nav-link text-light'>
            Home
          </Link>
          <Link to='/about' className='nav-link text-light'>
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
