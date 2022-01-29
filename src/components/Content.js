import ProductsSection from './ProductsSection';
import Cart from './Cart';

const Content = (props) => {
  return (
    <main>
      <ProductsSection
        products={props.products}
        // handleAddToCart={props.handleAddToCart}
      />
      {/* <Cart
        // cartItems={props.cartItems}
        products={props.products}
        // handleRemoveItem={props.handleRemoveItem}
      /> */}
    </main>
  );
};

export default Content;
