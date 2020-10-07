import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState('')

  useEffect(() => {
    const fetchNasaData = () => {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=idPVF2phmeLVMMDa0xdQA02T9gzLpoiX0D8a753C')
        .then(res => {
          setNasaData(res.data);
          console.log(res.data);
        })
        .catch(err => {
          debugger
        })
    }
    fetchNasaData()
  }, [])

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Nasa Clone</h1>
        <nav>
          <a href="" style={{textDecoration: 'none'}}>Anchor1</a>
          <a href="" style={{textDecoration: 'none'}}>Anchor2</a>
          <a href="" style={{textDecoration: 'none'}}>Anchor3</a>
        </nav>
      </header>
      <section className='potd'>
        <img src={nasaData.hdurl} style={{height: '80vh', margin: '2%', borderRadius: '25px'}} alt='Nasa picture of the day' />
        <h2>Nasa Picture of the Day</h2>
        <br></br>
        <h3>{nasaData.title}</h3>
        <br></br>
        <p style={{width: '90%', margin: 'auto'}}>{nasaData.explanation}</p>
        <br></br>
        <h4>{nasaData.copyright} - {nasaData.date}</h4>
        <br></br>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p>
        <br></br>
      </section>
    </div>
  );
}

export default App;
