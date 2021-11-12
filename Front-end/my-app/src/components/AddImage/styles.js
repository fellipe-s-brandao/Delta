import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 600px;

  .imgPreview {
    width: 100%;
    height: 460px;
    display: flex;
    border-radius: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
  }

  .imgPreview input[type="file"] {
    display: none;
  }

  .imgPreview .customFileUpload {
    background: #55d6d6;
    color: #fff;
    margin: 10px 0;
    border-radius: 20px;
    font-size: 22px;
    font-weight: 500;
    padding: 6px 12px;
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 25px;
    outline: none;
    width: 100%;
    margin: 10px 0 0 0;
    padding: 14px 10px;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
  }

  .saveImage{
    background: #55d6d6;
  }

  .removeImage{
    background: red;
  }

  .errorMsg {
    background: red;
    color: #fff;
    text-align: center;
    border-radius: 25px;
    font-size: 24px;
    margin: 3px 0;
  }
`;
