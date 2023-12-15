import { useDispatch, useSelector } from 'react-redux';
import { CloseIcon, MenuIcon } from '../Image/styles';
import {
  BarContainer,
  CloseButton,
  KlarnaName,
  MenuButton,
  MenuButtonsContainer,
  MenuHeader,
  MenuView,
} from './style';
import { closeMenu, openMenu } from '../../store/menu/menu';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/paths';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((state) => state.menu.menu);

  const handleClose = () => {
    dispatch(open ? closeMenu() : openMenu());
  };

  const handleNavigation = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <MenuView id="menu">
      <MenuHeader id="menuHeader">
        <BarContainer id="menuContainer">
          <MenuIcon src={'icons/menuIcon.svg'} onClick={handleClose}></MenuIcon>
          <KlarnaName onClick={() => handleNavigation('/')}>Klarna.</KlarnaName>
        </BarContainer>
        {open && (
          <CloseButton onClick={handleClose}>
            <CloseIcon src={'icons/close.svg'}></CloseIcon>
          </CloseButton>
        )}
      </MenuHeader>

      {open && (
        <MenuButtonsContainer>
          <MenuButton onClick={() => handleNavigation(PATHS.home)}>
            HOME
          </MenuButton>
          <MenuButton onClick={() => handleNavigation(PATHS.createCards.index)}>
            CRIAR CARTÃO
          </MenuButton>
          <MenuButton onClick={() => handleNavigation(PATHS.myCards)}>
            MEUS CARTÕES
          </MenuButton>
          <MenuButton onClick={() => handleNavigation(PATHS.aboutUs)}>
            SOBRE NÓS
          </MenuButton>
        </MenuButtonsContainer>
      )}
    </MenuView>
  );
}

export default Menu;
