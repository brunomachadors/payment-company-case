import { CardContainer, CardName, CardNumber, CardsContainer } from './styles';
import cards from '../../json/cards.json';
import getCardProtectedNumber from '../../utils/cardNumber';
import { CardButton } from '../Button/styles';
import { ChevronRight } from '../Image/styles';

function PhysicalCard() {
  return (
    <CardsContainer>
      {cards.my_cards.map(
        (card) =>
          card.type === 'physical' && (
            <CardButton key={card.card_number}>
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
  return (
    <CardsContainer>
      {cards.my_cards.map(
        (card) =>
          card.type === 'digital' && (
            <CardButton key={card.card_number}>
              <CardContainer>
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

export default PhysicalCard;
