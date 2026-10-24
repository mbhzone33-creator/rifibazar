import {
  gurProducts,
  gurCombos,
  pithaAd,
  PRICE_PER_KG,
  DELIVERY_CHARGE,
  PHONE_DISPLAY,
  WEIGHT_OPTIONS,
  bn,
  weightLabel,
} from './products';

/*
  প্রতিটি গুড় ও কম্বোর জন্য আলাদা ল্যান্ডিং পেজের তথ্য।
  দাম, কম্বো, ফোন নম্বর বদলাতে হলে data/products.js ফাইলে বদলান।
*/

const commonFaq = name => [
  {
    question: `${name} কি খাঁটি খেজুরের গুড়?`,
    answer:
      'হ্যাঁ, আমাদের সব গুড় খেজুরের গুড়। অর্ডার করার আগে কিছু জানার থাকলে আমাদের ফোন নম্বরে যোগাযোগ করতে পারেন।',
  },
  {
    question: 'অগ্রিম টাকা দিতে হবে?',
    answer:
      'না, আপনি ডেলিভারি পাওয়ার পর ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করতে পারবেন।',
  },
  {
    question: 'ডেলিভারি চার্জ কত এবং কতদিন লাগে?',
    answer: `সারাদেশে ডেলিভারি চার্জ ${bn(DELIVERY_CHARGE)} টাকা। সাধারণত ২-৩ কার্যদিবসের মধ্যে আপনার ঠিকানায় ডেলিভারি করা হয়।`,
  },
  {
    question: 'পণ্যে সমস্যা থাকলে কী করবো?',
    answer: `ডেলিভারির সময় কোনো সমস্যা থাকলে ${PHONE_DISPLAY} নম্বরে আমাদের জানান, আমরা সমাধান করবো।`,
  },
];

const singlePackages = WEIGHT_OPTIONS.filter(w => w !== 3).map(w => ({
  label: weightLabel(w),
  value: w,
  price: w * PRICE_PER_KG,
  popular: w === 1,
}));

// সব গুড়ের ছবি, স্লাইডারের জন্য (নিজেরটা সবার আগে)
const sliderFor = id => {
  const own = gurProducts.find(p => p.id === id);
  const others = gurProducts.filter(p => p.id !== id);
  return [own, ...others].slice(0, 4).map(p => p.cardImage);
};

const buildSingle = p => ({
  id: p.id,
  card: {
    title: p.name,
    shortDescription: p.tagline,
    image: p.cardImage,
    category: 'খেজুর গুড়',
    priceLabel: 'প্রতি কেজি',
    priceText: `${bn(PRICE_PER_KG)} টাকা`,
  },
  hero: {
    sesionTime: 'শীতের সিজনের খাঁটি খেজুর গুড়',
    heading: p.name,
    headingSub: 'সারাদেশে ক্যাশ অন ডেলিভারি',
    subHeading: p.tagline,
    description: p.description,
    images: p.heroImage,
  },
  whyChooseUs: {
    images: [p.cardImage, pithaAd],
    heading: `কেন ${p.name} কিনবেন ?`,
    subheading1: p.description,
    subheading2:
      'শীতের পিঠা, পায়েস কিংবা সকালের রুটি, খেজুর গুড়ের স্বাদ সবকিছুকেই আরও মজার করে তোলে।',
    points: p.highlights.map(h => h.title).concat(['সারাদেশে দ্রুত ডেলিভারি']),
  },
  products: sliderFor(p.id),
  faq: commonFaq(p.name),
  checkout: {
    heading: `${p.name} অর্ডার করুন`,
    formFields: ['name', 'phone', 'address', 'quantity'],
    note: 'অর্ডার করার পর আমরা দ্রুত আপনার সাথে যোগাযোগ করবো',
    packages: singlePackages,
  },
});

const buildCombo = c => ({
  id: c.id,
  card: {
    title: c.name,
    shortDescription: c.tagline,
    image: c.cardImage,
    category: 'কম্বো অফার',
    priceLabel: c.saving > 0 ? `${bn(c.discountPercent)}% ছাড়ে` : 'কম্বো মূল্য',
    priceText: `${bn(c.price.toLocaleString('en-IN'))} টাকা`,
  },
  hero: {
    sesionTime: c.badge,
    heading: c.name,
    headingSub: 'সারাদেশে ক্যাশ অন ডেলিভারি',
    subHeading: c.tagline,
    description: c.description,
    images: c.heroImage,
  },
  whyChooseUs: {
    images: [c.cardImage, pithaAd],
    heading: 'কেন এই কম্বো কিনবেন ?',
    subheading1: c.description,
    subheading2:
      'একসাথে কয়েক রকম গুড় নিলে প্রতিটার স্বাদ চেখে দেখা যায়, আর কম্বোতে দামও সাশ্রয়ী।',
    points: [
      ...c.items.map(i => `${gurProducts.find(p => p.id === i.id).name} (${weightLabel(i.weight)})`),
      ...(c.saving > 0 ? [`${bn(c.discountPercent)}% ছাড়`] : []),
    ],
  },
  products: [c.cardImage, ...gurProducts.slice(0, 3).map(p => p.cardImage)],
  faq: commonFaq(c.name),
  checkout: {
    heading: `${c.name} অর্ডার করুন`,
    formFields: ['name', 'phone', 'address', 'quantity'],
    note: 'অর্ডার করার পর আমরা দ্রুত আপনার সাথে যোগাযোগ করবো',
    packages: [
      { label: c.name, value: c.totalKg, price: c.price, popular: true },
    ],
  },
});

export const landingPages = [
  ...gurProducts.map(buildSingle),
  ...gurCombos.map(buildCombo),
];
