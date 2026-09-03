import { features } from '../data/product';
import Eyebrow from './Eyebrow';

import diy from '../assets/img/feature-diy-friendly.png';
import strength from '../assets/img/feature-high-strength.png';
import shrinkage from '../assets/img/feature-low-shrinkage.png';
import apply from '../assets/img/feature-easy-to-apply.png';
import sustainable from '../assets/img/feature-sustainable.png';

/*
 * The five marks printed along the bottom of the bag, in the same order.
 *
 * The icons are cropped from the packaging artwork without their printed
 * labels, all scaled to the same glyph height so the row reads evenly, and the
 * label is set as text. That keeps it translatable and lets the tiles reflow.
 */
const icons: Record<string, string> = {
  'diy-friendly': diy,
  'high-strength': strength,
  'low-shrinkage': shrinkage,
  'easy-to-apply': apply,
  sustainable: sustainable,
};

const Features = () => (
  <section className="section section--tint" id="features">
    <div className="wrap">
      <div className="section__head">
        <Eyebrow>Why this bag</Eyebrow>
        <h2>Five things the mix is built for</h2>
      </div>

      <ul className="features">
        {features.map((f) => (
          <li key={f.key}>
            <img src={icons[f.key]} alt="" width={190} height={190} />
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
