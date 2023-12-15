import styled from 'styled-components';

export const ContentView = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;
export const ContentBlock = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  margin-top: -5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  padding: 25px;
`;

export const ContentBlockLarge = styled.div`
  background-color: black;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  padding: 0 25px 0 25px;
`;

export const ContentTitle = styled.div`
  color: white;
  font-size: 7vw;
  text-align: left;
  font-family: 'KlarnaTextMedium', sans-serif;
  white-space: pre-line;
`;

export const ContentDescription = styled.div`
  color: white;
  font-size: small;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContentDescriptionComplement = styled.div`
  color: white;
  font-size: small;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-width: 70%;
`;

export const ContentFooter = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  padding: 25px;
`;

export const KlarnaNameWhite = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 3vh;
`;
