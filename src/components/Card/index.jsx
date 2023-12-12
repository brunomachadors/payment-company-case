import { useSelector } from 'react-redux';
import { formatCardNumber } from '../../helpers/formatCardNumbers';
import { CardTitle } from '../Titles/styles';
import {
  ButtonsContainer,
  CardCVVInfoContainer,
  CardCVVInfoTitle,
  CardCVVInfoValue,
  CardDisplay,
  CardDisplayImage,
  CardExpireContainer,
  CardExpireDate,
  CardExpireDateValue,
  CardExpireInfoContainer,
  CardExpireInfoTitle,
  CardExpireInfoValue,
  CardInfoContainer,
  CardKlarnaDisplay,
  CardNameDisplay,
  CardNameInfoContainer,
  CardNameInfoTitle,
  CardNameInfoValue,
  CardNumberDisplay,
  CardNumberInfoContainer,
  CardNumberInfoTitle,
  CardNumberInfoValue,
  CardView,
} from './style';
import PropTypes from 'prop-types';
import { ConfigIcon, LockIcon } from '../Image/styles';

function Card() {
  const card = useSelector((state) => state.selectedCard.selectedCard);

  return (
    <CardView>
      <CardTitle>Cartão Digital</CardTitle>
      <DisplayCard card={card}></DisplayCard>
      <CardInfo card={card}></CardInfo>
      <CardButtons></CardButtons>
    </CardView>
  );
}

function DisplayCard({ card }) {
  return (
    <CardDisplay>
      <CardKlarnaDisplay>Klarna.</CardKlarnaDisplay>
      <CardNumberDisplay>
        {formatCardNumber(card.card_number.toString())}
      </CardNumberDisplay>
      <CardExpireContainer>
        <CardExpireDate>MM YY CVV</CardExpireDate>
        <CardExpireDateValue>
          {card.expiry_date.month +
            '/' +
            card.expiry_date.year.toString().slice(-2) +
            ' ' +
            card.cvv}
        </CardExpireDateValue>
      </CardExpireContainer>
      <CardNameDisplay>{card.name}</CardNameDisplay>

      <CardDisplayImage src="images/cr7.png"></CardDisplayImage>
    </CardDisplay>
  );
}

DisplayCard.propTypes = {
  card: PropTypes.shape({
    card_number: PropTypes.string.isRequired,
    expiry_date: PropTypes.shape({
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
    cvv: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function CardInfo({ card }) {
  return (
    <CardInfoContainer>
      <CardNumberInfoContainer>
        <CardNumberInfoTitle> Número</CardNumberInfoTitle>
        <CardNumberInfoValue>
          {formatCardNumber(card.card_number.toString())}
        </CardNumberInfoValue>
      </CardNumberInfoContainer>

      <CardNameInfoContainer>
        <CardNameInfoTitle>Nome</CardNameInfoTitle>
        <CardNameInfoValue>{card.name}</CardNameInfoValue>
      </CardNameInfoContainer>

      <CardExpireInfoContainer>
        <CardExpireInfoTitle>Validade</CardExpireInfoTitle>
        <CardExpireInfoValue>
          {card.expiry_date.month + '/' + card.expiry_date.year}
        </CardExpireInfoValue>
      </CardExpireInfoContainer>

      <CardCVVInfoContainer>
        <CardCVVInfoTitle>CVV</CardCVVInfoTitle>
        <CardCVVInfoValue>{card.cvv}</CardCVVInfoValue>
      </CardCVVInfoContainer>
    </CardInfoContainer>
  );
}

CardInfo.propTypes = {
  card: PropTypes.shape({
    card_number: PropTypes.string.isRequired,
    expiry_date: PropTypes.shape({
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
    cvv: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function CardButtons() {
  return (
    <ButtonsContainer>
      <LockIcon src="icons/openLock.svg"></LockIcon>
      <ConfigIcon src="icons/settings.svg"></ConfigIcon>
    </ButtonsContainer>
  );
}
export default Card;
