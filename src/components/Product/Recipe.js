import React, { useState } from 'react';
import './Recipe.css';

const cash = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  
  function getTotal(total) {
    return total.toLocaleString(undefined, cash)
  }

  const recipes = [
  {
    emoji: '🍕',
    name: 'Pizza',
    price: 100
  },
  {
    emoji: '🌭',
    name: 'Hot Dog',
    price: 50
  }
];
  
  export default function Recipe() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function add(recipe) {
        setCart(current => [...current, recipe.name]);
        setTotal(current => current + recipe.price);
      }

     return(
        <div className="wrapper">
          <div>
            Sumanti's Menu Cart items: {cart.length} total items.
          </div>
          <div> Total value of Cart items: {getTotal(total)}</div>
            <div>
            {recipes.map(recipe => (
              <div key={recipe.name}>
                <div className="product">
                  <span role="img" aria-label={recipe.name}>{recipe.emoji}</span>
                </div>
                <button onClick={() => add(recipe)}>Add</button>
                <button>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )
    }