import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ArtPage } from "./pages/artPage";
import { Main } from "./pages/main";
import { NotFound } from "./pages/notFound";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/art-page" element={<Main />} />
      <Route path="/art-page/:id" element={<ArtPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
