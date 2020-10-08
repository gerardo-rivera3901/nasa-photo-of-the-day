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
		margin: 0;
	}
`

export default StyledSection