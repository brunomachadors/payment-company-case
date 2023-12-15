import { Outlet } from 'react-router-dom';
import { StyledCreateCardPage } from './style';

export default function CreateCardPage() {
  return (
    <StyledCreateCardPage>
      <Outlet />
    </StyledCreateCardPage>
  );
}
