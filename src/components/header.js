import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #202020;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
      color: white;
      margin: 0;
  }

  nav {
  display: flex;
  justify-content: center;
  }

  a {
    margin: 5%;
  }
`
export default function Header() {
    return (
        <StyledHeader className='App-header'>
            <h1>Nasa Clone</h1>
            <nav>
                <a href="" style={{textDecoration: 'none'}}>Anchor1</a>
                <a href="" style={{textDecoration: 'none'}}>Anchor2</a>
                <a href="" style={{textDecoration: 'none'}}>Anchor3</a>
            </nav>
      </StyledHeader>
    )
}