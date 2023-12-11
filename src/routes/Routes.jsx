import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsPage from '../pages/cards';
import CardPage from '../pages/card';
import LandingPage from '../pages/landing';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/mycards" element={<CardsPage />}></Route>
        <Route path="/card" element={<CardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
