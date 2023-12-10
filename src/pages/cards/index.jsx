import PhysicleCard, { DigitalCards } from '../../components/Card';
import {
  CardTitleView,
  DigitalCardTitle,
  PhysicalCardTitle,
} from '../../components/Titles/styles';
import { CardPageView } from './style';

function CardsPage() {
  return (
    <CardPageView>
      <CardTitleView>Meus Cartões</CardTitleView>
      <PhysicalCardTitle>Cartão Físico</PhysicalCardTitle>
      <PhysicleCard></PhysicleCard>
      <DigitalCardTitle>Cartão Digital</DigitalCardTitle>
      <DigitalCards></DigitalCards>
    </CardPageView>
  );
}

export default CardsPage;
