import Axios from "axios";
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  width: 100;
  margin: 3%;
  background: #282c34;
	border-radius: 25px;
	img {
		height: 80vh;
		margin: 2%;
		border-radius: 25px;

		&:hover {
			transform: scale(1.05);
			transition: all 0.2s ease-in-out;
		}
		transition: all 0.2s ease-in-out;
	}
	.explanation {
		width: 90%;
		margin: auto;
	}
	h2 {
		padding-top: 3%;
	}
`

export default function MarsRover() {
  const [roverData, setRoverData] = useState('')

  useEffect(() => {
    const fetchRoverData = () => {
      Axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=idPVF2phmeLVMMDa0xdQA02T9gzLpoiX0D8a753C')
        .then(res => {
          setRoverData(res.data.photos[0]);
        })
        .catch(err => {
          debugger
        })
    }
    fetchRoverData()
  }, [])

  console.log(roverData.rover)
  return (
    <StyledSection>
      <h2>Cool Rover Pic!</h2>
      <img src={roverData.img_src} alt='Cool Rover' />
    </StyledSection>
  )
}