import { useEffect } from "react";
import { ProductCtrl } from "../controller/ProductCtrl";
import type { Product } from "../types/Product";

export const ProductList: React.FC = () => {
  const {
    products,
    loadProducts,
    selectedId,
    getProductDetail,
    inputName,
    inputPrice,
    setInputName,
    setInputPrice,
    handleCreateProduct,
  } = ProductCtrl();
  useEffect(() => {
    loadProducts();
  });

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={inputName}
          onChange={(i) => setInputName(i.target.value)}
        />
        <label htmlFor="product-name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={inputPrice}
          onChange={(i) => setInputPrice(i.target.value)}
        />
        <label htmlFor="product-price">Price</label>
      </div>
      <button className="btn btn-primary" onClick={() => handleCreateProduct()}>
        Create Product
      </button>
      <br />
      <br />
      <ul className="list-group">
        {products.map((p: Product) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
