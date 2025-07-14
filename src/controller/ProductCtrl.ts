import { useState } from "react";
import { getProductById, getProducts } from "../services/ProductServ";
import type { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";

export function ProductCtrl(){
    const [products, setProducts] = useState<Product[]>([]);
    const [productDetail, setProductDetail] = useState<Product|null>();
    const [selectedId, setSelectedId] = useState("")
    const nav = useNavigate()

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
      };


    const getProductDetail =async (productId: string)=>{
        setSelectedId(productId)
       
        nav('/product/' + productId)

    }

    const loadProductDetail = async (productId: string)=>{
        const data = await getProductById(productId)
        setProductDetail(data)
        console.log(selectedId)
        console.log(productDetail)
    }

    return {products, selectedId, setSelectedId,  loadProducts, productDetail,getProductDetail, loadProductDetail}
}