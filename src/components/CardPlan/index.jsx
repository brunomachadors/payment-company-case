import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../GlobalStyles';
import PropTypes from 'prop-types';
import { PATHS } from '../../utils/paths';
import { PlanContainer, PlanContent, PlanContentContainer } from './style';
import cardPlan from '../../json/cardPlan.json';
import { FaChevronRight } from 'react-icons/fa';

function CardPlan({ plan }) {
  const navigate = useNavigate();

  return (
    <PlanContainer>
      {cardPlan[plan].benefits.map((benefit, index) => (
        <PlanContentContainer key={index}>
          <FaChevronRight
            color="#FFB3BD"
            size={20}
            style={{ minWidth: '20px' }}
          />
          <PlanContent>{benefit}</PlanContent>
        </PlanContentContainer>
      ))}
      <PrimaryButton onClick={() => navigate(PATHS.createCards[plan])}>
        Solicitar cartão
      </PrimaryButton>
    </PlanContainer>
  );
}

CardPlan.propTypes = {
  plan: PropTypes.string,
};

export default CardPlan;
