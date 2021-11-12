import styled from "styled-components";

export const Container = styled.form`
  width: 600px;
  margin: 0 auto;
  justify-content: center;

  h2 {
    margin: 1rem 0;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 25px;

    border: 1px solid #d7d7d7;
    background: #fff;

    font-weight: 400;
    font-size: 1rem;

    margin-bottom: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

  }

  textarea{
      max-width: 100%;
      padding: 1rem;
  }

  button{
    display: block;
    width: 250px;
    padding: 0 1.5rem;
    height: 4rem;
    color: #ffffff;
    border-radius: 20px;
    border: 0;
    font-size: 1rem;
    margin: auto;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .buttonSave{
      background: var(--green);
    }

`;
