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
  CardExpireDateContaier,
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
  Tags,
} from './style';
import PropTypes from 'prop-types';
import { ConfigIcon, LockIcon, MyCardDisplay } from '../Image/styles';
import { CategoryContainer } from '../Category/style';
import Category from '../Category';
import { GoChevronLeft } from 'react-icons/go';
import { ReturnButton } from '../Button/styles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/paths';

function Card() {
  const card = useSelector((state) => state.selectedCard.selectedCard);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(PATHS.myCards);
  };

  return (
    <CardView>
      <ReturnButton onClick={handleReturn}>
        <GoChevronLeft size={50}></GoChevronLeft>
        <CardTitle>{card.name}</CardTitle>
      </ReturnButton>

      <MyCardDisplay src="images/cards/ednaCard.svg"></MyCardDisplay>
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
    card_number: PropTypes.number.isRequired,
    expiry_date: PropTypes.shape({
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
    cvv: PropTypes.number.isRequired,
    name: PropTypes.string,
    owner: PropTypes.string.isRequired,
    categories: PropTypes.array,
  }).isRequired,
};

function CardInfo({ card }) {
  return (
    <CardInfoContainer>
      <CardNameInfoContainer>
        <CardNameInfoTitle>Nome</CardNameInfoTitle>
        <CardNameInfoValue>{card.owner}</CardNameInfoValue>
      </CardNameInfoContainer>

      <CardNumberInfoContainer>
        <CardNumberInfoTitle> Número</CardNumberInfoTitle>
        <CardNumberInfoValue>
          {formatCardNumber(card.card_number.toString())}
        </CardNumberInfoValue>
      </CardNumberInfoContainer>

      <CardExpireInfoContainer>
        <CardExpireDateContaier>
          <CardExpireInfoTitle>Validade</CardExpireInfoTitle>
          <CardExpireInfoValue>
            {card.expiry_date.month + '/' + card.expiry_date.year}
          </CardExpireInfoValue>
        </CardExpireDateContaier>
        <CardCVVInfoContainer>
          <CardCVVInfoTitle>CVV</CardCVVInfoTitle>
          <CardCVVInfoValue>{card.cvv}</CardCVVInfoValue>
        </CardCVVInfoContainer>
      </CardExpireInfoContainer>

      <Tags>Tags</Tags>
      <CategoryContainer>
        {card.categories.map((category) => (
          <Category key={category} categoryName={category} />
        ))}
      </CategoryContainer>
    </CardInfoContainer>
  );
}

CardInfo.propTypes = {
  card: PropTypes.shape({
    card_number: PropTypes.number.isRequired,
    expiry_date: PropTypes.shape({
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
    cvv: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    categories: PropTypes.array,
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
