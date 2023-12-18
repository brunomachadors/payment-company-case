import { Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/paths';
import {
  CardPlan,
  CardPlansContainer,
  CardTypeDescription,
  CartTypeView,
} from './style';
import { RequestCardTitle } from '../../components/Titles/styles';
import { TabButton, TabButtonContainer } from '../../components/Button/styles';
import { Recomended } from '../../components/CardPlan/style';

export default function CardTypeSelection() {
  const navigate = useNavigate();

  const selectedPlan = location.pathname.split('/').pop();
  const isPlanSelected = (plan) => selectedPlan === plan;

  return (
    <CartTypeView>
      <RequestCardTitle>Solicitar cartão</RequestCardTitle>
      <CardTypeDescription>
        Comece a desfrutar de uma nova forma de pagar suas contas na Klarna.
      </CardTypeDescription>
      <CardPlan>Escolha o plano adequado às suas necessidades</CardPlan>
      <Recomended>Recomendado</Recomended>
      <CardPlansContainer>
        <TabButtonContainer>
          <TabButton
            selected={
              isPlanSelected('chooseprestige') || isPlanSelected('createcards')
            }
            onClick={() => navigate(PATHS.createCards.choosePrestige)}
          >
            Prestige
          </TabButton>
          <TabButton
            selected={isPlanSelected('chooseclassic')}
            onClick={() => navigate(PATHS.createCards.chooseClassic)}
          >
            Classic
          </TabButton>
        </TabButtonContainer>
        <Outlet />
      </CardPlansContainer>
    </CartTypeView>
  );
}
