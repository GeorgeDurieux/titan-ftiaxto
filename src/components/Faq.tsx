import { useState } from 'react';
import { faq } from '../data/product';
import Eyebrow from './Eyebrow';

/*
 * The questions read as a menu and open one at a time, which is the point: the
 * list is meant to be scanned first and read second, so five open panels would
 * defeat it.
 *
 * Built from a button and a region rather than <details>/<summary>. Native
 * details is the shorter answer and would be the right one for independent
 * panels, but it cannot be told to close its siblings without fighting its own
 * open state from an effect.
 *
 * The answer stays mounted and is hidden with `hidden` rather than dropped from
 * the tree, so browser find-in-page can still reach a closed answer, and the
 * `aria-controls` target always exists.
 */
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section__head">
          <Eyebrow>Questions</Eyebrow>
          <h2>What people ask before they specify it</h2>
        </div>

        <div className="faq">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item${open ? ' is-open' : ''}`} key={item.q}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    className="faq__trigger"
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span className="faq__text">{item.q}</span>
                    <span className="faq__sign" aria-hidden="true" />
                  </button>
                </h3>

                <div
                  className="faq__a"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!open}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
