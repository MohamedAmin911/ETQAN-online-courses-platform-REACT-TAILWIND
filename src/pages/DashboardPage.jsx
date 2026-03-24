import { BrandLogo } from '../components/BrandLogo'
import { usePageSetup } from '../hooks/usePageSetup'
import { useSiteNavigation } from '../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      }\n      .glass-nav {\n        backdrop-filter: blur(24px);\n        -webkit-backdrop-filter: blur(24px);\n      }\n      .asymmetric-glow {\n        background: radial-gradient(circle at top right, rgba(133, 74, 121, 0.1), transparent 40%);\n      }\n      body {\n        font-family: 'Tajawal', 'Be Vietnam Pro', sans-serif;\n      }"

export function DashboardPage() {
  usePageSetup("DashboardPage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>{/* Sidebar Navigation */}
          <aside className="fixed right-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0px_12px_32px_rgba(28,25,45,0.06)] z-40 hidden md:flex flex-col border-l border-surface-container">
            <div className="px-8 py-10">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent font-headline"><BrandLogo className="h-16 w-auto object-contain sm:h-20" /></h1>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              <a className="flex items-center gap-4 px-4 py-3 bg-surface-container text-primary rounded-2xl transition-all duration-200" href="#">
                <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>dashboard</span>
                <span className="font-bold">لوحة التحكم</span>
              </a>
              <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-2xl transition-all duration-200 group" href="#">
                <span className="material-symbols-outlined group-hover:text-primary">school</span>
                <span>دوراتي</span>
              </a>
              <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-2xl transition-all duration-200 group" href="#">
                <span className="material-symbols-outlined group-hover:text-primary">forum</span>
                <span>الرسائل</span>
              </a>
              <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-2xl transition-all duration-200 group" href="#">
                <span className="material-symbols-outlined group-hover:text-primary">settings</span>
                <span>الإعدادات</span>
              </a>
            </nav>
            <div className="p-6">
              <div className="bg-surface-container-high rounded-2xl p-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-xs text-on-surface-variant mb-1">خطة الاشتراك</p>
                  <p className="font-bold text-primary mb-3">الباقة الاحترافية</p>
                  <button className="w-full py-2 bg-primary text-on-primary text-xs font-bold rounded-xl transition-transform active:scale-95">ترقية الآن</button>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-container/20 rounded-full blur-xl" />
              </div>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="md:mr-64 min-h-screen asymmetric-glow">
            {/* Header Section */}
            <header className="sticky top-0 z-30 glass-nav bg-white/70 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="md:hidden">
                  <span className="material-symbols-outlined text-primary text-3xl">menu</span>
                </div>
                <div className="hidden md:flex flex-col">
                  <h2 className="text-xl font-bold text-on-surface">أهلاً بك مرة أخرى، عبدالله</h2>
                  <p className="text-sm text-on-surface-variant">لقد أنجزت 85% من أهدافك الأسبوعية!</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button className="p-2 bg-surface-container rounded-full text-on-surface-variant relative hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border-2 border-white" />
                  </button>
                </div>
                <div className="flex items-center gap-3 pr-4 border-r border-surface-variant">
                  <img className="w-10 h-10 rounded-full object-cover" data-alt="User profile photo of a smiling student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTrbTetgS_PPAd0x7GCF34aah9pfYygGzIfAjFyPsw_-vp8lg0ogzEZJ3OtTu0nJ6yIHQcwqWrLmtqT3h_ycqoggHEn02jVGcBfn8BDdoLcOeGqUO8zv4KX9v3MvPC5bkSHNdxhkqvQt1DFdb9STOaspMW3l-5mawAR9_9C3h443FpJiXLuKjxeqM0gG_Q4c6mq-1SBSsJSjxTQxtWO_sa_jSlbxvBKKgE3OxNmoEOuQwEsBX8j3z3re4jPNgDbqS1m5auTbZjiaLD" />
                  <div className="hidden lg:block">
                    <p className="text-sm font-bold leading-tight">عبدالله الحربي</p>
                    <p className="text-xs text-on-surface-variant">طالب مستوى متقدم</p>
                  </div>
                </div>
              </div>
            </header>
            <div className="p-6 space-y-8 max-w-7xl mx-auto">
              {/* Summary Stats Cards */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>timer</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">ساعات التعلم</p>
                    <p className="text-xl font-bold">12.5 ساعة</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>auto_stories</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">الدورات المكتملة</p>
                    <p className="text-xl font-bold">4 دورات</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] flex items-center gap-4">
                  <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>military_tech</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">الشهادات المحققة</p>
                    <p className="text-xl font-bold">2 شهادة</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>local_fire_department</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">سلسلة الإنجاز</p>
                    <p className="text-xl font-bold">7 أيام</p>
                  </div>
                </div>
              </section>
              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Courses & Activity */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Activity Chart Mockup */}
                  <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-lg font-bold">نشاط التعلم الأسبوعي</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-on-surface-variant">الأسبوع الأخير</span>
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between h-48 gap-2">
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-3/4 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">سبت</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-2/5 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">أحد</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-primary rounded-t-lg h-full transition-colors shadow-lg shadow-primary/20" />
                        <span className="text-[10px] text-on-surface-variant font-bold text-primary">اثنين</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-3/5 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">ثلاثاء</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-1/2 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">أربعاء</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-2/3 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">خميس</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-surface-container-high rounded-t-lg h-1/3 hover:bg-primary/20 transition-colors" />
                        <span className="text-[10px] text-on-surface-variant">جمعة</span>
                      </div>
                    </div>
                  </section>
                  {/* Enrolled Courses Grid */}
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold">متابعة التعلم</h3>
                      <a className="text-sm text-primary font-bold hover:underline" href="#">عرض الكل</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Course Card 1 */}
                      <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="JavaScript coding interface icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS2DUS4FgS8mnEV7vCvBQJzFCpT6tvuRUZ1NH-n7ivQqswwcnFc25spXZGyQg-SmtBZXzOZHLk0kDrxvv4wnSDyIKDVlkFtqvYK7HqNwK2LPrEWk75YxfHacNBVkUxvwR14ehUGClfcbz9laRzWKviqkS7BxtWon9EXAvwiUPbFP5reD83FUSWgjqbO6xHHkKDL_JbamK0FskEPKFzI-PTp-dmM1MI-wi4-wzAlywbBwtqMjcFUDwS_xyf9yJ6_PParMuzWJ2mwH05" />
                          </div>
                          <div className="relative flex items-center justify-center w-12 h-12">
                            <svg className="w-full h-full -rotate-90">
                              <circle className="text-surface-container" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeWidth={3} />
                              <circle className="text-primary" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="31.4" strokeWidth={3} />
                            </svg>
                            <span className="absolute text-[10px] font-bold">75%</span>
                          </div>
                        </div>
                        <h4 className="font-bold mb-1">أساسيات جافاسكريبت المتقدمة</h4>
                        <p className="text-xs text-on-surface-variant mb-4">المحاضرة القادمة: الوعود (Promises)</p>
                        <button className="w-full py-2 bg-surface-container text-primary font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors">متابعة الدرس</button>
                      </div>
                      {/* Course Card 2 */}
                      <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="Data analysis chart icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0d-QgfZfSute0vMSAnDMcBhpybd6iIv5skxJZGVrcoAyX8iRP9vt_yzloeonjDQV4qQm9Mc-FCF13hv_jIXhl3FyX2jjmVQh5yWNdF7gQOnqMHMP_WxroH9-tCUpwLqCx6ojB203C0VwC3VylFFoP4VPHTvC3Sh0T_I9hDd8US77WUo1dNlia18q7P951LLCVY1Jvd5KPrhQKlk015gjDwghDiSk_yBnGOs485lPu-vOB0bK8ogckAuunnlpNqAjp7OntTzLwW8V8" />
                          </div>
                          <div className="relative flex items-center justify-center w-12 h-12">
                            <svg className="w-full h-full -rotate-90">
                              <circle className="text-surface-container" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeWidth={3} />
                              <circle className="text-secondary" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="87.9" strokeWidth={3} />
                            </svg>
                            <span className="absolute text-[10px] font-bold">30%</span>
                          </div>
                        </div>
                        <h4 className="font-bold mb-1">تحليل البيانات باستخدام بايثون</h4>
                        <p className="text-xs text-on-surface-variant mb-4">المحاضرة القادمة: مكتبة NumPy</p>
                        <button className="w-full py-2 bg-surface-container text-primary font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors">متابعة الدرس</button>
                      </div>
                    </div>
                  </section>
                </div>
                {/* Right Column: Recently Watched & Notifications */}
                <div className="space-y-8">
                  {/* Recently Watched */}
                  <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] border border-surface-container-high/50">
                    <h3 className="text-lg font-bold mb-6">شوهد مؤخراً</h3>
                    <div className="space-y-5">
                      <div className="flex gap-4 group cursor-pointer">
                        <div className="w-20 h-14 bg-surface-container rounded-lg overflow-hidden shrink-0 relative">
                          <img className="w-full h-full object-cover" data-alt="Abstract code visualization on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmfzxxE6IgcGFV_sFbI_-6ScjNKLkzM85emXsGSx0s_AmOewoQ6NQuTo613fW3GAtbYsi_mZYxA7xUHASNJgNWfLuwM_Hw2d-271NXMqClnTkx9CZSX6Xx3o1ioV9FcZ1_arpIH92pl1e-n8prmCSD73qb3tcUOKj-daNNJEVvlLA2tpBvEqWvdyiVDiqF87hUvuOS2WcUpbbGA86H3L9avDE6pU8mjO0yZRhopCMxV-zXTEw2yvg4X3TyW79XBCtUTJhVyURzrotV" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white text-xl">play_arrow</span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold truncate">التعامل مع الكائنات</p>
                          <p className="text-[10px] text-on-surface-variant">دورة الـ JavaScript</p>
                          <div className="mt-1 w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-2/3" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 group cursor-pointer">
                        <div className="w-20 h-14 bg-surface-container rounded-lg overflow-hidden shrink-0 relative">
                          <img className="w-full h-full object-cover" data-alt="React logo abstract design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc16pLHX_Re9xVCDq7Vd33pHPKDB-mn_WmUYF_OyRfb-PqL5XRMnyTikvrzPT1kELY1VhlyxvU-6AArRdZdU4VbI7b3T4Mfu13rX99xQhocgNBK96kOY-HYPsSsbtUhwDJRXWs9SWcieLQBTifpfjLvSb53Qn_XSRVBQHky3P7tPdlAgNsBDkYJ6vkQmHnaci7E0OirZgG354OAs5rOWP-VJolYwafTMcoYm2Vpmg1DH_0_dWVALcu80clFIb5azZWBfOAFE3ySzqT" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white text-xl">play_arrow</span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold truncate">بناء واجهة المستخدم</p>
                          <p className="text-[10px] text-on-surface-variant">دورة الـ React</p>
                          <div className="mt-1 w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-1/4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Notifications / Messages */}
                  <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold">التنبيهات</h3>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full text-[10px] font-bold">3 جديد</span>
                    </div>
                    <div className="space-y-6">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight">تم الرد على استفسارك</p>
                          <p className="text-[10px] text-on-surface-variant mt-1">المدرب أحمد علّق على مشروعك الأخير</p>
                          <p className="text-[9px] text-primary/60 mt-1">منذ 5 دقائق</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight">موعد المحاضرة المباشرة</p>
                          <p className="text-[10px] text-on-surface-variant mt-1">تبدأ جلسة المراجعة الجماعية بعد 15 دقيقة</p>
                          <p className="text-[9px] text-primary/60 mt-1">منذ ساعة</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-surface-container-high rounded-full mt-1.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight text-on-surface-variant">إضافة درس جديد</p>
                          <p className="text-[10px] text-on-surface-variant mt-1">تمت إضافة "مقدمة في الذكاء الاصطناعي"</p>
                          <p className="text-[9px] text-primary/60 mt-1">منذ يومين</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-2 border border-surface-container-high text-on-surface-variant text-xs font-bold rounded-xl hover:bg-surface-container-low transition-colors">مسح الإشعارات</button>
                  </section>
                </div>
              </div>
            </div>
            {/* Footer (Hidden Shell Logic on Focus Dashboards) */}
            <footer className="mt-12 bg-surface-container-low px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-bold text-on-surface mb-4"><BrandLogo className="h-16 w-auto object-contain sm:h-20" /></h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">منصة رائدة تهدف إلى تمكين العقول من خلال تجربة تعليمية سلسة ومبتكرة، نجمع بين المعرفة العميقة والتقنية الحديثة.</p>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface mb-4">روابط سريعة</h5>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li><a className="hover:text-primary transition-colors" href="#">مكتبة الدورات</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">خريطة التعلم</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">الدعم الفني</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface mb-4">تواصل معنا</h5>
                  <div className="flex justify-end gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">language</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">mail</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-surface-variant text-center">
                <p className="text-xs text-on-surface-variant">© 2024 The Fluid Scholar. جميع الحقوق محفوظة.</p>
              </div>
            </footer>
          </main>
          {/* Mobile Bottom Navigation */}
          <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-surface-variant flex items-center justify-around py-3 z-50">
            <a className="flex flex-col items-center gap-1 text-primary" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>dashboard</span>
              <span className="text-[10px] font-bold">لوحة التحكم</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">school</span>
              <span className="text-[10px]">دوراتي</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">forum</span>
              <span className="text-[10px]">الرسائل</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[10px]">الإعدادات</span>
            </a>
          </nav></div>
        
      </div>
    </>
  )
}
