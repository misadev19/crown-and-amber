import { Link } from "react-router-dom";
import products from "../data/products";
import { useTranslation } from "react-i18next";
import { useCart } from "../contexts/CartContext";
import crownGold from "../assets/icons/crown-gold.svg";
import crownSilver from "../assets/icons/crown-silver.svg";
import crownBronze from "../assets/icons/crown-bronze.svg";

const rankingProducts = [
  {
    productId: "earl-grey",
    rank: 1,
    crown: crownGold,
  },
  {
    productId: "rose-tea",
    rank: 2,
    crown: crownSilver,
  },
  {
    productId: "afternoon-tea",
    rank: 3,
    crown: crownBronze,
  },
];

function Ranking() {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  return (
    <section className="ranking">
      <div className="ranking-heading">
        <p>OUR SELECTION</p>
        <h2>{t("ranking.title")}</h2>
      </div>

      <div className="ranking-products">
        {rankingProducts.map((ranking) => {
          const product = products.find(
            (product) => product.id === ranking.productId,
          );

          if (!product) return null;

          return (
            <article key={product.id} className="ranking-card">
              <Link to={`/products/${product.id}`}>
                <img className="ranking-crown" src={ranking.crown} alt="" />

                <div className="ranking-image">
                  <img
                    className="ranking-product-image"
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="ranking-number">{ranking.rank}</span>
                </div>

                <h3>{product.name}</h3>
              </Link>

              <div className="ranking-card-bottom">
                <p>¥{product.price.toLocaleString()}</p>

                <button
                  type="button"
                  className="ranking-add-cart"
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
          );
        })}
      </div>
    </section>
  );
}

export default Ranking;
