import React from 'react'

import Header from '../Header/Index';
import TagsHeader from '../TagsHeader/Index';

import { Container } from './styles';

const Index: React.FC = () => {
  return (
    <Container>
      <Header />
      <TagsHeader />
    </Container>
  )
}

export default Index;
