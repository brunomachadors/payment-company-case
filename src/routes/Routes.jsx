import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsPage from '../pages/cards';
import CardPage from '../pages/card';
import CardTypeSelection from '../pages/CardTypeSelection';
import LandingPage from '../pages/landing';
import { PATHS } from '../utils/paths';
import CardDesignSelection from '../pages/CardDesignSelection';
import AboutUs from '../pages/AboutUs';
import Menu from '../components/Menu';
import CardPlan from '../components/CardPlan';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path={PATHS.home} element={<LandingPage />} />
        <Route path={PATHS.myCards} element={<CardsPage />} />
        <Route path={PATHS.card} element={<CardPage />} />
        <Route path={PATHS.createCards.index} element={<CardTypeSelection />}>
          <Route index element={<CardPlan plan="prestige" />} />
          <Route
            path={PATHS.createCards.choosePrestige}
            element={<CardPlan plan="prestige" />}
          />
          <Route
            path={PATHS.createCards.chooseClassic}
            element={<CardPlan plan="classic" />}
          />
        </Route>
        <Route
          path={`${PATHS.createCards.index}/:cardType`}
          element={<CardDesignSelection />}
        />
        <Route path={PATHS.aboutUs} element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
