import React from 'react';
import './Sidebar.css';

const Sidebar = ({ favorites }) => {
  const handleBuyAll = () => {
    // Handle the buy all action
    console.log("Buy All");
  }

  return (
    <div className="sidebar">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <span>{index + 1}. </span>
            <a href={favorite.product_url} target="_blank" rel="noopener noreferrer">
              {favorite.product_title}
            </a>
          </li>
        ))}
      </ul>
      {favorites.length > 0 && (
        <button className="buy-all-button" onClick={handleBuyAll}>
          Buy All
        </button>
      )}
    </div>
  );
}

export default Sidebar;
