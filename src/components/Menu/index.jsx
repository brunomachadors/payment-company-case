import { useDispatch, useSelector } from 'react-redux';
import { CloseIcon } from '../Image/styles';
import {
  BarContainer,
  CloseButton,
  KlarnaName,
  MenuButton,
  MenuButtonText,
  MenuButtonsContainer,
  MenuHeader,
  MenuView,
} from './style';
import { closeMenu, openMenu } from '../../store/menu/menu';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/paths';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((state) => state.menu.menu);

  const [bColor, setBColor] = useState('transparent');

  useEffect(() => {
    const background = () => {
      if (open) {
        setBColor('white');
      } else {
        setBColor('transparent');
      }
    };

    background();
  });

  const handleClose = () => {
    dispatch(open ? closeMenu() : openMenu());
  };

  const handleNavigation = (path) => {
    dispatch(closeMenu());
    navigate(path);
  };

  return (
    <MenuView id="menu">
      <MenuHeader id="menuHeader">
        <BarContainer id="menuContainer" style={{ backgroundColor: bColor }}>
          {!open && <GiHamburgerMenu size={30} onClick={handleClose} />}
          {!open && (
            <KlarnaName onClick={() => handleNavigation(PATHS.home)}>
              Klarna.
            </KlarnaName>
          )}
        </BarContainer>
        {open && (
          <CloseButton onClick={handleClose}>
            <CloseIcon src={'icons/close.svg'}></CloseIcon>
          </CloseButton>
        )}
      </MenuHeader>

      {open && (
        <MenuButtonsContainer>
          <MenuButton onClick={() => handleNavigation(PATHS.myCards)}>
            <MenuButtonText>Cartões</MenuButtonText>
          </MenuButton>
          <MenuButton onClick={() => handleNavigation(PATHS.createCards.index)}>
            <MenuButtonText>Solicitar cartão</MenuButtonText>
          </MenuButton>
          <MenuButton onClick={() => handleNavigation(PATHS.aboutUs)}>
            <MenuButtonText>Sobre nós</MenuButtonText>
          </MenuButton>
        </MenuButtonsContainer>
      )}
    </MenuView>
  );
}

export default Menu;
