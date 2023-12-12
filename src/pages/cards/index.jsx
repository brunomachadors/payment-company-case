import PhysicalCard, { DigitalCards } from '../../components/MyCards';

import {
  CardTitleView,
  DigitalCardTitle,
  PhysicalCardTitle,
} from '../../components/Titles/styles';
import { CardPageContent, CardPageView } from './style';

function CardsPage() {
  return (
    <CardPageView>
      <CardPageContent>
        <CardTitleView>Meus Cartões</CardTitleView>
        <PhysicalCardTitle>Cartão Físico</PhysicalCardTitle>
        <PhysicalCard></PhysicalCard>
        <DigitalCardTitle>Cartão Digital</DigitalCardTitle>
        <DigitalCards></DigitalCards>
      </CardPageContent>
    </CardPageView>
  );
}

export default CardsPage;
