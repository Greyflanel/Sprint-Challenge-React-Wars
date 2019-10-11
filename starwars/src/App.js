import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import './App.css';


const App = () => {
  const [charData, setCharData] = useState([])

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
      .then(response => {
          setCharData(response.data.results)
      })
      .catch(error => console.log(error));
  }, []);

console.log(charData)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
      {charData.map(char => ( 
      <Character key={char.name} char={char}/>
     ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
color: darkorange;
text-shadow: 2px 3px brown;
`

export default App;