import { useState } from "react";
import type { Product } from "../types/Product";
import {
  createNewProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} from "../services/ProductServ";

export const ProductButtons: React.FC = () => {
  const [productById, setProductById] = useState<Product | null>();

  const loadProduct = async () => {
    const data = await getProductById();
    setProductById(data);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => loadProduct()}>
        Get Product
      </button>
      <br />
      {productById && (
        <p>
          {productById.id}
          {productById.name}
          {productById.price}
          {productById.createdAt}
          {productById.updatedAt}
        </p>
      )}
      <br />
      <button className="btn btn-primary" onClick={() => createNewProduct()}>
        Add Product
      </button>
      <br />
      <br />
      <button className="btn btn-danger" onClick={() => deleteProduct()}>
        Delete Product
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => updateProduct()}>
        Update Product
      </button>
    </>
  );
};
