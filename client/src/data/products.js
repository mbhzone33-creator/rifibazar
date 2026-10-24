import patali from '../assets/gur/patali.webp';
import foilPatali from '../assets/gur/foil-patali.webp';
import lali from '../assets/gur/lali.webp';
import danadar from '../assets/gur/danadar.webp';

import card_patali_gur from '../assets/gur/card-patali-gur.webp';
import hero_patali_gur from '../assets/gur/hero-patali-gur.webp';
import card_foil_patali_gur from '../assets/gur/card-foil-patali-gur.webp';
import hero_foil_patali_gur from '../assets/gur/hero-foil-patali-gur.webp';
import card_lali_gur from '../assets/gur/card-lali-gur.webp';
import hero_lali_gur from '../assets/gur/hero-lali-gur.webp';
import card_danadar_gur from '../assets/gur/card-danadar-gur.webp';
import hero_danadar_gur from '../assets/gur/hero-danadar-gur.webp';
import card_chocolate_gur from '../assets/gur/card-chocolate-gur.webp';
import hero_chocolate_gur from '../assets/gur/hero-chocolate-gur.webp';
import card_combo_2kg from '../assets/gur/card-combo-2kg.webp';
import hero_combo_2kg from '../assets/gur/hero-combo-2kg.webp';
import card_combo_3kg from '../assets/gur/card-combo-3kg.webp';
import hero_combo_3kg from '../assets/gur/hero-combo-3kg.webp';
import card_combo_4kg from '../assets/gur/card-combo-4kg.webp';
import hero_combo_4kg from '../assets/gur/hero-combo-4kg.webp';
import pithaAd from '../assets/gur/pitha-ad.webp';

/* ============================================================
   সাইটের সব দাম, কম্বো ও যোগাযোগের তথ্য এই ফাইল থেকে বদলানো যায়।
   ============================================================ */

export const PRICE_PER_KG = 450; // সব গুড়ের প্রতি কেজির দাম
export const DELIVERY_CHARGE = 99; // সারাদেশে ডেলিভারি চার্জ
export const PHONE_DISPLAY = '০১৩০৮-৬৮৫৫৮৯';
export const PHONE_TEL = '+8801308685589';
export const SITE_URL = 'rifibazar.com';

// কোন কোন ওজনে সিঙ্গেল গুড় কেনা যাবে (কেজিতে)
export const WEIGHT_OPTIONS = [0.5, 1, 2, 3, 5];

