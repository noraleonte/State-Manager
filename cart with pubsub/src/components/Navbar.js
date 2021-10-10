import logo from '../images/evocart-logo.png';
import cartIcon from '../images/shopping-cart.png';
import usePubsub from '../customHooks/usePubsub';

const Navbar = (props) => {
  const c = usePubsub('counter');

  return (
    <nav className="navbar">
      <img src={logo} alt="evocart logo" className="logo" />
      <div className="cart-icon">
        <img src={cartIcon} alt="cart icon" />
        <p>{c['counter']}</p>
      </div>
    </nav>
  );
};

export default Navbar;
