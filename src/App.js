import React, {UseState , UseEffect} from 'react'
// import Products from './components/Products/Products' ;
// import Navbar from './components/navbar/Navbar';
import {Products, Navbar} from './components'
import { commerce } from './lib/commerce'

const app = () => {
    // const [products, setProducts]= UseState([]);

    // const FetchProducts = async()=> {
    //     const {data}=await commerce.products.list();
    //     setProducts(data);
    // }
    // UseEffect(()=>{
    //     FetchProducts();

    // },[]);

    console.log(products);
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default app