/* ---------- সিঙ্গেল গুড় ---------- */
export const products = [
  {
    id: 'patali-gur',
    kind: 'single',
    name: 'পাতালি গুড়',
    nameEn: 'Patali Gur',
    tagline: 'চাকতির মতো জমাট, ঐতিহ্যবাহী গুড়',
    image: patali,
    tone: '#f3d9ad',
    description:
      'চাকতির আকারে জমাটবাঁধা খেজুরের পাতালি গুড়। হাতে ভেঙে সরাসরি খাওয়া যায়, আবার পায়েস-পিঠা-ভাপায়ও দারুণ মানায়।',
    highlights: [
      { title: 'জমাট ও শুকনো', text: 'চাকতির আকারে, হাতে ভেঙে নেওয়া সহজ' },
      { title: 'খাঁটি খেজুরের স্বাদ', text: 'গাঢ় মিষ্টি, সাথে খেজুরের নিজস্ব ঘ্রাণ' },
      { title: 'রান্নাঘরের সব কাজে', text: 'পায়েস, পিঠা, ভর্তা কিংবা চায়ের সাথে' },
    ],
    uses: ['ভাপা ও পুলি পিঠা', 'পায়েস ও ক্ষীর', 'গরম রুটির সাথে', 'এমনি ভেঙে মুখে'],
  },
  {
    id: 'foil-patali-gur',
    kind: 'single',
    name: 'ফয়েল পাতালি গুড়',
    nameEn: 'Foil Patali Gur',
    tagline: 'ফয়েল প্যাকে, বহন ও সংরক্ষণে সহজ',
    image: foilPatali,
    tone: '#e7c9a3',
    description:
      'পাতালি গুড় ফয়েলের প্যাকে ঢালা। প্যাকেট খুলে কেটে নেওয়া যায়, তাই উপহার দেওয়া বা সংসারে গুছিয়ে রাখা দুটোই সহজ।',
    highlights: [
      { title: 'ফয়েল প্যাকেজিং', text: 'গুড় থাকে প্যাকের ভেতরে গুছিয়ে' },
      { title: 'কেটে নেওয়া সহজ', text: 'যতটুকু লাগে ততটুকু কেটে নিন' },
      { title: 'উপহারের জন্য মানানসই', text: 'আত্মীয়-স্বজনকে পাঠাতে চমৎকার' },
    ],
    uses: ['পিঠা-পুলি', 'পায়েস', 'চায়ে মিষ্টি হিসেবে', 'উপহার'],
  },
  {
    id: 'lali-gur',
    kind: 'single',
    name: 'লালী গুড়',
    nameEn: 'Lali Gur',
    tagline: 'ঘন, তরল, গাঢ় লালচে গুড়',
    image: lali,
    tone: '#f0c48a',
    description:
      'চামচ থেকে ধীরে ঝরে পড়া ঘন লালচে তরল গুড়। রুটি, পরোটা, মুড়ি কিংবা পিঠায় ঢেলে খেলেই বুঝবেন কেন এটা শীতের প্রিয়।',
    highlights: [
      { title: 'ঘন ও তরল', text: 'চামচে তুলে সরাসরি ঢালা যায়' },
      { title: 'গাঢ় রঙ, গভীর স্বাদ', text: 'লালচে-বাদামি রঙ আর ভরপুর মিষ্টতা' },
      { title: 'নাস্তার সঙ্গী', text: 'রুটি, পরোটা, মুড়ি ও পিঠার সাথে' },
    ],
    uses: ['রুটি ও পরোটা', 'মুড়ি-মুড়কি', 'চিতই ও ভাপা পিঠা', 'দুধ-চিড়া'],
  },
  {
    id: 'danadar-gur',
    kind: 'single',
    name: 'দানাদার গুড়',
    nameEn: 'Danadar Gur',
    tagline: 'সোনালি দানাদার, নরম পেস্টের মতো',
    image: danadar,
    tone: '#f6cf7e',
    description:
      'ছোট ছোট দানায় জমাট বাঁধা সোনালি গুড়। চামচে তুললে নরম পেস্টের মতো, মুখে দিলে দানার মিষ্টি অনুভূতি।',
    highlights: [
      { title: 'দানাদার টেক্সচার', text: 'নরম পেস্ট, মুখে দানার অনুভূতি' },
      { title: 'সোনালি রঙ', text: 'হালকা কমলা-সোনালি, দেখতেই লোভনীয়' },
      { title: 'সহজে মেশে', text: 'দুধ, দই বা রুটির সাথে সহজেই মেশে' },
    ],
    uses: ['রুটি-পরোটার সাথে', 'দুধ ও দইয়ে', 'পিঠার পুর', 'এমনি চামচে'],
  },
  {
    id: 'chocolate-gur',
    kind: 'single',
    name: 'চকলেট গুড়',
    nameEn: 'Chocolate Gur',
    tagline: 'চকলেটের মতো গাঢ় রঙের গুড়',
    image: patali, // TODO: চকলেট গুড়ের আলাদা ছবি পেলে এখানে বসান
    imageFilter: 'brightness(0.62) saturate(1.15) contrast(1.08)',
    tone: '#c9a27a',
    description:
      'গাঢ় চকলেট রঙের খেজুর গুড়। রঙ যেমন গভীর, স্বাদও তেমনি ভরাট। যারা একটু আলাদা কিছু চান, তাদের জন্য।',
    highlights: [
      { title: 'গাঢ় চকলেট রঙ', text: 'দেখতে আলাদা, স্বাদেও ভরাট' },
      { title: 'ভরপুর মিষ্টতা', text: 'অল্প নিলেই মিষ্টির আমেজ' },
      { title: 'নতুন কিছু চেখে দেখুন', text: 'পরিচিত গুড়ের বাইরে ভিন্ন স্বাদ' },
    ],
    uses: ['পায়েস ও ক্ষীর', 'গরম দুধে', 'পিঠা-পুলি', 'এমনি মুখে'],
  },
];

/* ---------- কম্বো ---------- */
export const combos = [
  {
    id: 'combo-2kg',
    kind: 'combo',
    name: '২ কেজি কম্বো',
    nameEn: '2 KG Combo',
    tagline: 'চার রকমের গুড়, ৫০০ গ্রাম করে',
    image: lali,
    tone: '#f6cf7e',
    description:
      'সব রকমের স্বাদ একবারে চেখে দেখতে চাইলে এই কম্বো। পাতালি, লালী, দানাদার ও চকলেট গুড়, প্রতিটা ৫০০ গ্রাম করে।',
    items: [
      { id: 'patali-gur', weight: 0.5 },
      { id: 'lali-gur', weight: 0.5 },
      { id: 'danadar-gur', weight: 0.5 },
      { id: 'chocolate-gur', weight: 0.5 },
    ],
    price: 999,
    discountPercent: 0,
    badge: 'সব স্বাদ একসাথে',
  },
  {
    id: 'combo-3kg',
    kind: 'combo',
    name: '৩ কেজি কম্বো',
    nameEn: '3 KG Combo',
    tagline: 'পাতালি, লালী ও দানাদার, ১ কেজি করে',
    image: danadar,
    tone: '#f0c48a',
    description:
      'পরিবারের জন্য সবচেয়ে জনপ্রিয় তিন রকম। পাতালি, লালী ও দানাদার গুড় ১ কেজি করে, সাথে ১০% ছাড়।',
    items: [
      { id: 'patali-gur', weight: 1 },
      { id: 'lali-gur', weight: 1 },
      { id: 'danadar-gur', weight: 1 },
    ],
    price: null, // নিচে হিসাব করা হয়
    discountPercent: 10,
    badge: '১০% ছাড়',
  },
  {
    id: 'combo-4kg',
    kind: 'combo',
    name: '৪ কেজি কম্বো',
    nameEn: '4 KG Combo',
    tagline: 'চকলেট বাদে সব গুড়, ১ কেজি করে',
    image: foilPatali,
    tone: '#e7c9a3',
    description:
      'শীতের পুরো মৌসুমের জন্য গুছিয়ে নিন। পাতালি, ফয়েল পাতালি, লালী ও দানাদার ১ কেজি করে, সাথে ১৫% ছাড়।',
    items: [
      { id: 'patali-gur', weight: 1 },
      { id: 'foil-patali-gur', weight: 1 },
      { id: 'lali-gur', weight: 1 },
      { id: 'danadar-gur', weight: 1 },
    ],
    price: null,
    discountPercent: 15,
    badge: '১৫% ছাড়',
  },
].map(c => {
  const totalKg = c.items.reduce((s, i) => s + i.weight, 0);
  const listPrice = totalKg * PRICE_PER_KG;
  const price =
    c.price ?? Math.round(listPrice * (1 - c.discountPercent / 100));
  return { ...c, totalKg, listPrice, price, saving: Math.max(0, listPrice - price) };
});

