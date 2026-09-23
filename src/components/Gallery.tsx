import bag from '../assets/img/bag.png';
import pallet from '../assets/img/pallet.png';
import bagsStacked from '../assets/img/bags-stacked.jpg';
import palletSite from '../assets/img/pallet-site.jpg';
import mixing from '../assets/img/mixing.jpg';
import damagedBeam from '../assets/img/damaged-beam.jpg';
import formwork from '../assets/img/formwork.jpg';
import castWall from '../assets/img/cast-wall.jpg';
import finishedBeam from '../assets/img/finished-beam.jpg';
import labCarbonation from '../assets/img/lab-carbonation.jpg';
import Eyebrow from './Eyebrow';

/*
 * The two renders from the packaging artwork, then the site photographs, in the
 * order the material is met: the bag, the delivery, the mixer, the damage being
 * repaired, the pour, the result, and the laboratory.
 *
 * The first four pair artwork with reality on purpose — the render says what is
 * ordered, the photograph says what turns up. The two placeholders that used to
 * sit here asked for exactly these application shots, so they are gone.
 *
 * The photographs were shot on a phone at 4-6k and carried EXIF, GPS included.
 * They are resized to 1400px on the long edge and stripped, which took the set
 * from 59 MB to 2.5 MB. Replace them the same way, or the page becomes a download.
 */
/* `photo` picks `cover` over `contain`. See `.shot--photo` for why the two
   packaging renders are the exception rather than the rule. */
const shots = [
  { src: bag,             photo: false, caption: '25 kg bag, front face' },
  { src: bagsStacked,     photo: true,  caption: 'Stacked on site' },
  { src: pallet,          photo: false, caption: 'Full pallet, as delivered' },
  { src: palletSite,      photo: true,  caption: 'A pallet on arrival, still wrapped' },
  { src: mixing,          photo: true,  caption: 'Charging the mixer straight from the bag' },
  { src: damagedBeam,     photo: true,  caption: 'Spalled beam, reinforcement exposed' },
  { src: formwork,        photo: true,  caption: 'Timber formwork and steel, ready to cast' },
  { src: castWall,        photo: true,  caption: 'Cast section with the formwork struck' },
  { src: finishedBeam,    photo: true,  caption: 'The finished cast' },
  { src: labCarbonation,  photo: true,  caption: 'Carbonation test on cut specimens' },
];

const Gallery = () => (
  <section className="section" id="gallery">
    <div className="wrap">
      <div className="section__head">
        <Eyebrow>The product</Eyebrow>
        <h2>Bag, pallet, and the job itself</h2>
      </div>

      <div className="gallery">
        {shots.map((s) => (
          <figure className={`shot${s.photo ? ' shot--photo' : ''}`} key={s.src}>
            <img src={s.src} alt={s.caption} loading="lazy" />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
