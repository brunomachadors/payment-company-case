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
  margin-top: 5vh;
  gap: 2vh;
  padding: 24px;
  font-family: 'KlarnaTextMedium', sans-serif;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 3vh;
`;

export const CardNumberInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const CardNumberInfoTitle = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 18px;
`;

export const CardNumberInfoValue = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 23px;
`;

export const CardNameInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const CardNameInfoTitle = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 18px;
`;

export const Tags = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 15px;
  width: 100%;
`;

export const CardNameInfoValue = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 23px;
`;

export const CardExpireInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const CardExpireDateContaier = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const CardExpireInfoTitle = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 18px;
`;

export const CardExpireInfoValue = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 23px;
`;

export const CardCVVInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const CardCVVInfoTitle = styled.div`
  font-family: 'KlarnaTextRegular', sans-serif;
  font-size: 18px;
`;

export const CardCVVInfoValue = styled.div`
  font-family: 'KlarnaTextMedium', sans-serif;
  font-size: 23px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: 'KlarnaTextMedium', sans-serif;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;
