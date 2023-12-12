import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsPage from '../pages/cards';
import CardPage from '../pages/card';
import LandingPage from '../pages/landing';
import { PATHS } from '../utils/paths';
import Navbar from '../components/Navbar';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={PATHS.home} element={<LandingPage />}></Route>
        <Route path={PATHS.myCards} element={<CardsPage />}></Route>
        <Route path={PATHS.card} element={<CardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
