import { useState } from "react";

import {
  CarouselContainer,
  CarouselInner,
  CarouselNavigation,
  CarouselItem,
} from "./style";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function CardCarousel({ cardType }) {
  const [currentItem, setCurrentItem] = useState(1);
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
      <CarouselNavigation onClick={() => handleChangeSlide("left")}>
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

      <CarouselNavigation onClick={() => handleChangeSlide("right")}>
        {currentItem !== 2 && <FaLongArrowAltRight />}
      </CarouselNavigation>
    </CarouselContainer>
  );
}
