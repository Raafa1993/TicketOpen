import styled from 'styled-components';

import { Add } from '@styled-icons/ionicons-outline/Add';
import { User } from '@styled-icons/heroicons-outline/User';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 330px;

`;

export const AddTicket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;

  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  cursor: pointer;

  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const AddIcon = styled(Add)`
  width: 40px;
  height: 40px;

  color: #D5D5D7;

`;

export const AddTitle = styled.div`
  font-size: 18px;
  font-weight: bold;

  color: #D5D5D7;

  margin-right: 8px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 140px;
  height: 58px;
  background-color: #15141A;

  border: 1px solid #A2A2A4;
  border-radius: 8px;

  box-shadow: -5px 5px 8px 0px rgba(0,0,0,0.75);

  cursor: pointer;

  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

`;

export const ProfileIcon = styled(User)`
  width: 38px;
  height: 38px;

  color: #D5D5D7;
`;

export const ProfileTitle = styled.div`
  font-size: 18px;
  font-weight: bold;

  color: #D5D5D7;

  margin-right: 8px;


`;
