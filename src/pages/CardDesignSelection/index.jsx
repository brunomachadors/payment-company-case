import { useParams } from 'react-router-dom';
import CardCarousel from '../../components/CardCarousel';
import { PrimaryButton } from '../../GlobalStyles';
const cardTypes = ['classic', 'prestige'];

export default function CardDesignSelection() {
  const { cardType } = useParams();

  return (
    <>
      {cardTypes.includes(cardType) ? (
        <>
          <h1>Escolha o seu cartao {cardType}</h1>
          <CardCarousel cardType={cardType} />
          <PrimaryButton>Selecionar design</PrimaryButton>
        </>
      ) : (
        <h1>Page not found</h1>
      )}
    </>
  );
}
