import { PublicTopNav } from '../components/PublicTopNav'
import { SiteFooter } from '../components/SiteFooter'
import { usePageSetup } from '../hooks/usePageSetup'
import { useSiteNavigation } from '../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(24px);\n            -webkit-backdrop-filter: blur(24px);\n        }\n        .no-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .gradient-border-bottom {\n            position: relative;\n        }\n        .gradient-border-bottom::after {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            height: 2px;\n            background: linear-gradient(to right, #4228ad, #7a2246);\n        }"

export function CourseDetailsPage() {
  usePageSetup("CourseDetailsPage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <PublicTopNav active="courses" progress="third" maxWidth="max-w-8xl" />
          <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Content Area (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* Hero Course Preview */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img alt="Course Preview" className="w-full aspect-video object-cover" data-alt="Modern workspace with digital devices and vibrant abstract lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRcXN-3EWQwq7foJqqnzzcUJhowmsXM9R1C9lLE_pQWv7jITNpEPKfLD5QIK31FPN8GF4NwDKZKRR2M4jF1PCQMx0a920Xh5VwA-fsovXmRftCNMSYQiouUkRBOrrG3257nqhkxjRgFMI6YHHkcCALsJfH4rz99e6r6mp2dRMTjDpeuQTgzlN7M8Y1VK77mNVLfArf7LeqVPV5j1sJLSaY4b71GH93rN4F8KACal9zg8tKMercojL3yDh05mWYVqec8s1CkHxCxIEA" />
                  {/* Glassmorphism Video Controls */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="w-20 h-20 rounded-full glass-panel flex items-center justify-center text-primary scale-90 hover:scale-100 transition-transform shadow-xl">
                      <span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: '"FILL" 1'}}>play_arrow</span>
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">volume_up</span>
                      <div className="h-1 w-32 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-bold text-on-surface-variant">02:45 / 12:00</span>
                      <span className="material-symbols-outlined text-primary">fullscreen</span>
                    </div>
                  </div>
                </section>
                {/* Course Info */}
                <section className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold">الأكثر مبيعاً</span>
                      <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">تطوير الذات</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight text-on-surface">
                      هندسة التفكير الإبداعي: رحلة من الجمود إلى السيولة المعرفية
                    </h1>
                  </div>
                  <div className="flex items-center gap-8 py-4 border-y border-outline-variant/20">
                    <div className="flex items-center gap-3">
                      <img alt="Instructor" className="w-12 h-12 rounded-full object-cover" data-alt="Professional portrait of a Middle Eastern male instructor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmLFiWDtvzJ6aQyjrSHw_sSU6XfVOmgKFa8k9eHWMF8FNNMlqvR6bem6tWbag4TjUiYBmBtnsxwqL3WAZu-yjs24dme6_iR-ZBPjgf4346lzIodRXRRqbmtJMlfTB2Mu2ygknZkeTqBUEm1x0_VA5NGdlASnrpSCPvlE_FT4aVZSipcckMoT6uyOu4ikVqZ-eoweizxScfQ7nxBote2tGGcTZoEa4J_d5wHjMflRgiy7CAPwjeDZpRWTKHDz4n-4LAyVcizSbqKQb" />
                      <div>
                        <p className="text-xs text-on-surface-variant">المحاضر</p>
                        <p className="font-bold text-on-surface">د. يوسف الخالدي</p>
                      </div>
                    </div>
                    <div className="h-10 w-px bg-outline-variant/20" />
                    <div>
                      <p className="text-xs text-on-surface-variant">التقييم</p>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-on-surface">4.9</span>
                        <div className="flex text-secondary">
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star_half</span>
                        </div>
                        <span className="text-xs text-on-surface-variant">(1,240 تقييم)</span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Curriculum Accordion */}
                <section className="space-y-8">
                  <h2 className="text-2xl font-bold font-headline">منهج الدورة التدريبية</h2>
                  <div className="space-y-4">
                    {/* Module 1 */}
                    <div className="rounded-2xl bg-surface-container-low overflow-hidden transition-all duration-300">
                      <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-surface-container transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">01</span>
                          <span className="font-bold text-lg">أساسيات التفكير السائل</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-on-surface-variant">4 دروس • 45 دقيقة</span>
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </button>
                      <div className="px-14 pb-5 space-y-4">
                        <div className="flex items-center justify-between text-sm py-2 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">play_circle</span>
                            <span className="text-on-surface-variant group-hover:text-primary transition-colors">مقدمة في فلسفة التعلم الحديث</span>
                          </div>
                          <span className="text-on-surface-variant/60">12:00</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">play_circle</span>
                            <span className="text-on-surface-variant group-hover:text-primary transition-colors">كسر القوالب الذهنية التقليدية</span>
                          </div>
                          <span className="text-on-surface-variant/60">15:30</span>
                        </div>
                      </div>
                    </div>
                    {/* Module 2 */}
                    <div className="rounded-2xl bg-surface-container-low overflow-hidden transition-all duration-300">
                      <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-surface-container transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">02</span>
                          <span className="font-bold text-lg">أدوات الابتكار الجذري</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-on-surface-variant">6 دروس • 1 ساعة 20 دقيقة</span>
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </section>
                {/* Reviews Section */}
                <section className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold font-headline">آراء المتعلمين</h2>
                    <button className="text-primary font-bold hover:underline underline-offset-4">عرض الكل</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Review Card 1 */}
                    <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">أ</div>
                        <div>
                          <p className="font-bold text-sm">أحمد منصور</p>
                          <div className="flex text-secondary">
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        دورة استثنائية غيرت طريقتي في النظر للمشكلات المعقدة. الأسلوب السلس للدكتور يوسف يجعل المعلومات تتدفق بوضوح.
                      </p>
                    </div>
                    {/* Review Card 2 */}
                    <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">س</div>
                        <div>
                          <p className="font-bold text-sm">سارة العتيبي</p>
                          <div className="flex text-secondary">
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                            <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 0'}}>star</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        المحتوى غني جداً والتدريبات العملية مفيدة للغاية. أنصح بها بشدة لكل من يسعى لتطوير مهارات التفكير الناقد.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              {/* Sticky Sidebar (4 cols) */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-28 space-y-6">
                  <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-[0px_12px_32px_rgba(28,25,45,0.06)] border border-outline-variant/10">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-extrabold text-on-surface">199.00$</span>
                        <span className="text-on-surface-variant line-through text-sm">450.00$</span>
                      </div>
                      <p className="text-tertiary font-bold text-sm">خصم 55% ينتهي خلال 12 ساعة</p>
                    </div>
                    <div className="space-y-4">
                      <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg hover:shadow-lg hover:scale-[0.98] transition-all duration-300">
                        اشترك الآن
                      </button>
                      <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all">
                        أضف إلى السلة
                      </button>
                    </div>
                    <div className="mt-8 space-y-4">
                      <h4 className="font-bold text-on-surface border-b border-outline-variant/10 pb-2">تتضمن هذه الدورة:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-xl">video_library</span>
                          15 ساعة من الفيديو المسجل
                        </li>
                        <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-xl">description</span>
                          24 مقالاً ومادة إضافية
                        </li>
                        <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-xl">download</span>
                          12 مصدراً قابلاً للتحميل
                        </li>
                        <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-xl">all_inclusive</span>
                          صلاحية وصول مدى الحياة
                        </li>
                        <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                          شهادة إتمام معتمدة
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Progress Card (Enrollment Insight) */}
                  <div className="p-6 rounded-2xl bg-surface-container shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-on-surface text-sm">المقاعد المتبقية بالخصم</span>
                      <span className="text-primary font-bold text-sm">12 / 100</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-primary" />
                    </div>
                    <p className="mt-4 text-xs text-on-surface-variant text-center">انضم إلى 8,420 متعلم نشط اليوم</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <SiteFooter variant="course" /></div>
        
      </div>
    </>
  )
}
