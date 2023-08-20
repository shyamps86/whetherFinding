import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Whether from './whether/whetherComponent';
import City from './whether/cityComponent';
const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
box-shadow:4px 4px 3px black;
padding:20px 5px;
background-color:white;
border-radius:5px;
align-items:center;
width:500px;
justify-content:center;
`;
const AppLable = styled.span`color:black; font-weight:bold; font-size:30px`;

// const CityComponent = styled.div`display:flex; flex-direction:column;`;
// const WhetherComponent = styled.div`display:flex; flex-direction:column;`;
const App = () => {
  const [city, updateCity] = useState(" ");
  const [wheth, updateWheth] = useState(" ")
  const fetchWhether = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWheth(res);
  }
  return (
    <Container>
      <AppLable>Whether Display</AppLable>
      {/* <CityComponent>
        city name
      </CityComponent>
      <WhetherComponent>
        display whether
      </WhetherComponent> */}
      <City updateCity={city} fetchWhether={fetchWhether} />
      {/* <Whether /> */}
    </Container>
  )
}

export default App;