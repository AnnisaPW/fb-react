import { useState } from "react";
import { createNewProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../services/ProductServ";
import type { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
    }

    const handleCreateProduct = async ()=>{
                const productId = uuidv4()
        const dateTimeNow = new Date().toISOString()
        const newProduct: Product = {id:productId, name:inputName, price:Number(inputPrice), createdAt: dateTimeNow}
        setInputName("")
        setInputPrice("")
        await createNewProduct(newProduct)
        await loadProducts()
    }

    const handleDeleteProduct = async()=>{
        await deleteProduct(productDetail!.id!)
        nav(-1)

    }

   

    const loadProductDetail = async (productId: string)=>{
        const data = await getProductById(productId)
        setProductDetail(data)
            setInputName(data!.name)
        setInputPrice(String(data?.price))
       
    }

    return {products, selectedId, setSelectedId,  loadProducts, productDetail,getProductDetail, loadProductDetail, inputName, inputPrice, setInputName, setInputPrice, handleUpdateProduct, handleCreateProduct, handleDeleteProduct}
}

