import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products, isLoading, onFavorite, favorites }) => {
  const isFavorite = (product) => {
    return favorites.some(favorite => favorite.product_url === product.product_url);
  }

  const handleFavorite = (product) => {
    onFavorite(product);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p className="no-products">This site is only a demo and will not work for new searches due to API limitations. <br /> <br />
    Please click 'Search' to see the demo.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => {
        const favoriteClass = isFavorite(product) ? 'favorite' : '';
        return (
          <div key={index} className="product-card">
            <a href={product.product_url} target="_blank" rel="noopener noreferrer">
              <img src={product.image_url} alt={product.product_title} />
              <p>{product.product_title}</p>
            </a>
            <button className={favoriteClass} onClick={() => handleFavorite(product)}>
              {isFavorite(product) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
