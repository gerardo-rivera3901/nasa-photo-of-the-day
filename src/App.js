import Axios from "axios";
import React, { useState, useEffect } from "react";
import Header from './components/header'
import Potd from './components/potd'
import Marsrover from './components/marsrover'
import styled from 'styled-components'

import "./App.css";

const StyledDiv = styled.div`
  * {
    padding: 0;
    color: #fff;
    text-align: center;
    /* border: 1px solid white; */
  }
`

function App() {
  const [nasaData, setNasaData] = useState('')

  useEffect(() => {
    const fetchNasaData = () => {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=idPVF2phmeLVMMDa0xdQA02T9gzLpoiX0D8a753C')
        .then(res => {
          setNasaData(res.data);
        })
        .catch(err => {
          debugger
        })
    }
    fetchNasaData()
  }, [])

  return (
    <StyledDiv className="App">
      <Header />
      <Potd >
        <img src={nasaData.hdurl} alt='Nasa picture of the day' />
        <h2>Nasa Picture of the Day</h2>
        <br></br>
        <h3>{nasaData.title}</h3>
        <br></br>
        <p className='explanation'>{nasaData.explanation}</p>
        <br></br>
        <h4>{nasaData.copyright} - {nasaData.date}</h4>
        <br></br>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p>
        <br></br>
      </Potd>
      <Marsrover />
    </StyledDiv>
  );
}

export default App;
