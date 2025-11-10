import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../Components/ProductDisplay';
import { Breadcrum } from '../Components/Breadcrum';
import { DescriptionBox } from '../Components/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct';
export const Product = () => {
  const {AllProduct}= useContext(ShopContext);
  const {productId} = useParams();
  const product = AllProduct.find(e => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
