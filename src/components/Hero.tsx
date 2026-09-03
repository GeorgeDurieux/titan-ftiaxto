import wordmark from '../assets/img/logo-ftiaxto.png';
import bag from '../assets/img/bag.png';
import { product } from '../data/product';

/*
 * The hero reproduces the top of the bag.
 *
 * On the pack, the green field carries the "2 in 1" claim, a navy rounded panel
 * holds AGGREGATES and the green beside it holds CEMENT (CEM IV). Below the
 * diagonal cut, on white, sits the wordmark. That order is kept here, and the
 * pack photo is pulled up so it crosses the cut. The diagonal is the one
 * flourish on the page.
 */
const Hero = () => (
  <section className="hero">
    <div className="hero__band">
      <div className="wrap hero__bandInner">
        <p className="hero__promise">
          2 in 1 <span>{product.promise.replace('2 in 1 ', '')}</span>
        </p>

        <ul className="hero__blend">
          {product.blend.map((b, i) => (
            <li key={b.part} className={i === 0 ? 'is-navy' : undefined}>
              <strong>{b.part}</strong>
              <em>{b.detail}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="wrap hero__grid">
      <div className="hero__copy">
        <img
          className="hero__wordmark"
          src={wordmark}
          alt={`${product.name} ${product.line}, ${product.category}`}
          width={900}
          height={353}
        />

        <p className="lede">{product.intro}</p>

        <div className="actions">
          <a className="btn" href="#downloads">
            Download the documents
          </a>
          <a className="btn btn--ghost" href="#specifications">
            See the specifications
          </a>
        </div>
      </div>

      <div className="hero__pack">
        <img
          src={bag}
          alt={`A ${product.weight} bag of ${product.name} ${product.line}`}
          width={862}
          height={1400}
        />
      </div>
    </div>

    {/* The strip the bag prints along its edge: weight, standards, origin. */}
    <div className="wrap">
      <div className="hero__standards">
        <span>{product.weight} net weight</span>
        {product.standards.map((s) => (
          <span key={s}>{s}</span>
        ))}
        <span>{product.origin}</span>
      </div>
    </div>
  </section>
);

export default Hero;
