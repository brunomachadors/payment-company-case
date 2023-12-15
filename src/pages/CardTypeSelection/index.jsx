import { PrimaryButton } from '../../GlobalStyles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/paths';
import { CartTypeView } from './style';

export default function CardTypeSelection() {
  const navigate = useNavigate();

  return (
    <CartTypeView>
      <p>Choose type of card</p>
      <PrimaryButton onClick={() => navigate(PATHS.createCards.classic)}>
        Classic
      </PrimaryButton>
      <PrimaryButton onClick={() => navigate(PATHS.createCards.prestige)}>
        Prestige
      </PrimaryButton>
    </CartTypeView>
  );
}
