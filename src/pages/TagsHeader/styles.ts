import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 80px;
`;

export const SeusTickets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;
  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  strong {
    font-size: 18px;
    font-weight: bold;

    color: #D5D5D7;
    position: relative;

    &::before {
      content: '';
      width: 5px;
      height: 48px;
      border-radius: 8px;
      background-color: #21CFC5;
      left: -15px;
      top: -12px;

      position: absolute;
    }
  }


`;

export const Abertos = styled.div`
display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;
  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  strong {
    font-size: 18px;
    font-weight: bold;

    color: #D5D5D7;
    position: relative;

    &::before {
      content: '';
      width: 5px;
      height: 48px;
      border-radius: 8px;
      background-color: #55D976;
      left: -34px;
      top: -12px;

      position: absolute;
    }
  }


`;

export const Andamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;
  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  strong {
    font-size: 18px;
    font-weight: bold;

    color: #D5D5D7;
    position: relative;

    &::before {
      content: '';
      width: 5px;
      height: 48px;
      border-radius: 8px;
      background-color: #F28A2E;
      left: -18px;
      top: -12px;

      position: absolute;
    }
  }
`;

export const Fechado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;
  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  strong {
    font-size: 18px;
    font-weight: bold;

    color: #D5D5D7;
    position: relative;

    &::before {
      content: '';
      width: 5px;
      height: 48px;
      border-radius: 8px;
      background-color: #F2274C;
      left: -32px;
      top: -12px;

      position: absolute;
    }
  }
`;
