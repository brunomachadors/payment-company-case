import PhysicleCard, { DigitalCards } from '../../components/Card';
import Navbar from '../../components/Navbar';

import {
  CardTitleView,
  DigitalCardTitle,
  PhysicalCardTitle,
} from '../../components/Titles/styles';
import { CardPageView } from './style';

function CardsPage() {
  return (
    <CardPageView>
      <Navbar></Navbar>
      <CardTitleView>Meus Cartões</CardTitleView>
      <PhysicalCardTitle>Cartão Físico</PhysicalCardTitle>
      <PhysicleCard></PhysicleCard>
      <DigitalCardTitle>Cartão Digital</DigitalCardTitle>
      <DigitalCards></DigitalCards>
    </CardPageView>
  );
}

export default CardsPage;
