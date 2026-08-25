import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";

function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <main className="product-detail-page">
        <p>PRODUCT NOT FOUND</p>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity,
    );
  };

  return (
    <main className="product-detail-page">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <p className="product-detail-label">CROWN & AMBER COLLECTION</p>

          <h1>{product.name}</h1>

          <p className="product-detail-price">
            ¥{product.price.toLocaleString()}
          </p>

          <div className="product-detail-line" />

          <p className="product-detail-description">
            {t(`products.${product.id}.description`)}
          </p>

          <div className="quantity">
            <button
              type="button"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            {t("productDetail.addToCart")}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
