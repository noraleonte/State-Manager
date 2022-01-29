import { useState } from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content';
import products from './constants/products';

function App() {
  // const [cartItems, setCartItems] = useState([]);
  // const [counter, setCounter] = useState(0);

  // const checkStock = (id, quantity) => {
  //   var itemStock = products.find(prod => prod.id === id).stock;
  //   if ((itemStock - quantity) < 0) {
  //     return "We only have " + itemStock + " on stock right now!";
  //   } else {
  //     return 1;
  //   }
  // }
  // const addProducts = (id) => {
  //   var x = cartItems.findIndex((e) => e.prodId === id);
  //   if (x !== -1) {
  //     var ok = checkStock(id, 1 + cartItems[x].quantity)
  //     if (ok === 1) {
  //       cartItems[x].quantity += 1;
  //       return 1;
  //     }
  //     else {
  //       console.log(ok);
  //       return 0;
  //     }
  //   } else if (checkStock(id, 1) === 1) {
  //     let product = products.find(product => product.id === id);
  //     let newCart = cartItems;
  //     newCart.push({ prodId: id, name: product.name, quantity: 1 });
  //     setCartItems(newCart);
  //     return 1;
  //   }
  //   else {
  //     console.log(ok);
  //     return 0
  //   }
  // }

  // const handleAddToCart = (id) => {
  //   if (addProducts(id)) {
  //     setCounter(counter + 1)
  //   }
  // }
  // const handleRemoveItem = (id) => {
  //   let itemToRemove = cartItems.findIndex((e) => e.prodId === id);
  //   let quantity = cartItems[itemToRemove].quantity;
  //   if (cartItems.length === 1) {
  //     setCartItems([]);
  //   } else {
  //     if (itemToRemove >= 0) {
  //       setCartItems(cartItems.splice(itemToRemove, 1));
  //       console.log("I removed your product!");
  //     }
  //   }
  //   setCounter(counter - quantity);
  // }

  return (
    <div className="App">
      <Navbar />
      <Content
        products={products}
        // handleAddToCart={handleAddToCart}
        // cartItems={cartItems}
        // handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
