import { useState } from "react";
import { getProductById, getProducts, updateProduct } from "../services/ProductServ";
import type { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";

export function ProductCtrl(){
    const [products, setProducts] = useState<Product[]>([]);
    const [productDetail, setProductDetail] = useState<Product|null>();
    const [selectedId, setSelectedId] = useState("")
    const nav = useNavigate()
    
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")

    
    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };
    
    
    const getProductDetail =async (productId: string)=>{
        setSelectedId(productId)
        
        nav('/product/' + productId)
        
    }

    const handleUpdateProduct =async ()=>{
        const productUpdated: Product = {id:productDetail?.id, name:inputName, price:Number(inputPrice)}
        await updateProduct(productUpdated)
        nav(-1)
        // console.log(productUpdated)
    }

   

    const loadProductDetail = async (productId: string)=>{
        const data = await getProductById(productId)
        setProductDetail(data)
            setInputName(data!.name)
        setInputPrice(String(data?.price))
       
    }

    return {products, selectedId, setSelectedId,  loadProducts, productDetail,getProductDetail, loadProductDetail, inputName, inputPrice, setInputName, setInputPrice, handleUpdateProduct}
}