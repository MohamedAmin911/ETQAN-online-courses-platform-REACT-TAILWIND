import { PublicTopNav } from '../components/PublicTopNav'
import { SiteFooter } from '../components/SiteFooter'
import { usePageSetup } from '../hooks/usePageSetup'
import { useSiteNavigation } from '../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n            text-transform: none;\n            letter-spacing: normal;\n            word-wrap: normal;\n            white-space: nowrap;\n            direction: ltr;\n        }\n        body {\n            font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;\n            scroll-behavior: smooth;\n        }\n        .tonal-layering-no-borders {\n            border: none !important;\n        }\n        .glass-nav {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(24px);\n            -webkit-backdrop-filter: blur(24px);\n        }\n        .no-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .no-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }"

export function HomePage() {
  usePageSetup("HomePage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <PublicTopNav active="courses" />
          <main className="pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 lg:px-12">
              {/* Animated Background Glows */}
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] -z-10" />
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 text-right">
                  <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.2] mb-6">
                    ابدأ رحلتك <span className="text-primary italic">التعليمية</span> اليوم
                  </h1>
                  <p className="text-lg lg:text-xl text-on-surface-variant mb-10 max-w-xl ml-auto leading-relaxed">
                    انضم إلى مجتمع "The Fluid Scholar" واكتشف آفاقاً جديدة في البرمجة، التصميم، والذكاء الاصطناعي مع نخبة من الخبراء في الوطن العربي.
                  </p>
                  <div className="flex flex-row-reverse gap-4 justify-start">
                    <button className="px-8 py-4 bg-primary text-on-primary rounded-xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                      ابدأ التعلم الآن
                    </button>
                    <button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl text-lg font-bold hover:bg-surface-container-highest transition-colors duration-300">
                      تصفح الدورات
                    </button>
                  </div>
                </div>
                {/* Hero Illustration / Image */}
                <div className="order-1 lg:order-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                  <img alt="Hero Learning Illustration" className="relative rounded-3xl shadow-2xl z-10 w-full object-cover aspect-[4/3] transform hover:-translate-y-2 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAl_D6Hlf0zHn0UW0JqGWCu_j4pVaEKPRQa_GMMnHCq26xZ5jDyH6EtrgMg08SGjrx56E-iWPg3BvyOhNLpWHFcg9g87QmCeQFzkR-_U-AdoSYUNhT0NWeKMXjqtCuL8r-_4TzXmY3eKklHfNfIRQYsLlIP9W5RRhj_l8pIkDcZIx8DDcimP35dz9oHgFNsGivAIiizSClnjuU9IAJ3OwS6P5aMlnhM_Ml9zzY9DKVevonzocFOu3aob1-U5WydiRWzuS45y7oMNpz" />
                  {/* Glass Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-on-surface-variant font-medium">دورات معتمدة</p>
                        <p className="text-lg font-bold text-on-surface">+500 دورة جديدة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Section (Consolidated from previous and new stats) */}
            <section className="py-16 bg-surface-container-low">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="p-8">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">150K+</h3>
                    <p className="text-on-surface-variant font-medium">طالب متميز</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">1,200+</h3>
                    <p className="text-on-surface-variant font-medium">دورة تدريبية</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">450+</h3>
                    <p className="text-on-surface-variant font-medium">مدرب خبير</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">98%</h3>
                    <p className="text-on-surface-variant font-medium">نسبة الرضا</p>
                  </div>
                </div>
              </div>
            </section>
            {/* New Explore Fields Section (HeroStyle Replacement) */}
            <section className="py-24 px-6 overflow-hidden relative">
              {/* Decorative Background Elements */}
              <div className="absolute top-20 right-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-secondary/5 rounded-3xl rotate-12 blur-3xl -z-10" />
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Text Content (Right) */}
                  <div className="order-1 lg:order-2 text-right">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 leading-tight font-headline">
                      استكشف <span className="text-primary">مجالات المعرفة</span>
                    </h2>
                    <p className="text-xl text-on-surface-variant mb-10 max-w-xl ml-auto leading-relaxed">
                      منصة Fluid Scholar توفر لك مجموعة واسعة من الدورات والمواد التعليمية من مدربين مهرة من جميع أنحاء العالم.
                    </p>
                    {/* Actions */}
                    <div className="flex flex-row-reverse gap-4 justify-start mb-12">
                      <button className="px-8 py-4 bg-primary text-on-primary rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                        انضم إلى الفصول
                      </button>
                      <button className="px-8 py-4 bg-transparent border-2 border-primary/20 text-primary rounded-xl text-lg font-bold hover:bg-primary/5 transition-all">
                        اكتشف المزيد
                      </button>
                    </div>
                    {/* Mini Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-row-reverse items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined" data-icon="group">group</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-on-surface">15.2K</div>
                          <div className="text-sm text-on-surface-variant">طالب نشط</div>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined" data-icon="work">work</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-on-surface">4.5K</div>
                          <div className="text-sm text-on-surface-variant">مدرب</div>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined" data-icon="link">link</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-on-surface">100+</div>
                          <div className="text-sm text-on-surface-variant">موارد تعليمية</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Image Collage (Left) */}
                  <div className="order-2 lg:order-1 relative h-[500px] md:h-[600px] flex items-center justify-center">
                    {/* Top Center Image */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 z-20 transition-transform duration-500 hover:z-40 hover:scale-105">
                      <img alt="Students collaborating" className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA66R-ypuxRishQ63QQAp0QJzlTCNTqm87-KaDt_2ra64kWVcMo8d18jCvtpyfXPjA4_onm-QfoB-qC-MerAqNCUfbemYihBBybzTvevfGbEXh9B2mBqWyTRXj2muRNNdmuOHMsw8ZhwbSThGIUyskn1rFzfSgbtsHlkplZlbby7Zr0kIT5L8pKrQ9Y1JfsT4LKczasaL_pgzH5gfOCsmLluEP_U-h_EYPpoIkKnDl7sMOYiD1RJyWYMcxUkHxN7gi0Xe52JRUA5uvN" />
                    </div>
                    {/* Right Middle Image */}
                    <div className="absolute top-1/4 right-0 w-1/2 h-1/2 z-30 transition-transform duration-500 hover:z-40 hover:scale-105">
                      <img alt="Modern learning" className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqewBguYHmuTOONl0xr3LnHQcxsoN1FqihioNZ-m3hCggSz_9ylGO2QXZ9L7YObqehr7jvbc_9cuqDgkuDC6zSoLXiX-2SCYdpcBhUQx84ZjD2KzSdRQesR4XPd9NHBBj6ruVVhnYRzrnqL5EoohmmhQJanXv_umabTrpYtzVkveIcImWe424eiboPSBSCKfqx1cSUADh9bhGot0R2FjNt4wq-qum8wY_n1CRk4CxQ2y8Nt07788wyiWna-hz1VVlV1lfM9YXNtIx-" />
                    </div>
                    {/* Bottom Left Image */}
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-10 transition-transform duration-500 hover:z-40 hover:scale-105">
                      <img alt="Digital classroom" className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vs5jfNzqLTYQMg5uxDkZxxNsguy2Bue4DkuJUcXmja77uB17FstzzRX3a82nW-tED02lDPBqhu1jT6pfm8sCq4edzq3AwUe8QuLOe4cgbyp3vsmiwziXZEtVWvbIqfMXOjk4pXoJ_Di9KOZTlv97_RVFbT1YtJ146HhskXsNyJQhNIPniaVM2GWlPbvmR9pna8eRPi9PPQ5fHYaAOljy5WdMDnN7cV4MV5pv0WbzhiZgrHp99crjU2OIi95AdMlQWZV0wJR2wvSV" />
                    </div>
                    {/* Glassmorphic Shapes */}
                    <div className="absolute top-1/2 left-0 w-16 h-16 bg-gradient-to-tr from-primary to-secondary opacity-30 blur-xl rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary opacity-20 blur-2xl rounded-lg rotate-45" />
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Courses Section */}
            <section className="py-24 bg-surface-container-low">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-row-reverse justify-between items-end mb-16">
                  <div className="text-right">
                    <h2 className="text-4xl font-bold text-on-surface mb-4">الدورات المميزة</h2>
                    <p className="text-on-surface-variant">اخترنا لك الأفضل لبدء مسارك المهني</p>
                  </div>
                  <a className="text-primary font-bold flex flex-row-reverse items-center gap-2 group" href="#">
                    مشاهدة الكل
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform" data-icon="chevron_left">chevron_left</span>
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Course Card 1 */}
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img alt="JavaScript Mastery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxY2Ny4gYaKBB8Iv7hPE_8hOLs2_hb1vFmIkeIKXZrf5I2pQoKaSHAtlVvnVGxuXQSfCr5zO1np10IqS3rnvd45IfDwQX4ixxX1qPYLRBATeBBnKyafTPQy1vgM94xQ2MFGjgrvJcFEXtqW8T6R_Mrfl0gSherb-3Akr3zC2apEaPAfSGCrwPHIwp66S4tpYasDdYo4Hj6fOehyJ4ZGYNLfDOOL3fyK9V_U-JadfRjVMhGUTDIQIcU_Con4mOnM6gjucI57yQFH9Iv" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        $89.00
                      </div>
                    </div>
                    <div className="p-8 text-right">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block">البرمجة</span>
                      <h4 className="text-xl font-bold text-on-surface mb-4">احتراف لغة JavaScript من الصفر</h4>
                      <div className="flex flex-row-reverse items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white shadow-sm" />
                        <span className="text-sm text-on-surface-variant">م. أحمد كمال</span>
                      </div>
                      <div className="flex flex-row-reverse justify-between items-center pt-6 border-t border-surface-container">
                        <div className="flex flex-row-reverse items-center gap-1 text-orange-400">
                          <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="text-sm font-bold">4.9</span>
                          <span className="text-xs text-on-surface-variant">(2.4k)</span>
                        </div>
                        <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Course Card 2 */}
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img alt="UI/UX Masterclass" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO4Lg7A9WECsqGACM7ieC46Ffg_TW1r2OHfvPe4q01IHbB0CgD4mmwYcvwUIE7Kl7orVbOFRj3DAJMNxDl1QzpjUfeGH5Gv-NX0gzxfNb744Sk4VnH14uAUdIrp86a7mKk5wj4W4Mej_c7aZXKABjEJyyft6LYo4iud0Vfludyj3OxNCs53-0i83PSp4KBB2boqaXopIUFIQmi-g2a1FeYJdTW-BN_SrzxHZ4QwYst_TnqfLABuydDrUmW3fNa6IBwPde5df9BhpIG" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        $120.00
                      </div>
                    </div>
                    <div className="p-8 text-right">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block">التصميم</span>
                      <h4 className="text-xl font-bold text-on-surface mb-4">تصميم واجهات المستخدم الحديثة</h4>
                      <div className="flex flex-row-reverse items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white shadow-sm" />
                        <span className="text-sm text-on-surface-variant">م. ليلى حسن</span>
                      </div>
                      <div className="flex flex-row-reverse justify-between items-center pt-6 border-t border-surface-container">
                        <div className="flex flex-row-reverse items-center gap-1 text-orange-400">
                          <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="text-sm font-bold">4.8</span>
                          <span className="text-xs text-on-surface-variant">(1.8k)</span>
                        </div>
                        <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Course Card 3 */}
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img alt="Data Science" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhsgymHXsK6fuu4hEXgL5k5AdooOOHr4EY98-e74i8aEWgbLo7bNKLYToYOP0gRSAvB_fqBW7Wx012QRzneKCxfDnKd2JCFqJFPxZyrxOH-PjesiIfukNFspSojx0iA6c5_rinXKSM73FHgjWlDnsjhx-WCI1wwwcCNcdD_h7bcggDOTuSAbZi9RtU1pCVmbgP5zKWP8gcnQFkykGz2gckv0n5IHo2kkzmiEbSoQOWf-FlRwQEx7PtGcPccgE8wZd24npoJhq4g5PE" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        $95.00
                      </div>
                    </div>
                    <div className="p-8 text-right">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block">البيانات</span>
                      <h4 className="text-xl font-bold text-on-surface mb-4">علم البيانات وتعلم الآلة للمبتدئين</h4>
                      <div className="flex flex-row-reverse items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white shadow-sm" />
                        <span className="text-sm text-on-surface-variant">د. سامي يوسف</span>
                      </div>
                      <div className="flex flex-row-reverse justify-between items-center pt-6 border-t border-surface-container">
                        <div className="flex flex-row-reverse items-center gap-1 text-orange-400">
                          <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="text-sm font-bold">5.0</span>
                          <span className="text-xs text-on-surface-variant">(950)</span>
                        </div>
                        <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Why Choose Us Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-on-surface mb-4">لماذا تختار منصتنا؟</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">نحن نؤمن بأن التعليم يجب أن يكون تجربة ملهمة وسهلة الوصول للجميع</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-right p-8 rounded-2xl bg-surface-container group hover:bg-primary transition-colors duration-500">
                  <div className="w-16 h-16 bg-primary text-on-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl" data-icon="verified">verified</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white">محتوى عالي الجودة</h3>
                  <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed">دورات مصممة بعناية لتلبية متطلبات سوق العمل العالمي بأحدث التقنيات.</p>
                </div>
                <div className="text-right p-8 rounded-2xl bg-surface-container group hover:bg-secondary transition-colors duration-500">
                  <div className="w-16 h-16 bg-secondary text-on-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-3xl" data-icon="forum">forum</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white">دعم فني وتوجيهي</h3>
                  <p className="text-on-surface-variant group-hover:text-secondary-fixed leading-relaxed">تواصل مباشر مع المدربين ومجتمع من الطلاب لتبادل الخبرات وحل المشكلات.</p>
                </div>
                <div className="text-right p-8 rounded-2xl bg-surface-container group hover:bg-tertiary transition-colors duration-500">
                  <div className="w-16 h-16 bg-tertiary text-on-tertiary rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-tertiary transition-colors">
                    <span className="material-symbols-outlined text-3xl" data-icon="workspace_premium">workspace_premium</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white">شهادات معتمدة</h3>
                  <p className="text-on-surface-variant group-hover:text-tertiary-fixed-dim leading-relaxed">احصل على شهادات إتمام موثقة تساعدك في بناء ملفك المهني وجذب أرباب العمل.</p>
                </div>
              </div>
            </section>
            {/* Testimonials Section */}
            <section className="py-24 bg-surface-container-high/30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-right mb-16">
                  <h2 className="text-4xl font-bold text-on-surface mb-2">قصص نجاح طلابنا</h2>
                  <p className="text-on-surface-variant">آراء حقيقية من أشخاص غيروا مسارهم المهني معنا</p>
                </div>
                <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar scroll-smooth snap-x">
                  {/* Testimonial 1 */}
                  <div className="min-w-[350px] md:min-w-[450px] snap-center bg-white p-10 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="flex flex-row-reverse gap-4 items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-violet-100 overflow-hidden">
                        <img alt="Student Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1p2puuzoie_bQsyGW3fLStlwPLmZR8aafe0FKFNMAHyoUkuxjL7UJblSd2XAVdC2x2F25-xLbafuoMdtphM1cO4wQ8o1TG3N2BXhykbuCK6MIPDEYmiMBW2rlHZGUyfpJHJl5PIDbpjrxblmytCeg4ollr7K3T6Zwy47QSmBMiEh60JaeA5BIm1rP4zSVBaQoljXOgsCSeTBfLm5eUZf6t_-JB6u1f3KHGM5mOgIb2eIFbvmQj7k-N_9reNr5I19beJZx00VI1pcf" />
                      </div>
                      <div className="text-right">
                        <h4 className="font-bold text-on-surface">عمر خالد</h4>
                        <p className="text-sm text-on-surface-variant">مطور واجهات، شركة XYZ</p>
                      </div>
                    </div>
                    <p className="text-on-surface text-lg italic leading-relaxed text-right mb-6">
                      "بفضل دورات البرمجة هنا، تمكنت من تعلم React و Tailwind في وقت قياسي والحصول على وظيفة أحلامي. الشرح مبسط وعملي جداً."
                    </p>
                    <div className="flex flex-row-reverse gap-1 text-orange-400">
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    </div>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="min-w-[350px] md:min-w-[450px] snap-center bg-white p-10 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="flex flex-row-reverse gap-4 items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-violet-100 overflow-hidden">
                        <img alt="Student Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZctB7hz2yyMGb-P6OkZyXbfMZpORnESIWGvDmHTZH-VCDGEGvtxd-TkHbOxAJ2Kd64RfDjXrc-nPfzCpaGju9obKMWgJaQaS50ucf7vTxT0LCP4WMAV6bOZuw_oUC6QeGQ2NPT6WmxHHQFnT00wSddYHurrYdLLPFrsK9VuGNWU8bO_JEolzVU5Fn8N22D40zloFmiUkiwG55wuZN5cjztojxWLmIrrSApumAXzMX42ebXFeny_N-5LU-9DOHkkeNd92JZ4G5kPZ" />
                      </div>
                      <div className="text-right">
                        <h4 className="font-bold text-on-surface">سارة محمود</h4>
                        <p className="text-sm text-on-surface-variant">مصممة UI/UX مستقلة</p>
                      </div>
                    </div>
                    <p className="text-on-surface text-lg italic leading-relaxed text-right mb-6">
                      "أعجبتني جودة محتوى دورات التصميم. المدربون يركزون على الجوانب النظرية والعملية معاً، مما ساعدني في بناء معرض أعمال قوي."
                    </p>
                    <div className="flex flex-row-reverse gap-1 text-orange-400">
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                      <span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA Section */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-tr from-primary via-primary-container to-tertiary p-12 lg:p-24 text-center relative overflow-hidden">
                {/* Abstract Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                    هل أنت مستعد لتغيير مستقبلك؟
                  </h2>
                  <p className="text-lg lg:text-xl text-primary-fixed mb-12 leading-relaxed">
                    انضم إلى آلاف الطلاب الذين بدؤوا رحلتهم التعليمية وحققوا أهدافهم المهنية معنا. لا تتردد في اتخاذ الخطوة الأولى اليوم.
                  </p>
                  <div className="flex flex-col sm:flex-row-reverse justify-center gap-6">
                    <button className="px-10 py-5 bg-white text-primary rounded-xl text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
                      سجل الآن مجاناً
                    </button>
                    <button className="px-10 py-5 bg-white/10 text-white border-2 border-white/20 rounded-xl text-xl font-bold hover:bg-white/20 transition-colors">
                      تحدث مع مستشار تعليمي
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <SiteFooter variant="marketing" /></div>
        
      </div>
    </>
  )
}
