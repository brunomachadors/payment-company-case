import styled from 'styled-components';

export const BusinessCardDisplay = styled.div`
  width: 70vw;
  height: 20vh;
  max-width: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid black;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Face = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
`;

export const FrontFace = styled(Face)`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 100%;
  font-family: 'KlarnaTextMedium', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  z-index: 2;
  transform: rotateY(0deg);
`;

export const BackFace = styled(Face)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  transform: rotateY(180deg);
`;

export const CardDisplayImage = styled.img`
  display: flex;
  height: 90%;
  margin-bottom: 0;
`;

export const CardName = styled.div`
  color: white;
  text-align: center;
  font-size: 3.5vw;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  white-space: nowrap;
`;

export const Description = styled.div`
  background-color: black;
  border: 1px solid white;
  max-width: 70%;
`;

export const LinkedinButton = styled.button`
  max-width: 70%;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 2vw;
  color: white;
  padding: 1vw;
`;
