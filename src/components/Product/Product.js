import React, { useState } from 'react';
import './Product.css';

const cash = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  
  function getTotal(total) {
    return total.toLocaleString(undefined, cash)
  }

  const products = [
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
  
  export default function Product() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function add(product) {
        setCart(current => [...current, product.name]);
        setTotal(current => current + product.price);
      }

     return(
        <div className="wrapper">
          <div>
            Sumanti's Menu Cart items: {cart.length} total items.
          </div>
          <div> Total value of Cart items: {getTotal(total)}</div>
            <div>
            {products.map(product => (
              <div key={product.name}>
                <div className="product">
                  <span role="img" aria-label={product.name}>{product.emoji}</span>
                </div>
                <button onClick={() => add(product)}>Add</button>
                <button>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )
    }