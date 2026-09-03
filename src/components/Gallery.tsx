import bag from '../assets/img/bag.png';
import pallet from '../assets/img/pallet.png';
import Eyebrow from './Eyebrow';

/*
 * Two real shots lifted from the packaging artwork, and two slots that are
 * still missing. The empty slots are drawn as hatched placeholders and say
 * what belongs there, so nobody mistakes the gallery for finished.
 */
const Gallery = () => (
  <section className="section" id="gallery">
    <div className="wrap">
      <div className="section__head">
        <Eyebrow>The product</Eyebrow>
        <h2>Bag, pallet, and the job itself</h2>
      </div>

      <div className="gallery">
        <figure className="shot">
          <img src={bag} alt="The 25 kg bag, front face" />
          <figcaption>25 kg bag, front face</figcaption>
        </figure>

        <figure className="shot">
          <img src={pallet} alt="A full pallet of bags" />
          <figcaption>Full pallet, as delivered</figcaption>
        </figure>

        <figure className="shot shot--todo">
          Application shot
          <br />
          trowel on a repaired slab
        </figure>

        <figure className="shot shot--todo">
          Application shot
          <br />
          casting into formwork
        </figure>
      </div>
    </div>
  </section>
);

export default Gallery;
