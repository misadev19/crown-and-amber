import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation();
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-heading">
          <p>YOUR SELECTION</p>
          <h1>{t("cart.title")}</h1>
        </div>

        <div className="cart-empty">
          <p>{t("cart.emptyMessage")}</p>

          <Link to="/products" className="cart-continue">
            {t("cart.continueBtn")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p>YOUR SELECTION</p>
        <h1>{t("cart.title")}</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p className="cart-item-price">
                  ¥{item.price.toLocaleString()}
                </p>

                <div className="cart-item-bottom">
                  <div className="cart-quantity">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {t("cart.removeBtn")}
                  </button>
                </div>
              </div>

              <p className="cart-item-total">
                ¥{(item.price * item.quantity).toLocaleString()}
              </p>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <p>ORDER SUMMARY</p>

          <div className="cart-summary-line">
            <span>{t("cart.subtotal")}</span>
            <span>¥{cartTotal.toLocaleString()}</span>
          </div>

          <div className="cart-summary-divider" />

          <div className="cart-summary-total">
            <span>{t("cart.total")}</span>
            <span>¥{cartTotal.toLocaleString()}</span>
          </div>

          <button
            type="button"
            className="checkout-button"
            onClick={() => alert(t("cart.alert"))}
          >
            {t("cart.checkoutBtn")}
          </button>

          <Link to="/products" className="continue-shopping">
            {t("cart.continueBtn")}
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
