import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-content: start;
  justify-content: center;

  .productContainer {
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: flex-start;
  }

  .productCarousel {
    width: 50%;
  }

  .sliderImageContainer {
    display: flex;
    justify-content: flex-start;
  }

  .sliderImage {
    width: 100%;
    height: auto;
  }

  .productInfo {
    flex: 1;
    margin: 0 1rem 1rem;
    .title {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0 1rem 1rem;
      width: 60%;
    }
    .description {
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 1rem 1rem;
      color: #6f707e;
      width: 60%;
    }

    .priceBox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: end;
      width: 60%;

      .annualPrice {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin: 0.5rem 0.5rem 0.2rem 1rem;
        color: #6f707e;
      }

      .monthlyPrice {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        margin: 0 1rem 1rem;
      }
    }
  }
`;

export const StyledButton = styled.button`
  margin-top: 2rem;
  height: 48px;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #4bd184;
  padding: 0.75rem 2rem;
  font-weight: 700;
  line-height: 1;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;
