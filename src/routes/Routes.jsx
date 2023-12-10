import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsPage from '../pages/cards';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mycards" element={<CardsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
