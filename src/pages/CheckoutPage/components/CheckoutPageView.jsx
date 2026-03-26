import { PublicTopNav } from '../../../components/PublicTopNav'
import { SiteFooter } from '../../../components/SiteFooter'
import { instructors } from '../../../data/instructors'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.direction-rtl { direction: rtl; }
body { font-family: 'Tajawal', sans-serif; }`

export function CheckoutPage() {
  usePageSetup('CheckoutPage')

  const { cartCourses, cartTotal } = useAppState()
  const instructorById = Object.fromEntries(instructors.map((instructor) => [instructor.id, instructor]))
  const originalTotal = cartCourses.reduce((sum, course) => sum + (course.originalPrice || course.price), 0)
  const savings = Math.max(0, originalTotal - cartTotal)

  return (
    <>
      <style>{pageStyles}</style>
      <div>
        <PublicTopNav active="courses" maxWidth="max-w-7xl" className="border-primary/10" />

        <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
          <header className="mb-12 text-right">
            <h1 className="mb-2 mt-10 font-headline text-4xl font-extrabold tracking-tight text-on-surface">
              إتمام الدفع الآمن
            </h1>
            <p className="text-lg text-on-surface-variant">
              أنت على بعد خطوة واحدة من بدء رحلتك التعليمية المتميزة.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <section className="rounded-xl bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
                <div className="mb-8 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    shopping_bag
                  </span>
                  <h2 className="text-2xl font-bold">ملخص الطلب</h2>
                </div>

                {cartCourses.length ? (
                  <div className="space-y-6">
                    {cartCourses.map((course) => {
                      const instructor = instructorById[course.instructorId]

                      return (
                        <div
                          key={course.id}
                          className="flex flex-col items-start gap-6 border-b border-surface-container pb-6 last:border-b-0 last:pb-0 md:flex-row md:items-center"
                        >
                          <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-surface-container-low md:w-48">
                            <img
                              alt={course.title}
                              className="h-full w-full object-cover"
                              src={course.image}
                            />
                            <div className="absolute right-2 top-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                              {course.badge}
                            </div>
                          </div>

                          <div className="grow text-right">
                            <h3 className="mb-1 text-xl font-bold text-on-surface">{course.title}</h3>
                            <p className="mb-4 text-on-surface-variant">
                              المحاضر: {instructor?.name ?? 'مدرب المنصة'} • {course.duration}
                            </p>
                            <div className="flex items-center gap-2 font-bold text-primary">
                              <span className="material-symbols-outlined text-sm">verified_user</span>
                              <span className="text-sm">وصول مدى الحياة للمحتوى</span>
                            </div>
                          </div>

                          <div className="text-2xl font-black text-primary font-headline">
                            {course.price ? `${course.price} ر.س` : 'مجاناً'}
                          </div>
                        </div>
                      )
                    })}

                    <div className="border-t border-surface-container pt-8">
                      <label className="mb-3 block text-sm font-bold text-on-surface">
                        هل لديك كود خصم؟
                      </label>
                      <div className="flex max-w-md gap-3">
                        <input
                          className="grow rounded-xl border-none bg-surface-container-high px-4 py-3 text-right outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="أدخل الكود هنا"
                          type="text"
                        />
                        <button className="rounded-xl bg-surface-container-highest px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-fixed-dim">
                          تطبيق
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-surface-container-low p-8 text-center">
                    <h3 className="mb-3 text-xl font-bold text-on-surface">سلة الشراء فارغة</h3>
                    <p className="text-on-surface-variant">
                      أضف منتجاً من صفحة الدورات ليظهر هنا في صفحة الدفع.
                    </p>
                  </div>
                )}
              </section>

              <section className="rounded-xl bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
                <div className="mb-8 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    account_balance_wallet
                  </span>
                  <h2 className="text-2xl font-bold">طريقة الدفع</h2>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-primary bg-primary/5 p-4 transition-all">
                    <span className="material-symbols-outlined text-3xl text-primary">credit_card</span>
                    <span className="font-bold text-primary">بطاقة ائتمان</span>
                  </div>
                  <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-transparent bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant">payments</span>
                    <span className="font-bold text-on-surface-variant">بايبال</span>
                  </div>
                  <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-transparent bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant">ios</span>
                    <span className="font-bold text-on-surface-variant">أبل باي</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-on-surface">
                        الاسم على البطاقة
                      </label>
                      <input
                        className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-right outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="الاسم الكامل كما يظهر على البطاقة"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-on-surface">رقم البطاقة</label>
                      <div className="relative">
                        <input
                          className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-left font-headline outline-none focus:ring-2 focus:ring-primary/20"
                          dir="ltr"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                          lock
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-bold text-on-surface">
                          تاريخ الانتهاء
                        </label>
                        <input
                          className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-center font-headline outline-none focus:ring-2 focus:ring-primary/20"
                          dir="ltr"
                          placeholder="MM / YY"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-bold text-on-surface">
                          رمز التحقق (CVV)
                        </label>
                        <input
                          className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-center font-headline outline-none focus:ring-2 focus:ring-primary/20"
                          dir="ltr"
                          placeholder="123"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-surface-container-low p-4 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">security</span>
                    <p>
                      جميع معاملاتك مشفرة بالكامل وآمنة 100%. نحن لا نقوم بتخزين تفاصيل بطاقتك.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-xl border border-primary/5 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <h2 className="mb-8 text-xl font-bold">تفاصيل السعر</h2>
                <div className="mb-10 space-y-4">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>السعر الأصلي</span>
                    <span className="font-headline font-semibold">{originalTotal} ر.س</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-secondary">
                    <span>خصم المنصة</span>
                    <span className="font-headline">- {savings} ر.س</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>ضريبة القيمة المضافة</span>
                    <span className="font-headline">0 ر.س</span>
                  </div>
                  <div className="mt-4 border-t border-surface-container-low pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">المجموع الكلي</span>
                      <span className="font-headline text-3xl font-black text-primary">
                        {cartTotal} ر.س
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-primary to-primary-container py-5 text-xl font-bold text-on-primary shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!cartCourses.length}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      bolt
                    </span>
                    ادفع الآن
                  </button>
                  <p className="text-center text-xs leading-relaxed text-on-surface-variant">
                    بالضغط على "ادفع الآن"، فإنك توافق على{' '}
                    <a className="text-primary underline" href="#">
                      شروط الخدمة
                    </a>{' '}
                    و{' '}
                    <a className="text-primary underline" href="#">
                      سياسة الخصوصية
                    </a>{' '}
                    الخاصة بـ The Fluid Scholar.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-2 opacity-40 grayscale">
                  <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">
                    VISA
                  </div>
                  <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">
                    MASTERCARD
                  </div>
                  <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">
                    MADA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
