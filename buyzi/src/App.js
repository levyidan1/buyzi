import React, { useState } from 'react';
import SearchBox from './SearchBox';
import ProductGrid from './ProductGrid';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [recommendationScore, setRecommendationScore] = useState(0);

  const handleSearch = (results) => {
    results = [
      {
          "product_url": "https://www.amazon.com/Magical-Birthday-Invitations-Outego-Envelopes/dp/B07FP911XL",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ca9HrZXtfxV_zy0igvOPVOkSF4-ZJGOGS5oEeRLiOcFosz2eq4AyBYQ&s",
          "product_title": "Magical Unicorn Birthday Invitations, Outego Glitter"
      },
      {
          "product_url": "https://www.amazon.com/Unicorn-Birthday-Balloons-Confetti-Decorations/dp/B0989Z3Q6D",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYbMxRJqVfvjyfykzlL1a_SFHAMWPlMdNaQTxCs0OM_pZiJdMp6y0lpzB&s",
          "product_title": "Unicorn Balloons Arch Garland Kit, 146Pcs Rainbow 40"
      },
      {
          "product_url": "https://merimeri.com/products/bright-crepe-paper-streamers",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1RBeIlhJwfHUGUxKGtaF95DmD5CqtmjggctDLacNI_6P_T44iJqOAA0&s",
          "product_title": "Crepe Streamers – Meri Meri"
      },
      {
          "product_url": "https://www.pinterest.com/pin/1055599899983809/",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel46XiKlAQOIeklmN-k0IWsdtAVDoYbU5DLceJQgB54Er6Crn7n9pIGo&s",
          "product_title": "Unicorn centerpiece"
      },
      {
          "product_url": "https://www.creativecenter.brother/en-us/home/home-category/party-decorations/any-occasion/unicorn-party-hat",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvi4nRrwmyPKk5wkyb_UDGUMkpkD9SIK2ERHCxZkRX8_VdIWNOLf2cSvo&s",
          "product_title": "Unicorn Party Hat"
      },
      {
          "product_url": "https://www.amazon.com/Spin-Master-Games-Multicolor-6041693/dp/B07BQK8MG2",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJdqkHEpBq8BB8dnH5P6Hwpqz-6ijoruPWSWolhC-DToftog_CEuD-SJh&s",
          "product_title": "Spin Master Games Magic Unicorn Ring Toss Game"
      },
      {
          "product_url": "https://www.hobbylobby.com/Party-Baking/Party-Decorations/Party-Games-Activities/Pin-the-Horn-On-the-Unicorn-Game/p/80844621",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz1xhalyoyEGX8XOMlUIup4auzTgFsMQRb2YvYwjbUFPG02t2gvzCCA&s",
          "product_title": "Pin the Horn On the Unicorn Game | Hobby Lobby | 1516368"
      },
      {
          "product_url": "https://www.etsy.com/listing/944442132/unicorn-treasure-hunt-unicorn-scavenger",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyybXRlWrOgRa5ZvMA8pfH2sEAfkH_7f-BIqkuwPxPKvTlGvCu3YOW5M&s",
          "product_title": "Unicorn Treasure Hunt Unicorn Scavenger Hunt Unicorn Party - Etsy"
      },
      {
          "product_url": "https://www.etsy.com/in-en/listing/710138624/unicorn-horn-headband-unicorn-hair-clip",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SpwG4cncapcYyUZGlJxLvwTfgKeKhuPHBki69KtqxxX0kJzT_KzMaFw&s",
          "product_title": "Buy Unicorn Horn Headband Unicorn Hair Clip Unicorn Halloween"
      },
      {
          "product_url": "https://blog.shopsweetsandtreats.com/unicorn-birthday-cake/",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Y_wLjmqo-sb_yzmFVzOgD6D5toGbMj2nti6cYfVCia8N3R8XLdOAeg&s",
          "product_title": "Unicorn Birthday Cake"
      },
      {
          "product_url": "https://wdwnt.com/2022/12/mickey-balloon-premium-rainbow-popcorn-bucket-mk/",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpr5Wqjfqt4ADxb0PITcATGl-1peLCpeeBi8M5CmDvTsSGq3hgq1a9b4&s",
          "product_title": "New Mickey Balloon Premium Rainbow Popcorn Bucket"
      },
      {
          "product_url": "https://www.amazon.com/Supplies-Tablecloth-Decoration-Disposable-Tableware/dp/B07JMBN97J",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpRAJfHfPgLHW9QTbCNIx-bBGPr0acd8u1W_YOZtGcLOR2wBQOejTc7I&s",
          "product_title": "Unicorn Themed Party Supplies Set,Unicorn Cake Plates"
      },
      {
          "product_url": "https://www.amazon.com/Unicorn-Creative-Paradise-Suitable-Christmas/dp/B09PD9MF4B",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKJL0ThKcK2sEk6punb3ZKbXdw9j5jdGznDs5mQNte0b3cz_3AzCPX88&s",
          "product_title": "Unicorn Lantern Creative Craft kit for Kids, Make Your"
      },
      {
          "product_url": "https://www.amazon.com/Unicorn-Sticker-Magical-Laptop-Bottle/dp/B07BN1QF2Q",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvJcpnF5_-PpKZKl7agWFBxl5P5uxwj0KUaUmsQS4R93CT1O2HuN8_xKP&s",
          "product_title": "Unicorn Sticker Decal Vinyl Magical AF 4\" x 2.8\" Funny"
      },
      {
          "product_url": "https://www.littleprincessspa.com/wellington/product/unicorn-candy-wonderland-party/",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWjYjSBQI3bSNUafIxj4Dq59zZGC2J9WMcot9g3ciqkCnvTCKpSrPzes&s",
          "product_title": "Unicorn Candy Wonderland Party | Little Princess Spa in Wellington"
      },
      {
          "product_url": "https://www.today.com/recipes/unicorn-cupcakes-recipe-t127311",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2OOE58tmH0lNwajquOOcJrMPgPzKP6Ig0Csf3pYkM-cjX-uBkXs_7A&s",
          "product_title": "Unicorn Cupcakes"
      },
      {
          "product_url": "https://www.amazon.com/Unicorn-Plates-Napkins-16-Serves/dp/B07Z8K55L2",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xoqcj7yszFwP6zBxH5UrZbXuKdNXsJbRsPKQWsrH3V0ppkDJ0OtiZjs&s",
          "product_title": "Onebest Unicorn Plates and Napkins, 16 Serves : Toys"
      },
      {
          "product_url": "https://daydreamsociety.com/products/magical-unicorn-napkins",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsKcOfFlE4nF_X6M_5WaGY7_ojDMEbQQmfMPK0uPWWcJ52bzS-TW1thM&s",
          "product_title": "magical unicorn large napkins"
      },
      {
          "product_url": "https://www.festivityfavors.com/item_1123/Rainbow-Unicorn-Custom-Thank-You-Cards.htm",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0iQZiP-Gos0bizxJFy1ETvq92IIgttLOh-oqC_E1GhlHhDiyToOW_fU&s",
          "product_title": "Rainbow Unicorn Thank You Cards Personalized"
      },
      {
          "product_url": "https://www.amazon.com/Tablecloth-Extra-Large-Disposable-Decorations-Decoration/dp/B07RSN14Q6",
          "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXVfH1ZYVW7vG-NWG-Ic2rYqFzGkFJ0-F1AxHjtGXUwLoyX9DkWj9Cuo&s",
          "product_title": "Extra-Large 2 Packs Unicorn Tablecloth, Unicorn Table"
      }
  ]
    setSearchResults(results);
  }

  const handleLoading = (loadingState) => {
    setIsLoading(loadingState);
  }

  const handleFavorites = (product) => {
    let updatedFavorites = [...favorites];
    const productIndex = updatedFavorites.findIndex(item => item.product_url === product.product_url);
    if (productIndex !== -1) {
      updatedFavorites.splice(productIndex, 1);
    } else {
      updatedFavorites.push(product);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const updateRecommendationScore = (score) => {
    setRecommendationScore(score);
  }

  return (
    <div className="app">
      <Topbar recommendationScore={recommendationScore} />
      <Sidebar favorites={favorites} />
      <div className="content">
        <SearchBox onSearch={handleSearch} onLoading={handleLoading} updateRecommendationScore={updateRecommendationScore} />
        <ProductGrid products={searchResults} isLoading={isLoading} onFavorite={handleFavorites} favorites={favorites} />
      </div>
    </div>
  );
}

export default App;
