import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { usePageSetup } from '../../hooks/usePageSetup'
import { useSiteNavigation } from '../../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      }\n      .direction-rtl { direction: rtl; }\n      body { font-family: 'Tajawal', sans-serif; }"

export function CheckoutPage() {
  usePageSetup("CheckoutPage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <PublicTopNav active="courses" maxWidth="max-w-7xl" className="border-primary/10" />
          <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <header className="mb-12 text-right">
              <h1 className="text-4xl font-extrabold text-on-surface mb-2 font-headline tracking-tight">إتمام الدفع الآمن</h1>
              <p className="text-on-surface-variant text-lg">أنت على بعد خطوة واحدة من بدء رحلتك التعليمية المتميزة.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Order & Payment (8/12) */}
              <div className="lg:col-span-8 space-y-10">
                {/* Order Summary Section */}
                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>shopping_bag</span>
                    <h2 className="text-2xl font-bold">ملخص الطلب</h2>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-surface-container-low shrink-0 relative">
                      <img alt="Course Image" className="w-full h-full object-cover" data-alt="Modern professional workspace with a laptop displaying clean data visualizations and a warm ambient glow in a high-end office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Jk5Yy8uVbWNbKjptpQ0z2pjMp6aFFvyg38v5HEQhHxTJPBAAVGHzcbvb3nU8__tP4jyRE9IkKIrlMFKWtpLxByzZmgXcwLwTSyb00WKG5PAhGaGo0UQdw9teP53mV_cCkQuy7JQgT1b5pX8fA7YVg5Sp5vvCyjLj1JI5QUH9AwvfnmmnK8TDqeY8xDpFfu_ZXyDVHq5_YbR-BZ5Jtst_9w8M_jRWrrS35BTzjHLcK24s4ayQSzorRRxsiAu_vgc8j5LcUFLHobnk" />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">دورة تدريبية</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-on-surface mb-1">إتقان تصميم تجربة المستخدم المتقدمة</h3>
                      <p className="text-on-surface-variant mb-4">المحاضر: د. سارة العتيبي • 24 ساعة من المحتوى</p>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        <span className="text-sm">وصول مدى الحياة للمحتوى</span>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-primary font-headline">499 ر.س</div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-surface-container">
                    <label className="block text-sm font-bold text-on-surface mb-3">هل لديك كود خصم؟</label>
                    <div className="flex gap-3 max-w-md">
                      <input className="flex-grow bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-right outline-none" placeholder="أدخل الكود هنا" type="text" />
                      <button className="bg-surface-container-highest px-6 py-3 rounded-xl font-bold text-primary hover:bg-primary-fixed-dim transition-colors">تطبيق</button>
                    </div>
                  </div>
                </section>
                {/* Payment Method Section */}
                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>account_balance_wallet</span>
                    <h2 className="text-2xl font-bold">طريقة الدفع</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Card Option */}
                    <div className="border-2 border-primary bg-primary/5 p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                      <span className="font-bold text-primary">بطاقة ائتمان</span>
                    </div>
                    {/* PayPal Option */}
                    <div className="border-2 border-transparent bg-surface-container-low p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer hover:bg-surface-container-high transition-all">
                      <span className="material-symbols-outlined text-on-surface-variant text-3xl">payments</span>
                      <span className="font-bold text-on-surface-variant">بايبال</span>
                    </div>
                    {/* Apple Pay Option */}
                    <div className="border-2 border-transparent bg-surface-container-low p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer hover:bg-surface-container-high transition-all">
                      <span className="material-symbols-outlined text-on-surface-variant text-3xl">ios</span>
                      <span className="font-bold text-on-surface-variant">أبل باي</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">الاسم على البطاقة</label>
                        <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 text-right outline-none" placeholder="الاسم الكامل كما يظهر على البطاقة" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">رقم البطاقة</label>
                        <div className="relative">
                          <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 text-left outline-none font-headline" dir="ltr" placeholder="0000 0000 0000 0000" type="text" />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">lock</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-on-surface mb-2">تاريخ الانتهاء</label>
                          <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 text-center outline-none font-headline" dir="ltr" placeholder="MM / YY" type="text" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-on-surface mb-2">رمز التحقق (CVV)</label>
                          <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 text-center outline-none font-headline" dir="ltr" placeholder={123} type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant bg-surface-container-low p-4 rounded-xl">
                      <span className="material-symbols-outlined text-primary">security</span>
                      <p>جميع معاملاتك مشفرة بالكامل وآمنة 100%. نحن لا نقوم بتخزين تفاصيل بطاقتك.</p>
                    </div>
                  </div>
                </section>
              </div>
              {/* Right Column: Price Breakdown (4/12) */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] border border-primary/5">
                  <h2 className="text-xl font-bold mb-8">تفاصيل السعر</h2>
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span>السعر الأصلي</span>
                      <span className="font-headline font-semibold">650 ر.س</span>
                    </div>
                    <div className="flex justify-between items-center text-secondary font-bold">
                      <span>خصم المنصة (23%)</span>
                      <span className="font-headline">- 151 ر.س</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span>ضريبة القيمة المضافة</span>
                      <span className="font-headline">0 ر.س</span>
                    </div>
                    <div className="pt-4 border-t border-surface-container-low mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">المجموع الكلي</span>
                        <span className="text-3xl font-black text-primary font-headline">499 ر.س</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-xl font-bold text-xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>bolt</span>
                      ادفع الآن
                    </button>
                    <p className="text-center text-xs text-on-surface-variant leading-relaxed">
                      بالضغط على "ادفع الآن"، فإنك توافق على <a className="text-primary underline" href="#">شروط الخدمة</a> و <a className="text-primary underline" href="#">سياسة الخصوصية</a> الخاصة بـ The Fluid Scholar.
                    </p>
                  </div>
                  {/* Trust Badges */}
                  <div className="mt-10 grid grid-cols-3 gap-2 grayscale opacity-40">
                    <div className="h-8 bg-surface-container rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                    <div className="h-8 bg-surface-container rounded flex items-center justify-center text-[10px] font-bold">MASTERCARD</div>
                    <div className="h-8 bg-surface-container rounded flex items-center justify-center text-[10px] font-bold">MADA</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <SiteFooter variant="checkout" /></div>
        
      </div>
    </>
  )
}
