/*
 * Everything the page says, in one place.
 *
 * All of it is taken from the packaging artwork (Ftiaxto FINAL MAKETA), so
 * treat that as the source of truth and change it only against a newer artwork
 * or the technical data sheet.
 */

export const product = {
  name: 'FTIAXTO',
  line: 'R3 Structural',
  category: 'Repair Dry Concrete',
  /** The claim the bag leads with, and so does this page. */
  promise: '2 in 1 pre-blended dry mix',
  blend: [
    { part: 'Aggregates', detail: 'Graded particle size' },
    { part: 'Cement (CEM IV)', detail: 'High performance binder' },
  ],
  standards: ['C30/37, XC4', 'EN 1504-3', 'EN 206-1'],
  weight: '25 kg',
  origin: 'Produced in Greece, Kamari plant',
  intro:
    'A ready-to-use dry concrete for structural repairs. Add 2 to 3 litres ' +
    'of water to the bag, depending on how fluid you need it, and you have a ' +
    'C30/37 mix without batching aggregates and cement yourself.',
} as const;

export const features = [
  { key: 'diy-friendly',   label: 'DIY friendly'   },
  { key: 'high-strength',  label: 'High strength'   },
  { key: 'low-shrinkage',  label: 'Low shrinkage'   },
  { key: 'easy-to-apply',  label: 'Easy to apply'   },
  { key: 'sustainable',    label: 'Sustainable'     },
] as const;

/*
 * Each use leads with the kind of work, then the examples. The lead is set
 * apart so the four kinds can be scanned without reading the examples.
 */
export const uses = [
  {
    lead: 'Small structural constructions and repairs',
    rest: 'such as tie beams and lintels, and filling voids or defects in existing concrete',
  },
  {
    lead: 'Landscaping and garden works',
    rest: 'such as anchoring posts, fences and light poles, ramps, pathways and support bases',
  },
  {
    lead: 'Floor coverings and substrates',
    rest: 'such as levelling cement screeds and forming slopes for proper water drainage',
  },
  {
    lead: 'Special constructions and infrastructure',
    rest: 'such as manholes, channels and small non-load-bearing foundations',
  },
];

/*
 * These four steps are a real sequence, which is why they are the only
 * numbered list on the page.
 */
export const mixing = [
  'Mix the content of the bag with 2 to 3 litres of clean water.',
  'Use a mechanical mixer until the mix is homogenous.',
  'Apply by trowel or by casting, depending on the application.',
  /* 30 minutes, the pot life printed on the bag. Not to be confused with the
     setting time, which is ~2 hours and lives in the technical characteristics
     below. The two are different properties. */
  'Work within about 30 minutes at +20°C, the pot life of the mix.',
];

export const dosage = {
  head: ['Workability', 'Bag', 'Water', 'Strength', 'Consistency'],
  rows: [
    {
      workability: 'S3',
      slump: '10-15 cm',
      bag: '25 kg',
      water: '2 L',
      strength: '55 MPa',
      consistency: 'Plastic',
      suits: 'Typical slabs, beams and columns',
    },
    {
      workability: 'S4',
      slump: '16-21 cm',
      bag: '25 kg',
      water: '2.5 L',
      strength: '53 MPa',
      consistency: 'Very fluid',
      suits: 'Pumpable, heavily reinforced sections, walls',
    },
    {
      workability: 'S5',
      slump: '≥ 22 cm',
      bag: '25 kg',
      water: '3 L',
      strength: '52 MPa',
      consistency: 'Very soft / flowing',
      suits: 'Self-levelling, densely reinforced sections, restricted access, thin walls',
    },
  ],
};

export const specs = [
  { label: 'Compressive strength, 28 days', value: '≥ 55 MPa' },
  { label: 'Category',                      value: 'R3 / EN 1504-3' },
  { label: 'Application thickness',         value: '20-120 mm' },
  { label: 'Setting time at +20°C',         value: '~ 2 hours' },
  { label: 'Yield',                         value: '~ 0.012 m³ per bag' },
  { label: 'Application temperature',       value: '+5°C to +35°C' },
  { label: 'Declaration of performance',    value: 'R3-C25, EN 206 compliant' },
];

