//Centralized config export

import generalConfig from "./general";
import headerConfig from "./header";
import footerConfig from "./footer";
import homeConfig from "./home";
import ProductsCardProductPageCofig from "./ProductsCardProductPageCofig";

const siteConfig = {
  general: generalConfig,
  header: headerConfig,
  footer: footerConfig,
  home: homeConfig,
  products: ProductsCardProductPageCofig,
};

export default siteConfig;
