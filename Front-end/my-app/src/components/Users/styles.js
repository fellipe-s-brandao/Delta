import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .cardsUser {
    width: 350px;
    text-align: center;
    background-color: #fff;
    margin: 1rem 1rem;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

    h3 {
      font-size: 1rem;
      color: var(--text-title);
    }

    .buttonEdit {
      margin: 1rem auto;
      display: block;
      background-color: var(--red);
      width: 100px;
      padding: 0.5rem;
      border: none;
      border-radius: 20px;
      box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
      color: #fff;
      text-decoration: none;
      transition: all 0.2s;
      &:hover {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
