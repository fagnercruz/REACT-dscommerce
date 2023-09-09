import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./Routes/ClientHome/Catalog";
import ProductsDetails from "./Routes/ClientHome/ProductDetails";
import ClientHome from "./Routes/ClientHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="product-details/:productId"
            element={<ProductsDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
