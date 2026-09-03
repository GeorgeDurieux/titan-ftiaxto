import { uses, mixing } from '../data/product';
import Eyebrow from './Eyebrow';

/*
 * What it is for, next to how it is mixed. Two lists side by side because the
 * reader is asking both questions at once, and neither is long enough to earn
 * its own section.
 */
const Uses = () => (
  <section className="section section--tint" id="uses">
    <div className="wrap split">
      <div>
        <Eyebrow>Where it goes</Eyebrow>
        <h2>Suitable for</h2>
        <ul className="ticks" style={{ marginTop: 24 }}>
          {uses.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow>How it is mixed</Eyebrow>
        <h2>Four steps</h2>
        <ol className="steps" style={{ marginTop: 24 }}>
          {mixing.map((m) => (
            <li key={m}>
              <span>{m}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Uses;
