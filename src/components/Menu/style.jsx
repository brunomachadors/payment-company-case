import styled from 'styled-components';

export const MenuView = styled.div`
  color: black;
  background-color: transparent;
  position: absolute;
  z-index: 3;
  background-color: transparent;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const MenuButtonsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
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

export const KlarnaName = styled.button`
  border: none;
  background: none;
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 3vh;
`;

export const BarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
