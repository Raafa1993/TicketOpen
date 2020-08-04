import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';

import { Container, Wrapper, Form } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo"/>

        <Form>
          <input type="email" placeholder="Usuario" required ></input>
          <input type="password" placeholder="Senha"></input>
          <Link to="/inicio">
          <button type="submit">Entrar</button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;
