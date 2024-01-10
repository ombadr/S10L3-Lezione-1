import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Sono la pagina About</h1>
      <Link to='/about/interno'>Vai al componente interno</Link>
      <button onClick={() => navigate('/personal')} className='btn btn-primary'>
        LOGIN
      </button>
    </Container>
  );
};

export default About;
