// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCtrl } from "../controller/ProductCtrl";
import { useEffect } from "react";

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { loadProductDetail, productDetail } = ProductCtrl();
  useEffect(() => {
    if (id) {
      loadProductDetail(id);
    }
  }, [id, loadProductDetail]);

  if (!productDetail) return <p>Loading...</p>;
  return (
    <>
      <p>{productDetail?.id}</p>
      <p>{productDetail?.name}</p>
      <p>{productDetail?.price}</p>

      <p>{productDetail?.createdAt}</p>
      <p>{productDetail?.updatedAt && productDetail?.updatedAt}</p>
    </>
  );
};
