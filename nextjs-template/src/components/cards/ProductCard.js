"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/ProductCard.module.css";

const ProductCard = ({ title, description, image, link }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardBody}>{description}</p>
        <Link href={link} className={styles.button}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
