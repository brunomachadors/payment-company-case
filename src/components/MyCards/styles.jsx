import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 16px;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
export const CardNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CardName = styled.p`
  font-size: 5vw;
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardNumber = styled.p``;

export const CreateDigitalCard = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 23px;
  text-align: center;
  margin-top: 4vh;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 15px;
`;

export const CreateCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
