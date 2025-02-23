"use client";

import styles from "../../styles/WaveCard.module.css";
import ProductCard from "../cards/ProductCard";

export default function WaveCard({ products = [] }) {
  return (
    <div className={styles.header}>
      {/* Product Cards Section */}
      <div className={`${styles.innerHeader} ${styles.flex}`}>
        <div className={styles.productGrid}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      {/* 💡 Move waves outside the .innerHeader div */}
      <div className={styles.wavesContainer}>
        <svg
          className={styles.waves}
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
}
