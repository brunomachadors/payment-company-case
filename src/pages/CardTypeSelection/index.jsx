import { PrimaryButton } from "../../GlobalStyles";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/paths";

export default function CardTypeSelection() {
  const navigate = useNavigate();

  return (
    <>
      <p>Choose type of card</p>
      <PrimaryButton onClick={() => navigate(PATHS.createCards.classic)}>
        Classic
      </PrimaryButton>
      <PrimaryButton onClick={() => navigate(PATHS.createCards.prestige)}>
        Prestige
      </PrimaryButton>
    </>
  );
}
