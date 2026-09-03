import { safety } from '../data/product';

/*
 * The hazard panel from the bag, verbatim. This is the only red on the page,
 * which is why it reads as a warning rather than as styling.
 */
const Safety = () => (
  <section className="section" id="safety">
    <div className="wrap">
      <div className="safety">
        <h2>Warning</h2>
        <ul>
          {safety.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Safety;
