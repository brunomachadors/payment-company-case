import styled from 'styled-components';

export const CarouselContainer = styled.div`
  margin: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  gap: 20px;

  @media (max-width: 425px) {
    width: 320px;
  }
`;

export const CarouselInner = styled.div`
  transform: translateX(-${(props) => props.currentItem * 100}%);
  transition: 0.5s;
  display: flex;
  gap: 0;
  z-index: 2;
  margin: 0;
  height: 200px;

  @media (max-width: 425px) {
    width: 318px;
  }
`;

export const CarouselItem = styled.div`
  color: red;
  font-size: 20px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 320px;
  }
`;

export const NavigaionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const CarouselNavigation = styled.button`
  border: none;
  background: none;
  font-size: 50px;
  z-index: 3;
  &:active {
    filter: drop-shadow(0px 0px 2px gray);
    transform: scale(0.9);
  }

  position: relative;
  ${(props) => (props.direction === 'left' ? 'left: 2%' : 'right: 2%')};
`;
