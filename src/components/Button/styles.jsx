import styled from 'styled-components';

export const CardButton = styled.button`
  background: none;
  width: 100%;
  display: flex;
  border: none;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const ReturnButton = styled.button`
  background: none;
  width: 100%;
  display: flex;
  border: none;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const PinkButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: #ffb3bd;
  color: '#16120F';
  font-size: 17px;
`;

export const TabButton = styled.button`
  color: ${({ selected }) => (selected ? 'black' : 'white')};
  width: 100%;
  border: none;
  background-color: ${({ selected }) => (selected ? 'transparent' : 'gray')};
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 3vh;
`;

export const TabButtonContainer = styled.div`
  display: flex;
`;
