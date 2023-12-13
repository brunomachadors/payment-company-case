import styled from "styled-components";

export const CarouselContainer = styled.figure`
  width: 600px;
  height: 800px;
  margin: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 425px) {
    width: 320px;
    height: 500px;
  }
`;

export const CarouselInner = styled.div`
  transform: translateX(-${(props) => props.currentItem * 100}%);
  transition: 0.5s;
  display: flex;
  gap: 0;
  z-index: 2;
  margin: 0;
  width: 600px;
  height: 800px;
  @media (max-width: 425px) {
    width: 320px;
  }
`;

export const CarouselItem = styled.div`
  width: 600px;
  color: red;
  font-size: 20px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    width: 320px;
  }
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
  position: absolute;
  ${(props) => (props.direction === "left" ? "left: 2%" : "right: 2%")};
`;
