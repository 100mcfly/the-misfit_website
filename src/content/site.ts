/* ============================================================
 *  THE MISFIT — SITE CONTENT
 *  ----------------------------------------------------------
 *  Edit any text or image below to update the website.
 *  - Text: change anything between the quotes ""
 *  - Images: drop new files into src/assets/ and update the
 *    matching `import` line at the top of this file.
 *  No layout or styles live here — only content.
 * ============================================================ */

import hero from "@/assets/hero-void.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const site = {
  /* -------- BRAND -------- */
  brand: {
    name: "The Misfit",
    logo: "Ø",
    tagline: "Designed in transit. Made for no one in particular.",
  },

  /* -------- NAVIGATION -------- */
  nav: [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/collections", label: "Collections" },
    { to: "/lookbook", label: "Lookbook" },
    { to: "/journal", label: "Journal" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ],

  /* -------- HOMEPAGE -------- */
  home: {
    hero: {
      image: hero,
      imageAlt: "Solitary figure in matte black coat in a brutalist plaza",
//       eyebrow: "Void City",
      headline: "Made to fit",
      headlineEm: "not fit in",
      subheadline:
        "A wardrobe for the in-between.",
      ctaPrimary: { label: "Enter the drop", to: "/shop" },
      ctaSecondary: { label: "See the film", to: "/lookbook" },
      sideLabel: "FW / 26 — Summer Series",
    },
    marquee: [
      "Void City",
      "Limited run · Numbered",
      "Shipping worldwide",
      "After Hours — coming soon",
      "Members access · Static Youth",
    ],
    featured: {
      eyebrow: "— Featured",
      title: "The Drop",
      link: { label: "View all →", to: "/shop" },
    },
    philosophy: {
      eyebrow: "— Philosophy",
//       symbol: "Ø",
      line1: "We don't dress the crowd.",
      line1Muted: " We dress the one who left it.",
      line2: "Soft edges, hard convictions. A uniform for the unaligned -",
      line2Muted: " minimal in form, loud in presence.",
    },
    capsule: {
      eyebrow: "— Capsule",
      title: "After Hours",
      image: editorial1,
      imageAlt: "Two figures in a brutalist corridor",
      portrait: look2,
      portraitAlt: "Late night editorial",
      copy: "Tailoring softened by midnight. Pieces for the hours in between - last train, first light, no audience.",
    },
    lookbookTeaser: {
      image: look1,
      imageAlt: "Look 01 — bone hoodie",
      eyebrow: "— Lookbook FW26",
      title: "No Frame",
      copy: "Portraits of creatives in the rooms they actually live in. No styling tricks. No grid. Just people, and what they choose to wear.",
      cta: { label: "Step inside", to: "/lookbook" },
    },
    portrait: {
      image: editorial2,
      imageAlt: "Portrait of a creative",
      eyebrow: "— Static Youth",
      quote: "\"Clothes are the loudest thing we still get to whisper.",
      quoteMuted: " So we choose them carefully.\"",
    },
    newsletter: {
      eyebrow: "— Transmissions",
      title: "Experience the next chapter before anyone else.",
      placeholder: "your@email.com",
      button: "Subscribe →",
      note: "No noise. Drops, films, rare access. Leave anytime.",
    },
  },

  /* -------- SHOP -------- */
  shop: {
    eyebrow: "— All pieces / FW26",
    title: "Shop",
    filters: ["All", "Essentials", "Void", "After Hours", "Ø Series", "Future Uniform", "Static Youth"],
  },

  /* -------- PRODUCTS -------- */
  products: [
    { id: "1", name: "Heavyweight Tee — Ash", price: "€90", image: p1, collection: "Essentials" },
    { id: "2", name: "Void Hooded Pullover", price: "€280", image: p2, collection: "Void" },
    { id: "3", name: "Field Trouser — Sand", price: "€220", image: p3, collection: "Future Uniform" },
    { id: "4", name: "Chrome Down Bomber", price: "€640", image: p4, collection: "Ø Series" },
    { id: "5", name: "Static Hoodie — Bone", price: "€240", image: look1, collection: "Static Youth" },
    { id: "6", name: "After Hours Tailored Set", price: "€820", image: look2, collection: "After Hours" },
  ],

  /* -------- PRODUCT PAGE -------- */
  product: {
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A study in weight and restraint. Cut from heavyweight loopback, washed soft, and built to keep its shape long after the season ends.",
    addToBag: "Add to bag",
    wishlist: "Save to wishlist",
    sizeGuide: "Size guide",
    accordion: [
      { t: "Composition", d: "100% Japanese loopback cotton, 480 GSM. Garment dyed in small batches. Slight irregularities are intended." },
      { t: "Fit & Sizing", d: "Boxy, slightly cropped. Take your usual size, or one down for a closer fit. Model is 184cm in size M." },
      { t: "Care", d: "Wash cold inside out. Tumble dry low. Iron on reverse. Made to soften, not fade." },
      { t: "Made in", d: "Cut and sewn in Porto, Portugal, in a family-owned atelier we visit twice a year." },
    ],
    styling: {
      eyebrow: "— Styling notes",
      headline: "Worn loose over a tailored trouser, or layered under the Chrome bomber.",
      copy1: "The piece is intentionally undersold. It rewards the hand that doesn't try too hard — clean white sneaker, washed denim, a coat that's seen a few winters.",
      copy2: "Pair with the After Hours tailored set for evening, or alone on bare skin for the kind of summer that doesn't ask permission.",
    },
    related: { eyebrow: "— Complete the look", title: "Worn with", link: { label: "See more →", to: "/shop" } },
  },

  /* -------- COLLECTIONS -------- */
  collections: {
    eyebrow: "— Six chapters",
    title: "Collections",
    items: [
      { id: "01", name: "Essentials", desc: "Foundation pieces. Quiet, considered, daily.", img: look1 },
      { id: "02", name: "Void", desc: "Monolithic black. Brutalist silhouettes for the city.", img: hero },
      { id: "03", name: "After Hours", desc: "Cinematic tailoring for the night that never ends.", img: look2 },
      { id: "04", name: "Ø Series", desc: "Limited capsule. Chrome, weight, gravity.", img: p4 },
      { id: "05", name: "Future Uniform", desc: "A new workwear for a new generation.", img: editorial1 },
      { id: "06", name: "Static Youth", desc: "Internet culture pressed into fabric.", img: editorial2 },
    ],
    exploreLabel: "Explore",
  },

  /* -------- LOOKBOOK -------- */
  lookbook: {
    hero: {
      image: hero,
      imageAlt: "Lookbook cover",
      eyebrow: "— Lookbook FW / 26 · Ø",
      title: "No Frame",
      copy: "Photographed across abandoned plazas and unfinished cities — a study of those who refuse the lens, and reshape it.",
      scroll: "Scroll ↓",
    },
    note: {
      eyebrow: "— Editor's note",
      body: "The frame is a kind of permission we never asked for. These pictures are taken anyway.",
      credits: ["Photography — Studio Ø", "Direction — The Misfit", "Location — Berlin / Osaka"],
    },
    looks: [
      { n: "Look 01", t: "Bone & Concrete", d: "Hooded pullover. Washed cargo trouser.", img: look1 },
      { n: "Look 02", t: "After Hours", d: "Tailored set. Worn open.", img: look2 },
      { n: "Look 03", t: "Corridor", d: "Layered black. Soft shoulder.", img: editorial1 },
      { n: "Look 04", t: "No Frame", d: "A portrait, not a pose.", img: editorial2 },
    ],
    quote: {
      line: "\"I don't dress for them.",
      lineMuted: " I dress to disappear into who I want to become.\"",
    },
  },

  /* -------- JOURNAL -------- */
  journal: {
    eyebrow: "— Ø Journal",
    title: "Field Notes",
    intro: "Drops, films, and the quiet thinking behind them. Updated when there is something worth saying.",
    drops: {
      eyebrow: "— Calendar",
      title: "The next chapters",
      items: [
        { code: "FW26 / Ø-01", name: "Void City", note: "Brutalist silhouettes. Nine pieces. Numbered." },
        { code: "SS26 / Ø-02", name: "After Hours", note: "Tailoring for the in-between hours." },
        { code: "CAP / Ø-03", name: "No Frame", note: "Capsule of nine portraits, nine pieces." },
        { code: "CAP / Ø-04", name: "Static Youth", note: "Internet culture pressed into fabric." },
        { code: "FW27 / Ø-05", name: "Soft Concrete", note: "Architecture worn close to the body." },
        { code: "SS27 / Ø-06", name: "Mute Color", note: "A study in palette restraint." },
      ],
    },
    campaigns: {
      eyebrow: "— Campaign concepts",
      title: "Stories in motion",
      items: [
        { img: hero, tag: "Fashion film", title: "Void City — 60s", body: "A solitary figure walks an empty plaza at blue hour. No dialogue. One outfit. One cut." },
        { img: editorial1, tag: "TikTok", title: "/ Outfit, Unframed", body: "Creators film their outfit in a single static shot — no cuts, no voiceover. The frame moves, they don't." },
        { img: look2, tag: "Instagram", title: "After Hours — Carousel 01", body: "Ten frames. Same outfit, ten cities, ten 3am hours. Captioned only with timestamps." },
        { img: editorial2, tag: "Launch", title: "No Frame — Portrait Series", body: "Nine creatives photographed in their own rooms, wearing one piece they chose themselves." },
      ],
    },
    slogans: {
      eyebrow: "— Lines we live by",
      items: [
        "Made to misfit.",
        "Quietly, on purpose.",
        "Dressed for the in-between.",
        "Less to prove.",
        "Soft edges. Hard convictions.",
        "Worn slowly.",
      ],
    },
  },

  /* -------- ABOUT -------- */
  about: {
    eyebrow: "— Manifesto",
    title: "A wardrobe for the\nIn-between.",
    manifesto: [
      "You don't have to fit in to own it.",
      "We design slowly, in small numbers, for the people who already know what they want.",
      "Restraint is one of the loudest things you can wear.",
      "More than trends, we trust the cut, the weight, the way a fabric ages on a body.",
      "We make clothes for the in-between — between rebellion and elegance, between the city and the room you go home to.",
      "built with meaning, released with intention. If it doesn't mean anything, we won't say it.",
    ],
    portrait: editorial2,
    portraitAlt: "Portrait",
    studio: [
      "The Misfit was founded in 2015 from a personal experience — feeling sidelined to eventually embracing the power of not fitting in.\
      From exclusion to self-definition - outsider to original.",
      "Each release is a study of an idea, a feeling, a kind of person. Limited runs, numbered, made by people we know, in places we've been.",
      "Fashion is identity made visible. We design for the people who refuse to translate themselves down.",
    ],
    values: [
      { k: "01", t: "Slow", d: "Limited runs. No restocks. Every piece numbered." },
      { k: "02", t: "Considered", d: "Heavy fabrics, dyed in small batches. Built to outlast trend." },
      { k: "03", t: "Honest", d: "Fair wages. Transparent sourcing. Less, made better." },
    ],
    valuesImage: editorial1,
    valuesImageAlt: "Studio",
  },

  /* -------- CONTACT -------- */
  contact: {
    eyebrow: "— Reach out",
    title: "Contact",
    blocks: [
      { label: "Studio", body: "Adeola Odeku street\nVictoria island, Lagos" },
      { label: "General", body: "studio@houseofodean.com" },
      { label: "Press", body: "press@houseofodean.com" },
    ],
    social: { label: "Follow", items: [
      { label: "Instagram ↗", href: "#" },
      { label: "TikTok ↗", href: "#" },
      { label: "Spotify ↗", href: "#" },
    ]},
    form: {
      fields: [
        { id: "name", label: "Name", type: "text" },
        { id: "email", label: "Email", type: "email" },
        { id: "subject", label: "Subject", type: "text" },
      ],
      messageLabel: "Message",
      submit: "Send transmission →",
      submitted: "Received — thank you",
    },
  },

  /* -------- FOOTER -------- */
  footer: {
    blurb: "for the quiet disruptors.",
    columns: [
      { title: "Shop", items: [
        { label: "All", to: "/shop" },
        { label: "Collections", to: "/collections" },
        { label: "Lookbook", to: "/lookbook" },
      ]},
      { title: "Studio", items: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Press", to: "#" },
      ]},
      { title: "Connect", items: [
        { label: "Instagram", to: "#" },
        { label: "TikTok", to: "#" },
        { label: "Spotify", to: "#" },
      ]},
    ],
    rights: (year: number) => `© ${year} The Misfit. All rights reserved.`,
    note: "Designed in transit. Made for no one in particular.",
  },
};

export type Site = typeof site;
