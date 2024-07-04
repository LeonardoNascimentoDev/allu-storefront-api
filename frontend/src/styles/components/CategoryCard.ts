import styled from 'styled-components'

export const Card = styled.div`
  // margin: 0.5rem;
  // flex: 1 1 auto;
  // position: relative;

  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: #EBEBE3;
  padding: 12px;
  cursor: pointer;
   width: 81px;
    height: 81px;
  
  
  
  .categoryCard {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }

  .image {
    display:flex;
    align-self: center;
    justify-self: center;
    object-fit: cover;
    border: 2px solid black;
    // transition: all 5s cubic-bezier(0.14, 0.96, 0.91, 0.6);
  }

  .info {
    background: white;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  :hover .image {
    transform: scale(1.2);
  }

  :hover .info {
    opacity: 0.9;
  }
`
