import { downloads } from '../data/product';
import Eyebrow from './Eyebrow';

/*
 * Every file here is a one-page placeholder that says what it will be. They are
 * real PDFs so the links behave the way they will in the end, but they carry no
 * product data. Replace the files in public/downloads and nothing else changes.
 */
const Downloads = () => (
  <section className="section section--tint" id="downloads">
    <div className="wrap">
      <div className="section__head">
        <Eyebrow>Documents</Eyebrow>
        <h2>Download the relevant documents</h2>
        <p className="lede">
          Placeholders for now. Each link opens a one-page PDF naming the
          document that belongs there.
        </p>
      </div>

      <div className="docs">
        {downloads.map((d) => (
          <a
            key={d.file}
            className="doc"
            href={`/downloads/${d.file}`}
            download
          >
            <span className="doc__code">{d.code}</span>
            <span className="doc__title">{d.title}</span>
            <span className="doc__hint">PDF, placeholder</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Downloads;
