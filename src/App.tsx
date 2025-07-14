import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductListView } from "./pages/ProductListView";
import { ProductDetailView } from "./pages/ProductDetailView";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListView />}></Route>
          <Route path="/product/:id" element={<ProductDetailView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
