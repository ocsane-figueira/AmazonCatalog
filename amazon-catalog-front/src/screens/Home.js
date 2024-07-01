import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Animal from '../components/Animal';
import axios from 'axios';
import Body from '../components/Body';

async function loadAnimals(set) {
  const response = await axios.get('http://localhost:8080/api/animal/');
  set(response.data);
}

const Home = () => {
  const [animals, setAnimals] = React.useState([]);
  const [filtred, setFiltred] = React.useState([]);

  function search(event) {
    const find = String(event.target.value).replace(/\s+/g, '').toLowerCase();

    const filtered = animals.filter(animal => {
      let toSearch = String(animal.name + animal.title).replace(/\s+/g, '').toLowerCase();
      return toSearch.includes(find);
    });

    setFiltred(filtered);
  }

  React.useEffect(() => {
    setFiltred(animals);
  }, [animals]);

  React.useEffect(() => {
    loadAnimals(setAnimals);
  }, []);

  return (
    <>
      <Header withSearch={search} />
      <Body>
        {filtred.map((animal, index) => <Animal key={index} animal={animal} reverse={index % 2} actions />)}
      </Body>
    </>
  );
}

export default Home;