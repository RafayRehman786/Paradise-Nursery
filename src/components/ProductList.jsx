import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: "snake", name: "Snake Plant", price: 18, image: "photo-1593691509543-c55fb32e5cee" },
      { id: "spider", name: "Spider Plant", price: 14, image: "photo-1572688484438-313a6e50c333" },
      { id: "peace-lily", name: "Peace Lily", price: 22, image: "photo-1593691509543-c55fb32e5cee" },
      { id: "areca", name: "Areca Palm", price: 26, image: "photo-1512428813834-c702c7702b78" },
      { id: "rubber", name: "Rubber Plant", price: 24, image: "photo-1509423350716-97f9360b4e09" },
      { id: "boston", name: "Boston Fern", price: 16, image: "photo-1501004318641-b39e6451bec6" }
    ]
  },
  {
    name: "Decorative Foliage Plants",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 30, image: "photo-1614594975525-e45190c55d0b" },
      { id: "pothos", name: "Golden Pothos", price: 15, image: "photo-1497250681960-ef046c08a56e" },
      { id: "zz", name: "ZZ Plant", price: 21, image: "photo-1509423350716-97f9360b4e09" },
      { id: "calathea", name: "Calathea", price: 23, image: "photo-1485955900006-10f4d324d411" },
      { id: "philodendron", name: "Philodendron", price: 19, image: "photo-1485955900006-10f4d324d411" },
      { id: "jade", name: "Jade Plant", price: 17, image: "photo-1501004318641-b39e6451bec6" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: "orchid", name: "Purple Orchid", price: 28, image: "photo-1567748157439-651aca2ff4d3" },
      { id: "anthurium", name: "Anthurium", price: 25, image: "photo-1490750967868-88aa4486c946" },
      { id: "kalanchoe", name: "Kalanchoe", price: 13, image: "photo-1490750967868-88aa4486c946" },
      { id: "african-violet", name: "African Violet", price: 16, image: "photo-1459156212016-c812468e2115" },
      { id: "bromeliad", name: "Bromeliad", price: 27, image: "photo-1485955900006-10f4d324d411" },
      { id: "begonia", name: "Begonia", price: 20, image: "photo-1490750967868-88aa4486c946" }
    ]
  }
];

function plantImage(photoId) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=80`;
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = cartItems.map((item) => item.id);

  return (
    <main className="page-container plants-page">
      <div className="section-heading">
        <p className="eyebrow">FIND YOUR GREEN</p>
        <h1>Our Houseplants</h1>
        <p>Choose a plant and bring a little more nature into your space.</p>
      </div>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const alreadyAdded = cartIds.includes(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plantImage(plant.image)} alt={plant.name} />
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      className="button button-primary full-button"
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
