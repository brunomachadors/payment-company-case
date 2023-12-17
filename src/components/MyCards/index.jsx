import { useEffect, useState } from 'react';
import {
  CardContainer,
  CardName,
  CardNameContainer,
  CardNumber,
  CardNumberContainer,
  CardsContainer,
  CreateCardContainer,
  CreateDigitalCard,
} from './styles';
import allCards from '../../json/cards.json';
import getCardProtectedNumber from '../../utils/cardNumber';
import { CardButton } from '../Button/styles';
import Category from '../Category';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../store/card/card';
import { GoChevronRight, GoCreditCard } from 'react-icons/go';
import { PATHS } from '../../utils/paths';
import { CategoryContainer } from '../Category/style';

function PhysicalCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cards] = useState(allCards);

  useEffect(() => {}, []);

  const handleClick = (card) => {
    dispatch(selectCard(card));
    navigate(PATHS.card);
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
                <CardNameContainer>
                  <GoCreditCard size={25} />
                  <CardName>{card.name}</CardName>
                </CardNameContainer>
                <CardNumberContainer>
                  <CardNumber>{getCardProtectedNumber(card)}</CardNumber>
                  <GoChevronRight size={40}></GoChevronRight>
                </CardNumberContainer>
              </CardContainer>
              <CategoryContainer>
                {card.categories.map((category) => (
                  <Category key={category} categoryName={category} />
                ))}
              </CategoryContainer>
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
              <CardContainer key={card.card_number}>
                <CardNameContainer>
                  <GoCreditCard size={25} />
                  <CardName>{card.name}</CardName>
                </CardNameContainer>
                <CardNumberContainer>
                  <CardNumber>{getCardProtectedNumber(card)}</CardNumber>
                  <GoChevronRight size={40}></GoChevronRight>
                </CardNumberContainer>
              </CardContainer>
              <CategoryContainer>
                {card.categories.map((category) => (
                  <Category key={category} categoryName={category} />
                ))}
              </CategoryContainer>
            </CardButton>
          )
      )}
      <CreateCardContainer>
        <CreateDigitalCard>+ Criar cartão digital</CreateDigitalCard>
      </CreateCardContainer>
    </CardsContainer>
  );
}

export default PhysicalCard;
