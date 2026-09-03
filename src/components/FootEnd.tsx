import { product } from '../data/product';

/*
 * Not the corporate footer. One line, so the page has an end rather than a
 * second site map.
 */
const FootEnd = () => (
  <footer className="footend">
    <span>
      {product.name} {product.line}, {product.category}
    </span>
    <span>Mockup. Content and imagery are placeholders.</span>
  </footer>
);

export default FootEnd;
