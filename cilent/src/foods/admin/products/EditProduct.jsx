import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useShop from '../../../hooks/useShop'
import AddProduct from './AddProduct'
import ProductForm from './forms/ProductForm'

const EditProduct = () => {
    const {id} = useParams()
    // console.log(id);

    const {fetchProductsByid,singleProduct} = useShop()

    useEffect(()=>{
        fetchProductsByid(id)
    },[])

    // console.log(singleProduct);
  return (
    <div>
        {singleProduct._id && <ProductForm editItem={singleProduct} id={id}/>}
    </div>
  )
}

export default EditProduct