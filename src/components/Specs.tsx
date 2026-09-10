import { dosage, labCharacteristics, specs } from '../data/product';
import Eyebrow from './Eyebrow';

/*
 * The two printed panels from the bag, in the order they are read: how much
 * water for which consistency, then the fixed characteristics.
 *
 * The dosage table keeps the S3 and S4 workability classes as row headers,
 * because that is the choice the reader is making. Everything else in the row
 * follows from it.
 */
const Specs = () => (
  <section className="section" id="specifications">
    <div className="wrap">
      <div className="section__head">
        <Eyebrow>Specifications</Eyebrow>
        <h2>Water in, strength out</h2>
        <p className="lede">
          One bag, multiple mixes. Less water gives a plastic mix for slabs,
          beams and columns; more water gives a fluid mix you can pump into
          heavily reinforced sections. Even at maximum water dosage, FTIAXTO
          keeps its structural strength above 50 MPa.
        </p>
      </div>

      <div className="tablewrap">
        <table>
          <caption>
            Dosage per 25 kg bag, at +20°C (nominal reference temperature).
          </caption>
          <thead>
            <tr>
              {dosage.head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dosage.rows.map((r) => (
              <tr key={r.workability}>
                <th scope="row">
                  {r.workability}
                  <small>{r.slump} slump</small>
                </th>
                <td className="data">{r.bag}</td>
                <td className="data">{r.water}</td>
                <td className="data">{r.strength}</td>
                <td>
                  {r.consistency}
                  <div className="muted">{r.suits}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
        <Eyebrow>Technical characteristics</Eyebrow>
        <dl className="specs">
          {specs.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Same definition list as the technical characteristics above, so the two
          read as one system rather than two. The standard each figure was
          measured under sits under the value as a second line: it is real
          information, but secondary to the number, and it does not deserve a
          column of its own when three of the ten rows have none. */}
      <div style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
        <Eyebrow>Lab characteristics</Eyebrow>
        <dl className="specs">
          {labCharacteristics.map((row) => (
            <div key={row.property}>
              <dt>{row.property}</dt>
              <dd>
                {row.value}
                {row.standard !== '—' && <small>{row.standard}</small>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Specs;
