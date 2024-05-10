import { useContext } from "react";
import "./Products.css";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
  );

  const originalPrice = productItem.price.current || 0;
  const discountPercentage = productItem.price.discount || 0;

  //İndirimli fiyat hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100 || 0;

  return (
    <div
      className="product-item splide__slide is-active is-visible"
      id="splide02-slide01"
    >
      <div className="productImage-container">
        <Link to={`/product/${productItem._id}`} className="product-image">
          <img src={productItem.img[0]} className="product-img-1" />
        </Link>
      </div>
      <div className="product-info">
        <a href="#" className="product-title" data-id="1">
          {productItem.name}
        </a>
        <p></p>
        <p className="item-rating">★★★★☆</p>
        <div className="item-price-wrapper">        <p className="item-price">₺{discountedPrice.toFixed(2)}</p>
        <p className="item-price-2">₺{originalPrice.toFixed(2)}</p></div>

      </div>
      <div className="product-links">
        <button
          className="links-basket"
          data-id="1"
          onClick={() =>
            addToCart({
              ...productItem,
              price: discountedPrice,
            })
          }
          disabled={filteredCart}
        >
          <i
            className="bi bi-basket"
            style={{ color: "rgba(0, 0, 0, 0.822)", fontSize: "17px" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
};
