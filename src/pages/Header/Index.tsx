import React from 'react'

import logo from '../../assets/Logo.svg';

import ButtonsHeader from '../ButtonsHeader/Index';

import { Header } from './styles';

const Index: React.FC = () => {
  return (
      <Header>
        <img src={logo} alt="Logo"/>

        <ButtonsHeader />
      </Header>
  )
}

export default Index;
