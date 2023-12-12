import styled from "styled-components";

export const CarouselContainer = styled.figure`
  width: auto;
  height: 800px;
  margin: 2px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarouselInner = styled.div`
  transform: translateX(-${(props) => props.currentItem * 100}%);
  transition: 0.5s;
  flex: 1;
  height: 80%;
  display: flex;
  align-items: stretch;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  color: red;
  font-size: 20px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselNavigation = styled.button`
  border: none;
  background: none;
  font-size: 30px;
  z-index: 3;
  &:active {
    filter: drop-shadow(0px 0px 2px gray);
    transform: scale(0.9);
  }
  width: 35px;
`;
