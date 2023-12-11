import { useEffect, useState } from 'react';
import { CardContainer, CardName, CardNumber, CardsContainer } from './styles';
import allCards from '../../json/cards.json';
import getCardProtectedNumber from '../../utils/cardNumber';
import { CardButton } from '../Button/styles';
import { ChevronRight } from '../Image/styles';
import Category from '../Category';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../store/card/card';

function PhysicalCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cards] = useState(allCards);

  useEffect(() => {}, []);

  const handleClick = (card) => {
    dispatch(selectCard(card));
    navigate('/card');
  };

  return (
    <CardsContainer>
      {cards.my_cards.map(
        (card) =>
          card.type === 'physical' && (
            <CardButton
              key={card.card_number}
              onClick={() => handleClick(card)}
            >
              <CardContainer key={card.card_number}>
                <CardName>{card.name}</CardName>
                <CardNumber>{getCardProtectedNumber(card)}</CardNumber>
              </CardContainer>

              <ChevronRight src="icons/chevronRight.svg"></ChevronRight>
            </CardButton>
          )
      )}
    </CardsContainer>
  );
}

export function DigitalCards() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cards] = useState(allCards);

  useEffect(() => {}, []);

  const handleClick = (card) => {
    dispatch(selectCard(card));
    navigate('/card');
  };

  return (
    <CardsContainer>
      {cards.my_cards.map(
        (card) =>
          card.type === 'digital' && (
            <CardButton
              key={card.card_number}
              onClick={() => handleClick(card)}
            >
              <CardContainer>
                <CardName>{card.name}</CardName>
                <CardNumber>{getCardProtectedNumber(card)}</CardNumber>
              </CardContainer>
              <Category categoryName={card.main_category}></Category>
              <ChevronRight src="icons/chevronRight.svg"></ChevronRight>
            </CardButton>
          )
      )}
    </CardsContainer>
  );
}

export default PhysicalCard;
