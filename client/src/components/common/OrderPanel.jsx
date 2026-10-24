import { useMemo, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Turnstile from 'react-turnstile';
import { User, Phone, MapPin, ChevronRight, Truck, Banknote } from 'lucide-react';
import {
  PRICE_PER_KG,
  DELIVERY_CHARGE,
  WEIGHT_OPTIONS,
  allItems,
  combos,
  products,
  getItem,
  getProduct,
  bn,
  taka,
  weightLabel,
} from '../../data/products';

/**
 * অর্ডার ফর্ম + সামারি।
 * itemId       : শুরুতে কোন আইটেম সিলেক্ট থাকবে (গুড় বা কম্বোর id)
 * showPicker   : true হলে সব গুড় ও কম্বো থেকে বেছে নেওয়ার অপশন দেখাবে
 */
export default function OrderPanel({ itemId, showPicker = false }) {
  const [selectedId, setSelectedId] = useState(itemId || combos[0].id);
  const [weight, setWeight] = useState(1);
  const [form, setForm] = useState({ name: '', mobile: '', address: '' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const item = getItem(selectedId) || allItems[0];
  const isCombo = item.kind === 'combo';

  const summary = useMemo(() => {
    if (isCombo) {
      const lines = item.items.map(i => ({
        name: getProduct(i.id).name,
        weight: i.weight,
        amount: i.weight * PRICE_PER_KG,
      }));
      return {
        title: item.name,
        lines,
        subtotal: item.price,
        discount: item.saving,
        totalKg: item.totalKg,
        label: item.name,
      };
    }
    return {
      title: item.name,
      lines: [{ name: item.name, weight, amount: weight * PRICE_PER_KG }],
      subtotal: weight * PRICE_PER_KG,
      discount: 0,
      totalKg: weight,
      label: weightLabel(weight),
    };
  }, [item, isCombo, weight]);

  const total = summary.subtotal + DELIVERY_CHARGE;

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!/^[0-9]{11}$/.test(form.mobile)) {
      toast.warning('মোবাইল নম্বর ১১ ডিজিট দিন!');
      return;
    }
    if (!turnstileToken) {
      toast.warning('নিচের "আমি রোবট নই" যাচাই সম্পন্ন করুন');
      return;
    }

    setIsSubmitting(true);
    try {
      const fp = await FingerprintJS.load();
      const { visitorId } = await fp.get();

      const orderData = {
        name: form.name,
        mobile: form.mobile,
        address: form.address,
        website: '', // honeypot
        productName: isCombo
          ? item.name
          : `${item.name} (${weightLabel(weight)})`,
        price: summary.subtotal,
        image: item.image,
        qty: summary.totalKg, // মোট কেজি
        deliveryCharge: DELIVERY_CHARGE,
        total,
        items: summary.lines.map(l => ({
          name: l.name,
          weightKg: l.weight,
          amount: l.amount,
        })),
        orderType: isCombo ? 'combo' : 'single',
        visitorId,
        turnstileToken,
        deviceInfo: {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
        },
        status: 'pending',
        orderDate: new Date().toISOString(),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/orders`,
        orderData,
      );

      if (res.data?.message === 'Order saved successfully!') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: Date.now().toString(),
            currency: 'BDT',
            value: total,
            customer_type: 'new',
            customer_name: form.name,
            customer_phone: form.mobile,
            delivery_area: form.address,
            payment_method: 'COD',
            items: [
              {
                item_id: item.id,
                item_name: item.name,
                item_brand: 'Rifi Bazar',
                item_category: 'Gur',
                item_variant: summary.label,
                price: summary.subtotal,
                quantity: 1,
              },
            ],
          },
        });

        Swal.fire({
          title: 'অর্ডার সফল হয়েছে!',
          text: 'আমরা খুব শিগগিরই আপনার সাথে যোগাযোগ করবো।',
          icon: 'success',
          confirmButtonColor: '#0e7c3a',
          confirmButtonText: 'ঠিক আছে',
        });
        setForm({ name: '', mobile: '', address: '' });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          'অর্ডার করা যায়নি, আবার চেষ্টা করুন বা কল করুন',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-ink/15 text-base focus:border-leaf focus:ring-2 focus:ring-leaf/20 outline-none';

  return (
    <section id="order" className="scroll-mt-20 py-12 md:py-16 bg-rosh">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl">অর্ডার করুন</h2>
        <p className="text-ink/70 mt-2">
          গুড় হাতে পেয়ে টাকা দিবেন। অগ্রিম কিছু দিতে হবে না।
        </p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* বাম: কী নিচ্ছেন */}
          <div className="bg-paper rounded-3xl p-5 md:p-6 border border-ink/10">
            {showPicker && (
              <fieldset className="mb-6">
                <legend className="font-semibold mb-3">কী নিতে চান?</legend>
                <div className="flex flex-wrap gap-2">
                  {allItems.map(i => (
                    <button
                      type="button"
                      key={i.id}
                      onClick={() => setSelectedId(i.id)}
                      aria-pressed={selectedId === i.id}
                      className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedId === i.id
                          ? 'bg-ink text-rosh border-ink'
                          : 'bg-white border-ink/15 hover:border-ink/40'
                      }`}
                    >
                      {i.name}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="flex items-center gap-4">
              <div
                className="w-20 h-20 rounded-2xl grid place-items-center shrink-0"
                style={{ background: item.tone }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={item.imageFilter ? { filter: item.imageFilter } : undefined}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-2xl leading-tight">{item.name}</p>
                <p className="text-sm text-ink/70">{item.tagline}</p>
              </div>
            </div>

            {!isCombo && (
              <fieldset className="mt-6">
                <legend className="font-semibold mb-3">কতটুকু নিবেন?</legend>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {WEIGHT_OPTIONS.map(w => (
                    <button
                      type="button"
                      key={w}
                      onClick={() => setWeight(w)}
                      aria-pressed={weight === w}
                      className={`py-3 rounded-xl border text-sm font-semibold transition-colors ${
                        weight === w
                          ? 'bg-leaf text-white border-leaf'
                          : 'bg-white border-ink/15 hover:border-leaf'
                      }`}
                    >
                      {weightLabel(w)}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <dl className="mt-6 space-y-2 text-sm">
              {summary.lines.map(l => (
                <div key={l.name} className="flex justify-between gap-3">
                  <dt className="text-ink/75">
                    {l.name} · {weightLabel(l.weight)}
                  </dt>
                  {!isCombo && <dd>{taka(l.amount)}</dd>}
                </div>
              ))}
              {isCombo && (
                <div className="flex justify-between gap-3 pt-2 border-t border-dashed border-ink/20 font-semibold">
                  <dt>কম্বো মূল্য</dt>
                  <dd>{taka(summary.subtotal)}</dd>
                </div>
              )}
              {summary.discount > 0 && (
                <p className="text-leaf-deep font-semibold">
                  আলাদা কিনলে {taka(item.listPrice)}, কম্বোতে {bn(item.discountPercent)}% ছাড়ে সাশ্রয় {taka(summary.discount)}
                </p>
              )}
              <div className="flex justify-between gap-3 pt-2 border-t border-dashed border-ink/20">
                <dt className="text-ink/75">ডেলিভারি চার্জ (সারাদেশ)</dt>
                <dd>{taka(DELIVERY_CHARGE)}</dd>
              </div>
              <div className="flex justify-between items-baseline gap-3 pt-3 border-t border-ink/20">
                <dt className="font-bold text-base">সর্বমোট</dt>
                <dd className="text-3xl font-bold text-brand-deep">{taka(total)}</dd>
              </div>
            </dl>
          </div>

          {/* ডান: ফর্ম */}
          <form
            onSubmit={handleSubmit}
            className="bg-paper rounded-3xl p-5 md:p-6 border border-ink/10 space-y-4"
          >
            <h3 className="font-display text-2xl">ডেলিভারির ঠিকানা</h3>

            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" aria-hidden="true" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="আপনার নাম"
                aria-label="আপনার নাম"
                autoComplete="name"
                required
                className={inputCls}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" aria-hidden="true" />
              <input
                type="tel"
                inputMode="numeric"
                name="mobile"
                value={form.mobile}
                onChange={e =>
                  /^[0-9]*$/.test(e.target.value) && update(e)
                }
                maxLength={11}
                placeholder="মোবাইল নম্বর (১১ ডিজিট)"
                aria-label="মোবাইল নম্বর"
                autoComplete="tel"
                required
                className={inputCls}
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3.5 top-4 w-5 h-5 text-ink/40" aria-hidden="true" />
              <textarea
                name="address"
                value={form.address}
                onChange={update}
                rows={3}
                placeholder="পূর্ণ ঠিকানা (বাড়ি, রাস্তা, থানা, জেলা)"
                aria-label="পূর্ণ ঠিকানা"
                autoComplete="street-address"
                required
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* হানিপট: মানুষ দেখবে না */}
            <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" />

            <div className="flex items-start gap-3 bg-leaf/10 text-leaf-deep rounded-xl p-3 text-sm">
              <Banknote className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <b>ক্যাশ অন ডেলিভারি।</b> গুড় হাতে পেয়ে, দেখে, তারপর টাকা দিবেন।
              </p>
            </div>

            <Turnstile
              sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onVerify={token => setTurnstileToken(token)}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand text-ink font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-transform"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                  অর্ডার হচ্ছে...
                </>
              ) : (
                <>
                  অর্ডার কনফার্ম করুন · {taka(total)}
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </>
              )}
            </button>

            <p className="flex items-center gap-2 text-xs text-ink/60">
              <Truck className="w-4 h-4 shrink-0" aria-hidden="true" />
              কনফার্মের পর সাধারণত ২-৩ কার্যদিবসে ডেলিভারি
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
