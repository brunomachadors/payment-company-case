import styled from 'styled-components';

export const CardDisplay = styled.div`
  background-color: black;
  width: 70vw;
  height: 20vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CardKlarnaDisplay = styled.div`
  color: white;
  width: 95%;
  text-align: right;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  z-index: 2;
`;

export const CardNumberDisplay = styled.div`
  color: white;
  width: 95%;
  text-align: left;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const CardNameDisplay = styled.div`
  color: white;
  width: 95%;
  text-align: left;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const CardExpireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 3vw;
  width: 95%;
`;
export const CardExpireDate = styled.div`
  color: #ffffff8d;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const CardExpireDateValue = styled.div`
  color: white;

  text-align: left;
  font-family: 'KlarnaTextMedium', sans-serif;
  margin-top: 1vh;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const CardDisplayImage = styled.img`
  display: flex;
  position: absolute;
  height: 20%;
`;

export const CardView = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  margin-top: 4vh;
  gap: 3vh;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 95vw;
  gap: 2vh;
`;

export const CardNumberInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
`;
export const CardNumberInfoTitle = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardNumberInfoValue = styled.div``;

export const CardNameInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
export const CardNameInfoTitle = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardNameInfoValue = styled.div``;

export const CardExpireInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
export const CardExpireInfoTitle = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardExpireInfoValue = styled.div``;

export const CardCVVInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
export const CardCVVInfoTitle = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardCVVInfoValue = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
`;
