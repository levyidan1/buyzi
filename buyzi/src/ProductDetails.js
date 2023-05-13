import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = ({ onFavorite, favorites }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await axios.get(`http://0.0.0.0:3001/api/product/${id}`);
        setProduct(response.data);
      };
  
      fetchProduct();
    }, [id]);
  
    if (!product) {
      return <p>Loading...</p>;
    }
  
    const isFavorite = favorites.some(favorite => favorite.product_url === product.product_url);
  
    return (
      <div className="product-details">
        <img src={product.image_url} alt={product.product_title} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}} />
        <h2>{product.product_title}</h2>
        <p>{product.description}</p>
        <button onClick={() => onFavorite(product)}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        <a href={product.product_url}>Buy now</a>
      </div>
    );
  }
  
  export default ProductDetails;
  