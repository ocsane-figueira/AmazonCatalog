import Header from '../components/Header';
import Body from '../components/Body';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Info = ({ edit }) => {
    const navigate = useNavigate();

    async function onSubmit(animal) {
        delete animal.id;
        await axios.post(`http://localhost:8080/api/animal/`, animal);
        navigate('/');
    }
  
    return (
      <>
        <Header />
        <Body>
          <Form onSubmit={onSubmit} />
        </Body>
      </>
    );
  }
  
  export default Info;