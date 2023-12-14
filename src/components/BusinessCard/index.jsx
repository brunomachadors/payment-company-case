import PropTypes from 'prop-types';
import {
  BackFace,
  BusinessCardDisplay,
  CardDisplayImage,
  CardName,
  Description,
  FrontFace,
  LinkedinButton,
} from './style';
import members from '../../json/members.json';
import { LinkedinIcon } from '../Image/styles';

function BusinessCard({ name }) {
  const member = members[name];

  const redirectToLinkedin = () => {
    const url = `https://www.linkedin.com/in/${member.linkedin}/`;
    window.open(url, '_blank');
  };
  return (
    <BusinessCardDisplay style={{ backgroundImage: member.gradient }}>
      <BackFace>
        <Description>{member.description}</Description>
        <LinkedinButton onClick={redirectToLinkedin}>
          <LinkedinIcon src="https://cdn-icons-png.flaticon.com/256/174/174857.png"></LinkedinIcon>
          {member.linkedin.toUpperCase()}
        </LinkedinButton>
      </BackFace>
      <FrontFace>
        {<CardName>{member.name}</CardName>}
        {<CardDisplayImage src={member.image}></CardDisplayImage>}
      </FrontFace>
    </BusinessCardDisplay>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BusinessCard;
