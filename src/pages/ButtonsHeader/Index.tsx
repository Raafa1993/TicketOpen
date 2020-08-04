import React from 'react'
import { Link } from 'react-router-dom';

import { Buttons, AddTicket, Profile, AddIcon, ProfileIcon, AddTitle, ProfileTitle } from './styles';

const ButtonsHeader: React.FC = () => {
  return (
        <Buttons>
          <Link to="/AddTicket">
            <AddTicket>
              <AddIcon />
              <AddTitle>Add ticket</AddTitle>
            </AddTicket>
            </Link>

          <Profile>
            <ProfileIcon />
            <ProfileTitle>Perfil</ProfileTitle>
          </Profile>
        </Buttons>
  )
}

export default ButtonsHeader;
