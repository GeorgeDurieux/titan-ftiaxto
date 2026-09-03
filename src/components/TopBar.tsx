import titanLogo from '../assets/img/logo-titan.png';
import { product } from '../data/product';

/*
 * Logo and product name only. No navigation: the brochure is one page, so a
 * menu would point at nothing.
 */
const TopBar = () => (
  <header className="topbar">
    <img
      className="topbar__logo"
      src={titanLogo}
      alt="TITAN"
      width={398}
      height={114}
    />
    <p className="topbar__product">
      {product.name} {product.line}
    </p>
  </header>
);

export default TopBar;
