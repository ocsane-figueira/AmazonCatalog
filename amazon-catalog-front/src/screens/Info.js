import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import Header from '../components/Header';
import Animal from '../components/Animal';
import Body from '../components/Body';
import axios from 'axios';
import Form from '../components/Form';

async function loadAnimal(navigate, id, set) {
  try {
    const response = await axios.get(`http://localhost:8080/api/animal/${id}`);
    set(response.data);
  } catch (error) {
    navigate('/');
  }
}

const Info = ({ edit }) =>{
  const navigate = useNavigate();
  const { id } = useParams();

  const [animal, setAnimal] = React.useState({})

  async function onSubmit(animal) {
    delete animal.id;
    await axios.put(`http://localhost:8080/api/animal/${id}`, animal);
    navigate('/');
  }

  React.useEffect(() => {
    if (!id)
      return;

    loadAnimal(navigate, id, setAnimal)
  }, [id])

  return (
    <>
      <Header />
      <Body>
        <Animal animal={animal} />
        {edit && !!animal?.id &&
        <Form 
          animal={animal}
          onSubmit={onSubmit}
        />}
      </Body>
    </>
  );
}

export default Info;