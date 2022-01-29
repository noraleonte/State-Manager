const Cart = (props) => {
    return (
        <div className="cart">
            <h1>Your <span className="siteName">evocart's</span > content:</h1>
            {props.cartItems.map((item) => (
                < div className="cartItem" key={item.prodId} >
                    <div className="details">

                        <h3>{item.name}</h3>

                    </div>
                    <div className="buttons">
                        <button className="removeButton" onClick={() => { props.handleRemoveItem(item.prodId) }}>Remove</button>
                    </div>
                    <hr className="separator" />
                </div>

            ))
            }
        </div >
    );
}

export default Cart;