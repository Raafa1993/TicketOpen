import React from 'react'

import { Container, SeusTickets, Abertos, Andamento, Fechado } from './styles';

const TagsHeader: React.FC = () => {
  return (
      <Container>
        <SeusTickets>
          <strong>Seus Tickets</strong>
        </SeusTickets>

        <Abertos>
          <strong>Abertos</strong>
        </Abertos>

        <Andamento>
          <strong>Andamento</strong>
        </Andamento>

        <Fechado>
          <strong>Fechado</strong>
        </Fechado>


      </Container>
  )
}

export default TagsHeader;
