import { useDispatch } from "react-redux";
import { CloseIcon, MenuIcon } from "../Image/styles";
import {
  CloseButton,
  MenuButton,
  MenuButtonsContainer,
  MenuHeader,
  MenuView,
} from "./style";
import { closeMenu } from "../../store/menu/menu";
import { useNavigate } from "react-router-dom";
import { BarContainer, KlarnaName } from "../Navbar/style";
import { PATHS } from "../../utils/paths";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(closeMenu());
  };

  const handleNavigation = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <MenuView>
      <MenuHeader>
        <BarContainer>
          <MenuIcon src="icons/menuIcon.svg"></MenuIcon>
          <KlarnaName onClick={() => handleNavigation("/")}>Klarna.</KlarnaName>
        </BarContainer>
        <CloseButton onClick={handleClose}>
          <CloseIcon src="icons/close.svg"></CloseIcon>
        </CloseButton>
      </MenuHeader>

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
    </MenuView>
  );
}
export default Menu;
