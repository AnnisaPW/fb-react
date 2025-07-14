import { useEffect } from "react";
import { ProductCtrl } from "../controller/ProductCtrl";
import type { Product } from "../types/Product";

export const ProductList: React.FC = () => {
  const { products, loadProducts, selectedId, getProductDetail } =
    ProductCtrl();
  useEffect(() => {
    loadProducts();
  });

  return (
    <>
      <ul className="list-group">
        {products.map((p: Product) => (
          <li
            key={p.id}
            className={`list-group-item ${selectedId == p.id && "active"}`}
            onClick={() => getProductDetail(p.id!)}
          >
            {p.id}
            <br />
            {p.name}
            <br />
            {p.price}
            <br />
            {p.createdAt}
            <br />
            {p.updatedAt && p.updatedAt}
          </li>
        ))}
      </ul>
      <br />
    </>
  );
};