const cardImages = {'patali-gur': card_patali_gur, 'foil-patali-gur': card_foil_patali_gur, 'lali-gur': card_lali_gur, 'danadar-gur': card_danadar_gur, 'chocolate-gur': card_chocolate_gur, 'combo-2kg': card_combo_2kg, 'combo-3kg': card_combo_3kg, 'combo-4kg': card_combo_4kg};
const heroImages = {'patali-gur': hero_patali_gur, 'foil-patali-gur': hero_foil_patali_gur, 'lali-gur': hero_lali_gur, 'danadar-gur': hero_danadar_gur, 'chocolate-gur': hero_chocolate_gur, 'combo-2kg': hero_combo_2kg, 'combo-3kg': hero_combo_3kg, 'combo-4kg': hero_combo_4kg};
const attach = i => ({ ...i, cardImage: cardImages[i.id], heroImage: heroImages[i.id] });

export { pithaAd };
const _combos = combos.map(attach);
const _products = products.map(attach);
export const allItems = [..._combos, ..._products];
export const getItem = id => allItems.find(i => i.id === id);
export const getProduct = id => allItems.find(p => p.id === id);

/* ---------- ফরম্যাট হেল্পার ---------- */
export const bn = v => String(v).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
export const taka = n => `৳${bn(Number(n).toLocaleString('en-IN'))}`;
export const weightLabel = kg =>
  kg < 1 ? `${bn(kg * 1000)} গ্রাম` : `${bn(kg)} কেজি`;

/* ---------- রিভিউ স্ক্রিনশট ---------- */
import review1 from '../assets/gur/review-1.webp';
import review2 from '../assets/gur/review-2.webp';
import review3 from '../assets/gur/review-3.webp';
import review4 from '../assets/gur/review-4.webp';
export const reviews = [
  { image: review1, alt: 'ক্রেতার মেসেজ: কয়দিন আগে গুড় নিয়েছি, আপনাদের গুড় অনেক ভালো' },
  { image: review2, alt: 'ক্রেতার হোয়াটসঅ্যাপ মেসেজ: গুড় পেয়ে আলহামদুলিল্লাহ' },
  { image: review3, alt: 'ক্রেতার মেসেজ: অনেক দিন পর এরকম খাঁটি গুড় খেতে পারলাম' },
  { image: review4, alt: 'ক্রেতার মেসেজ: গুড়টা খুব মজা পেয়েছি' },
];

export const faqs = [
  {
    q: 'অগ্রিম টাকা দিতে হবে?',
    a: 'না। ক্যাশ অন ডেলিভারি, গুড় হাতে পেয়ে তারপর টাকা দিবেন।',
  },
  {
    q: 'ডেলিভারি চার্জ কত?',
    a: `সারাদেশে ডেলিভারি চার্জ মাত্র ${bn(DELIVERY_CHARGE)} টাকা।`,
  },
  {
    q: 'ডেলিভারিতে কতদিন লাগে?',
    a: 'অর্ডার কনফার্মের পর সাধারণত ২-৩ কার্যদিবসের মধ্যে ডেলিভারি দেওয়া হয়।',
  },
  {
    q: 'গুড়ের দাম কেজিতে কত?',
    a: `সব ধরনের গুড়ের দাম প্রতি কেজি ${bn(PRICE_PER_KG)} টাকা। ৫০০ গ্রাম থেকে ৫ কেজি পর্যন্ত নিতে পারবেন।`,
  },
  {
    q: 'পণ্যে সমস্যা থাকলে কী করবো?',
    a: `ডেলিভারির সময় কোনো সমস্যা পেলে ${PHONE_DISPLAY} নম্বরে জানান, আমরা সমাধান করবো।`,
  },
];

export const gurProducts = _products;
export const gurCombos = _combos;
