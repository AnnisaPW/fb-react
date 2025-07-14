import { getDoc, doc, setDoc, deleteDoc, updateDoc, getDocs, collection, query } from "firebase/firestore";
import type { Product } from "../types/Product";
import { db } from "../firebase";


const coll = "products"

export const getProductById = async (productId: string): Promise<Product|null>=>{
    try {
        const productDoc = await getDoc(doc(db, coll, productId));
        if (productDoc.exists()) {
            return { ...productDoc.data()} as Product
            
            
        }else{
            return null
        }
        
    } catch (error) {
        console.log("Error [getProductById]", error)
        throw error
        
    }
}

export const createNewProduct = async (newProduct: Product): Promise<void> =>{
    try {

        const productRef = doc(db, coll, newProduct.id!)
        await setDoc(productRef, newProduct)
    } catch (error) {
        console.log("Error [createNewProduct]", error)
        throw error
    }
}

export const deleteProduct = async (productId: string): Promise<void> =>{
    try {
        const productRef = doc(db, coll, productId)
        await deleteDoc(productRef)

    } catch (error) {
        console.log("Error [deleteProduct]", error)
        throw error
        
    }
}

export const updateProduct = async (product: Product): Promise<void> =>{
    try {
        const productId = product.id!
        const dateTimeNow = new Date().toISOString()
        const productUpdate: Partial<Product> = {name: product.name, price: product.price, updatedAt: dateTimeNow}
        const productRef = doc(db, coll, productId)
        await updateDoc(productRef, productUpdate)

    } catch (error) {
        console.log("Error [updateProduct]", error)
        throw error
        
    }
}

export const getProducts = async (): Promise<Product[]> => {
    try {
        const q =query(collection(db, coll)) 
        const querySnapshot =await getDocs(q)
        const data = querySnapshot.docs.map(doc=> ({...doc.data()})as Product)
        return data
    } catch (error) {
        console.log("Error [getProducts]", error)
        throw error
    }
}