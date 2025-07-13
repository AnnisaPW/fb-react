import { getDoc, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import type { Product } from "../types/Product";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const coll = "products"

export const getProductById = async (): Promise<Product|null>=>{
    try {
        const productDoc = await getDoc(doc(db, coll, "7rnGJE8w5F9qC22pUt5m"));
        if (productDoc.exists()) {
            return {id: productDoc.id, ...productDoc.data()} as Product
            
            
        }else{
            return null
        }
        
    } catch (error) {
        console.log("Error [getProductById]", error)
        throw error
        
    }
}

export const createNewProduct = async (): Promise<void> =>{
    try {
        const productId = uuidv4()
        const dateTimeNow = new Date().toISOString()
        const newProduct: Product = {id:productId, name:"product 222", price:2000, createdAt: dateTimeNow}
        const productRef = doc(db, coll, productId)
        await setDoc(productRef, newProduct)
    } catch (error) {
        console.log("Error [createNewProduct]", error)
        throw error
    }
}

export const deleteProduct = async (): Promise<void> =>{
    try {
        const productId = "e37be14a-dea4-4213-b685-6d3ff4503bf7"
        const productRef = doc(db, coll, productId)
        await deleteDoc(productRef)

    } catch (error) {
        console.log("Error [deleteProduct]", error)
        throw error
        
    }
}

export const updateProduct = async (): Promise<void> =>{
    try {
        const productId = "77aaaf11-e8dd-48c3-9be0-54bec7222f64"
        const dateTimeNow = new Date().toISOString()
        const productUpdate: Partial<Product> = {name: "Product 88", price: 8888, updatedAt: dateTimeNow}
        const productRef = doc(db, coll, productId)
        await updateDoc(productRef, productUpdate)

    } catch (error) {
        console.log("Error [updateProduct]", error)
        throw error
        
    }
}