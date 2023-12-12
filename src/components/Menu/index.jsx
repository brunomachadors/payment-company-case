import { useDispatch } from 'react-redux';
import { CloseIcon, MenuIcon } from '../Image/styles';
import {
  CloseButton,
  MenuButton,
  MenuButtonsContainer,
  MenuHeader,
  MenuView,
} from './style';
import { closeMenu } from '../../store/menu/menu';
import { useNavigate } from 'react-router-dom';
import { BarContainer, KlarnaName } from '../Navbar/style';

function Menu() {
  const dispatch = useDispatch();
  const navitage = useNavigate();

  const handleClose = () => {
    dispatch(closeMenu());
  };

  const handleHome = () => {
    dispatch(closeMenu());
    navitage('/');
  };
  const handleCreateCard = () => {
    dispatch(closeMenu());
    navitage('/createcard');
  };
  const handleMyCards = () => {
    dispatch(closeMenu());
    navitage('/mycards');
  };
  const handleAboutUs = () => {
    dispatch(closeMenu());
    navitage('/aboutus');
  };

  return (
    <MenuView>
      <MenuHeader>
        <BarContainer>
          <MenuIcon src="icons/menuIcon.svg"></MenuIcon>
          <KlarnaName onClick={handleHome}>Klarna.</KlarnaName>
        </BarContainer>
        <CloseButton onClick={handleClose}>
          <CloseIcon src="icons/close.svg"></CloseIcon>
        </CloseButton>
      </MenuHeader>

      <MenuButtonsContainer>
        <MenuButton onClick={handleHome}>HOME</MenuButton>
        <MenuButton onClick={handleCreateCard}>CRIAR CARTÃO</MenuButton>
        <MenuButton onClick={handleMyCards}>MEUS CARTÕES</MenuButton>
        <MenuButton onClick={handleAboutUs}>SOBRE NÓS</MenuButton>
      </MenuButtonsContainer>
    </MenuView>
  );
}
export default Menu;
