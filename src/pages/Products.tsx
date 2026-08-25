import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  return (
    <main className="products-page">
      <div className="products-heading">
        <p>OUR COLLECTION</p>
        <h1>{t("collection.title")}</h1>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <h2>{product.name}</h2>
            </Link>

            <div className="product-card-bottom">
              <p>¥{product.price.toLocaleString()}</p>

              <button
                type="button"
                className="product-add-cart"
                onClick={() =>
                  addToCart(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    },
                    1,
                  )
                }
                aria-label={`Add ${product.name} to cart`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4H5L7.2 15.5C7.4 16.4 8.2 17 9.1 17H17.5C18.4 17 19.2 16.4 19.4 15.5L21 8H6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="9.5" cy="20" r="1.2" fill="currentColor" />
                  <circle cx="17" cy="20" r="1.2" fill="currentColor" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Products;
