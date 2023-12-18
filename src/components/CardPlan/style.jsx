import styled from 'styled-components';

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 5px;
`;

export const PlanContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 24px;
  gap: 10px;
`;

export const PlanContent = styled.div`
  color: black;
  display: flex;
`;

export const Recomended = styled.div`
  color: black;
  background-color: #ffb3bd;
  border-radius: 10px;
  padding: 2px 5px;
  width: 35vw;
  text-align: center;
  margin-left: 5vw;
`;
