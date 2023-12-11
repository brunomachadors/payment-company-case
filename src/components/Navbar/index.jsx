import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../Image/styles';
import { KlarnaName, NavbarContainer } from './style';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <NavbarContainer>
      <MenuIcon src="icons/menuIcon.svg"></MenuIcon>
      <KlarnaName onClick={handleClick}>Klarna.</KlarnaName>
    </NavbarContainer>
  );
}

export default Navbar;
