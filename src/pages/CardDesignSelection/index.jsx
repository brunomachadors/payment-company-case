import { useNavigate, useParams } from 'react-router-dom';
import CardCarousel from '../../components/CardCarousel';

import { CardDesignSelectionView } from './style';
import { RequestCardTitle } from '../../components/Titles/styles';
import { PinkButton, ReturnButton } from '../../components/Button/styles';
import { GoChevronLeft } from 'react-icons/go';
import { PATHS } from '../../utils/paths';
const cardTypes = ['classic', 'prestige'];

export default function CardDesignSelection() {
  const { cardType } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(PATHS.createCards.index);
  };

  return (
    <CardDesignSelectionView>
      {cardTypes.includes(cardType) ? (
        <>
          <ReturnButton onClick={handleReturn}>
            <GoChevronLeft size={50}></GoChevronLeft>
            <RequestCardTitle>Selecionar cartão</RequestCardTitle>
          </ReturnButton>

          <CardCarousel cardType={cardType} />
          <PinkButton>Selecionar cartão</PinkButton>
        </>
      ) : (
        <h1>Page not found</h1>
      )}
    </CardDesignSelectionView>
  );
}
