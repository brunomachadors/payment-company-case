import { useState } from 'react';

import {
  CarouselContainer,
  CarouselInner,
  CarouselNavigation,
  CarouselItem,
  NavigaionContainer,
} from './style';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import cardPlan from '../../json/cardPlan.json';
import PropTypes from 'prop-types';
import { CardDisplay } from '../Image/styles';

export default function CardCarousel({ cardType }) {
  const [currentItem, setCurrentItem] = useState(0);

  const handleChangeSlide = (direction) => {
    if (direction === 'right') {
      currentItem === cardPlan[cardType].cards.length - 1
        ? setCurrentItem(cardPlan[cardType].cards.length - 1)
        : setCurrentItem((prev) => prev + 1);
    } else if (direction === 'left') {
      currentItem === 0
        ? setCurrentItem(0)
        : setCurrentItem((prev) => prev - 1);
    }
  };

  return (
    <CarouselContainer>
      <CarouselInner currentItem={currentItem}>
        {cardPlan[cardType].cards.map((item) => {
          return (
            <CarouselItem key={`${item.name}-carousel`}>
              <CardDisplay src={item.imageSource}></CardDisplay>
            </CarouselItem>
          );
        })}
      </CarouselInner>
      <NavigaionContainer>
        <CarouselNavigation
          onClick={() => handleChangeSlide('left')}
          direction="left"
        >
          {currentItem !== 0 && <FaLongArrowAltLeft />}
        </CarouselNavigation>

        <CarouselNavigation
          onClick={() => handleChangeSlide('right')}
          direction="right"
        >
          {currentItem !== cardPlan[cardType].cards.length - 1 && (
            <FaLongArrowAltRight />
          )}
        </CarouselNavigation>
      </NavigaionContainer>
    </CarouselContainer>
  );
}

CardCarousel.propTypes = {
  cardType: PropTypes.string,
};
