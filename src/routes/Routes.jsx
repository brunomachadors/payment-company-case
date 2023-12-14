import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "../pages/cards";
import CardPage from "../pages/card";
import CardTypeSelection from "../pages/CardTypeSelection";
import LandingPage from "../pages/landing";
import { PATHS } from "../utils/paths";
import Navbar from "../components/Navbar";
import CardDesignSelection from "../pages/CardDesignSelection";
import CreateCardPage from "../pages/CreateCard";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={PATHS.home} element={<LandingPage />} />
        <Route path={PATHS.myCards} element={<CardsPage />} />
        <Route path={PATHS.card} element={<CardPage />} />
        <Route path={PATHS.createCards.index} element={<CreateCardPage />}>
          <Route index element={<CardTypeSelection />} />
          <Route
            path={`${PATHS.createCards.index}/:cardType`}
            element={<CardDesignSelection />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
