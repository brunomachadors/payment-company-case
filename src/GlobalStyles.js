import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: fit-content;
  min-width: 200px;
  padding: 10px 15px;
  text-transform: uppercase;
  border: 3px solid black;
  box-shadow: 3px 3px 3px black;
  font-weight: bold;
  margin: 20px auto;
  @media (max-width: 425px) {
    min-width: 150px;
  }
`;
