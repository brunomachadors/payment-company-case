import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../Image/styles';
import { BarContainer, KlarnaName, NavbarContainer } from './style';
import Menu from '../Menu';
import { useDispatch, useSelector } from 'react-redux';

import { openMenu } from '../../store/menu/menu';

function Navbar() {
  const navigate = useNavigate();
  const open = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/');
  };

  const handleMenu = () => {
    dispatch(openMenu());
  };

  return (
    <NavbarContainer>
      <BarContainer>
        <MenuIcon src="icons/menuIcon.svg" onClick={handleMenu}></MenuIcon>
        <KlarnaName onClick={handleClick}>Klarna.</KlarnaName>
      </BarContainer>
      {open && <Menu></Menu>}
    </NavbarContainer>
  );
}

export default Navbar;