/*
 * Laboratory results, each against the standard it was measured under. Kept
 * apart from `specs` above: those are the declared characteristics printed on
 * the bag, these are measured values, and the third column is the reason the
 * two cannot share a table. A dash means the figure carries no test standard.
 */
export const labCharacteristics = [
  { property: 'Max aggregate size',              value: '8 mm',                    standard: '—' },
  { property: 'Compressive strength (1 day)',    value: '28.2 MPa',                standard: 'EN 12190' },
  { property: 'Compressive strength (28 days)',  value: '60.5 MPa',                standard: 'EN 12190' },
  { property: 'Flexural strength (28 days)',     value: '8.15 MPa',                standard: 'EN 12190' },
  { property: 'Capillary absorption',            value: '0.027 kg·m⁻²·h⁻⁰·⁵',      standard: 'EN 13057' },
  { property: 'Chloride penetration (28 d)',     value: '229 C',                   standard: 'ASTM C1202' },
  { property: 'Concrete class',                  value: 'C30/37 – C45/55',         standard: 'EN 206 / EN 14487-1' },
  { property: 'Pull off',                        value: '2.14 MPa',                standard: 'EN 1542' },
  { property: 'Lower CO₂',                      value: '~40% vs I 42.5 mix',      standard: '—' },
  { property: 'Yield',                           value: '~85 bags / m³',           standard: '—' },
];

export const downloads = [
  { title: 'Technical data sheet',       code: 'TDS',      file: 'ftiaxto-tds.pdf'      },
  { title: 'Declaration of performance', code: 'DoP',      file: 'ftiaxto-dop.pdf'      },
  { title: 'Safety data sheet',          code: 'SDS',      file: 'ftiaxto-sds.pdf'      },
  { title: 'Product brochure',           code: 'Brochure', file: 'ftiaxto-brochure.pdf' },
];

/*
 * Supplied by the client as Greek Q&A and translated for this page, which is
 * entirely in English. Technical vocabulary is left exactly as written — R3,
 * repair mortar, ready-mix, pull-off — because those are the words the trade
 * uses in both languages and translating them would lose the meaning rather
 * than carry it.
 *
 * The source numbered these 1, 2, 5, 11 and 12 out of a longer internal list.
 * The numbers are dropped: gaps on a public page read as missing content.
 */
export const faq = [
  {
    // CHECK BEFORE PUBLISHING. The Greek source says 20-150 mm; `specs` above
    // says 20-120 mm, taken from the packaging artwork. One of the two is wrong
    // and this page would state both. The artwork number is used here because it
    // is the one already printed on the bag, but the client has to settle it.
    q: 'Why not just use an R3 mortar?',
    a: 'FTIAXTO covers applications that are too large for a typical repair ' +
       'mortar and too small for ready-mix concrete. It also gives you a ' +
       '20 to 120 mm application range in a single product.',
  },
  {
    q: 'What sets it apart?',
    a: 'One product and one mix, for both small pours and repairs. That ' +
       'reduces complexity on site and simplifies choosing a material.',
  },
  {
    q: 'Has the performance been proven?',
    a: 'It reached 60.5 MPa compressive strength with high durability and a ' +
       'reduced environmental footprint, and it has been tested in real field ' +
       'applications. Laboratory testing covered flexural strength, pull-off ' +
       'bond strength, and resistance to chloride penetration and carbonation.',
  },
  {
    q: 'Why switch from the repair mortars already in use?',
    a: 'FTIAXTO combines the simplicity of a repair mortar with the ' +
       'performance of concrete, covering both repairs and small-volume ' +
       'concrete work with a single product.',
  },
  {
    q: 'Why R3 and not R4?',
    a: 'It was designed for a different need: the gap between repair mortars ' +
       'and ready-mix concrete. Its value is castable structural repair ' +
       'concrete in a 25 kg bag, for jobs where a repair mortar is not enough ' +
       'and ready-mix is not practical.',
  },
];

/** Verbatim from the bag. Do not soften. */
export const safety = [
  'Contains cement. Causes skin irritation.',
  'Wear protective gloves and eye protection.',
  'Keep out of reach of children.',
  'In case of contact with eyes, rinse immediately with water.',
];
