import { MenuIcon } from '../Image/styles';
import { KlarnaName, NavbarContainer } from './style';

function Navbar() {
  return (
    <NavbarContainer>
      <MenuIcon src="icons/menuIcon.svg"></MenuIcon>
      <KlarnaName>Klarna.</KlarnaName>
    </NavbarContainer>
  );
}

export default Navbar;
