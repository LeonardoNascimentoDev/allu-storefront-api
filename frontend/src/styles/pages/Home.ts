import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  padding: 0 2rem;
  min-height: 80vh;
  align-self: center;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;

  .title {
    display: flex;
    justify-content: center; 
    background-color: #FFF;   
  }
  
  .categoryContainer{
    display: flex;
    flex-direction: row;
    padding: 24px 48px;
    gap: 20px;
    width: 100vw;
    justify-content: center;

    .categoryItem {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Small = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Large = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
