import { useState } from "react";

import {
  CarouselContainer,
  CarouselInner,
  CarouselNavigation,
  CarouselItem,
} from "./style";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function CardCarousel({ cardType }) {
  const [currentItem, setCurrentItem] = useState(0);
  //number 2 should be replaced by the length of items array when we have one. Same goes below in the component for conditionally rendering right arrow
  const handleChangeSlide = (direction) => {
    if (direction === "right") {
      currentItem === 2
        ? setCurrentItem(2)
        : setCurrentItem((prev) => prev + 1);
    } else if (direction === "left") {
      currentItem === 0
        ? setCurrentItem(0)
        : setCurrentItem((prev) => prev - 1);
    }
  };
  return (
    <CarouselContainer>
      <CarouselNavigation
        onClick={() => handleChangeSlide("left")}
        direction="left"
      >
        {currentItem !== 0 && <FaLongArrowAltLeft />}
      </CarouselNavigation>

      <CarouselInner currentItem={currentItem}>
        <CarouselItem>
          <h1>A</h1>
        </CarouselItem>
        <CarouselItem>
          <h1>B</h1>
        </CarouselItem>
        <CarouselItem>
          <h1>C</h1>
        </CarouselItem>
      </CarouselInner>

      <CarouselNavigation
        onClick={() => handleChangeSlide("right")}
        direction="right"
      >
        {currentItem !== 2 && <FaLongArrowAltRight />}
      </CarouselNavigation>
    </CarouselContainer>
  );
}
