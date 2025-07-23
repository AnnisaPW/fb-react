import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductListView } from "./pages/ProductListView";
import { ProductDetailView } from "./pages/ProductDetailView";
import { RegisterView } from "./pages/RegisterView";
import { LoginView } from "./pages/LoginView";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListView />}></Route>
          <Route path="/register" element={<RegisterView />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/product/:id" element={<ProductDetailView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
