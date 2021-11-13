import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  padding: 2rem 1rem;
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .buttonMenu {
      color: #fff;
      text-decoration: none;
      font-size: 1.4rem;
      background-color: rgba(255, 255, 225, 0.1);
      width: 250px;
      padding: 0.5rem;
      margin-right: 1.5rem;
      text-align: center;
      border-radius: 20px;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .imgDelta {
    width: 150px;
    margin-right: 4rem;
    margin-bottom: 2rem;
  }
`;
