import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import UsecasesShippersProcurem from "./pages/UsecasesShippersProcurem";
import UsecasesShippersSales from "./pages/UsecasesShippersSales";
import UsecasesShippersOperatio from "./pages/UsecasesShippersOperatio";
import UsecasesShippersProcurem from "./pages/UsecasesShippersProcurem1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/usecases-shippers-procurement-carrier-contracted-buy-prices":
        title = "";
        metaDescription = "";
        break;
      case "/usecases-shippers-sales-purchase-orders":
        title = "";
        metaDescription = "";
        break;
      case "/usecases-shippers-operations-loading-lists":
        title = "";
        metaDescription = "";
        break;
      case "/usecases-shippers-procurement-carrier-spot-buy-prices":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/usecases-shippers-procurement-carrier-contracted-buy-prices"
        element={<UsecasesShippersProcurem />}
      />
      <Route
        path="/usecases-shippers-sales-purchase-orders"
        element={<UsecasesShippersSales />}
      />
      <Route
        path="/usecases-shippers-operations-loading-lists"
        element={<UsecasesShippersOperatio />}
      />
      <Route
        path="/usecases-shippers-procurement-carrier-spot-buy-prices"
        element={<UsecasesShippersProcurem />}
      />
    </Routes>
  );
}
export default App;
