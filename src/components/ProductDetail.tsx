// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCtrl } from "../controller/ProductCtrl";
import { useEffect } from "react";

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const {
    loadProductDetail,
    productDetail,
    inputName,
    inputPrice,
    setInputName,
    setInputPrice,
    handleUpdateProduct,
    handleDeleteProduct,
  } = ProductCtrl();
  useEffect(() => {
    if (id) loadProductDetail(id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!productDetail) return <p>Loading...</p>;
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={productDetail?.id}
          readOnly
        />
        <label htmlFor="product-id">ID</label>
      </div>
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
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={productDetail?.createdAt}
          readOnly
        />
        <label htmlFor="product-createdAt">Created At</label>
      </div>
      {productDetail?.updatedAt && (
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={productDetail?.updatedAt}
            readOnly
          />
          <label htmlFor="product-updatedAt">Updated At</label>
        </div>
      )}
      <button className="btn btn-primary" onClick={() => handleUpdateProduct()}>
        Update Product
      </button>
      <br />
      <br />
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          handleDeleteProduct();
        }}
      >
        <i className="bi bi-trash">Delete Product</i>
      </button>
    </>
  );
};
