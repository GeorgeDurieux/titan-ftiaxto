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
    'A ready-to-use dry concrete for structural repairs. Add 1.5 to 2.5 litres ' +
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
  'Work within about 2H at +20°C, the pot life of the mix.',
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
  ],
};

export const specs = [
  { label: 'Compressive strength, 28 days', value: '≥ 30 MPa' },
  { label: 'Category',                      value: 'R3 / EN 1504-3' },
  { label: 'Application thickness',         value: '25-100 mm' },
  { label: 'Setting time at +20°C',         value: '~ 2 hours' },
  { label: 'Yield',                         value: '~ 0.012 m³ per bag' },
  { label: 'Application temperature',       value: '+5°C to +35°C' },
  { label: 'Declaration of performance',    value: 'R3-C25, EN 206 compliant' },
];

export const downloads = [
  { title: 'Technical data sheet',       code: 'TDS',      file: 'ftiaxto-tds.pdf'      },
  { title: 'Declaration of performance', code: 'DoP',      file: 'ftiaxto-dop.pdf'      },
  { title: 'Safety data sheet',          code: 'SDS',      file: 'ftiaxto-sds.pdf'      },
  { title: 'Product brochure',           code: 'Brochure', file: 'ftiaxto-brochure.pdf' },
];

/** Verbatim from the bag. Do not soften. */
export const safety = [
  'Contains cement. Causes skin irritation.',
  'Wear protective gloves and eye protection.',
  'Keep out of reach of children.',
  'In case of contact with eyes, rinse immediately with water.',
];
