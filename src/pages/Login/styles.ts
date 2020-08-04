import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  width: 620px;
  height: 670px;
  background-color: #1D1E24;
  box-shadow: -10px 10px 10px 0px rgba(0,0,0,0.75);

`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  max-width: 300px;

  svg {
    width: 200px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;

    margin: 5px 0;

    width: 100%;
    height: 60px;

    font-size: 1rem;
    font-weight: bold;
    background-color: #15141A;

    transition: 0.2s;

    color: #EFEFEF;

    ::placeholder {
      color: #EFEFEF;
    }

    &:hover {
      border: 1px solid #8186D5;
    }
  }

  button {
    border: 1px solid #8186D5;
    border-radius: 5px;

    margin: 5px 0;

    width: 300px;
    height: 60px;

    background-color: #494CA2;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;

    opacity: 0.8;
    transition: 0.3s ease-in;

    &:hover {
      opacity: 1;
    }
  }

`;

