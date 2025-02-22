import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoaderAccess from "./Components/LoaderAccess";

const Page = lazy(() => import("./modules/Initial/Page"));
const Home = lazy(() => import("./modules/Home/Page"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoaderAccess />}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
