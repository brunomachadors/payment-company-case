import PhysicleCard, { DigitalCards } from '../../components/MyCards';
import Navbar from '../../components/Navbar';

import {
  CardTitleView,
  DigitalCardTitle,
  PhysicalCardTitle,
} from '../../components/Titles/styles';
import { CardPageContent, CardPageView } from './style';

function CardsPage() {
  return (
    <CardPageView>
      <Navbar></Navbar>
      <CardPageContent>
        <CardTitleView>Meus Cartões</CardTitleView>
        <PhysicalCardTitle>Cartão Físico</PhysicalCardTitle>
        <PhysicleCard></PhysicleCard>
        <DigitalCardTitle>Cartão Digital</DigitalCardTitle>
        <DigitalCards></DigitalCards>
      </CardPageContent>
    </CardPageView>
  );
}

export default CardsPage;
