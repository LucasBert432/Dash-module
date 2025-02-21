import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./modules/Initial/Page";
import { Home } from "./modules/Home/Page";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
