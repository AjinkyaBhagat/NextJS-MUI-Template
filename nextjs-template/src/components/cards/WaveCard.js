import styles from "../../styles/WaveCard.module.css"; // Import the CSS module

export default function WaveCard() {
  return (
    <div className={styles.header}>
      {/* Content before waves */}
      <div className={`${styles.innerHeader} ${styles.flex}`}>
        <h1 className={styles.waveCard}>Simple CSS Waves</h1>
      </div>

      {/* Waves Container */}
      <div>
        <svg className={styles.waves} 
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.parallax}>
            {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" /> */}
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(252, 204,156,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(251, 181, 115,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(249, 170, 94,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f89f49" />
          </g>
        </svg>
      </div>
    </div>
  );
}
