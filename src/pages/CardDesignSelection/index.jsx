import { useParams } from 'react-router-dom';
import CardCarousel from '../../components/CardCarousel';

import { CardDesignSelectionView } from './style';
import { RequestCardTitle } from '../../components/Titles/styles';
import { PinkButton } from '../../components/Button/styles';
const cardTypes = ['classic', 'prestige'];

export default function CardDesignSelection() {
  const { cardType } = useParams();

  return (
    <CardDesignSelectionView>
      {cardTypes.includes(cardType) ? (
        <>
          <RequestCardTitle>Selecionar cartão</RequestCardTitle>
          <CardCarousel cardType={cardType} />
          <PinkButton>Selecionar cartão</PinkButton>
        </>
      ) : (
        <h1>Page not found</h1>
      )}
    </CardDesignSelectionView>
  );
}
