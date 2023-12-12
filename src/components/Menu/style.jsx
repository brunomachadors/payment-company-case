import styled from 'styled-components';

export const MenuView = styled.div`
  color: black;
  background-color: white;
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const MenuButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid black;
`;

export const MenuButton = styled.button`
  height: 15vw;
  text-align: left;
  background-color: white;
  border: none;
  border-bottom: 1px solid black;
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const MenuTitle = styled.div``;
