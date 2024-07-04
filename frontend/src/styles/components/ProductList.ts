import styled from 'styled-components'

export const ProductContainer = styled.div`
  background-color: #FAFAFA;

  .productContainer {
    padding: 48px 24px;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: fit-content;
    align-items: start;
    justify-content: center;
  }

  .productContent {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`
