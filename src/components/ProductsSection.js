import manage from '../state/store';
import COUNTER from '../constants/actions';

const ProductsSection = (props) => {
  return (
    <div className="products">
      <h1>
        Welcome to <span className="siteName">evocart.</span> Find the products
        you like and add them to your cart.
      </h1>
      {props.products.map((product) => (
        <div
          className="product"
          key={product.id}
          style={{
            backgroundImage: `url(${product.img})`,
            backgroundSize: 'cover',
          }}
        >
          {/* <img src={product.img} alt="" className="productImage" /> */}
          <div className="details">
            <div className="text">
              <h2>${product.price}</h2>
              <h3>{product.name}</h3>
              <p className="stock">Available: {product.stock}</p>
            </div>
            <button
              className="addtoCart"
              onClick={() => {
                manage.handleStuff('counter', COUNTER.increment);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
