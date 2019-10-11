import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
// console.log(props);

    return (
    <CharCard>
<h1>{props.char.name}</h1>
<h3>Birth Year: {props.char.birth_year}</h3>
<h2>Hair Color: {props.char.hair_color}</h2>
<h2>Eye Color: {props.char.eye_color}</h2>
    </CharCard>
    )}

const CharCard = styled.div`
width: 30%;
height: 250px;
display: inline-block;
margin: 1%;
border: 1px solid lightBlue;
box-shadow: 5px 4px;
`

export default Character;
