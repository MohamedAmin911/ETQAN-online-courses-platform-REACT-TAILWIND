import { PublicTopNav } from '../components/PublicTopNav'
import { SiteFooter } from '../components/SiteFooter'
import { usePageSetup } from '../hooks/usePageSetup'
import { useSiteNavigation } from '../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n            text-transform: none;\n            letter-spacing: normal;\n            word-wrap: normal;\n            white-space: nowrap;\n            direction: ltr;\n        }\n        body {\n            font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;\n            background-color: #fdf8ff;\n        }\n        .glass-nav {\n            background-color: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n        }\n        .editorial-shadow {\n            box-shadow: 0px 12px 32px rgba(28, 25, 45, 0.06);\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }"

export function AllCoursesPage() {
  usePageSetup("AllCoursesPage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <PublicTopNav active="courses" />
          <main className="pt-28 pb-20 px-6 max-w-8xl mx-auto min-h-screen">
            {/* Header & Search */}
            <header className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">استكشف مسارات المعرفة</h1>
                  <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">اكتشف دورات تعليمية مصممة بعناية لتناسب طموحاتك، من التصميم الإبداعي إلى البرمجة المتقدمة.</p>
                </div>
                <div className="w-full md:w-[400px]">
                  <div className="relative group">
                    <input className="w-full h-14 bg-surface-container-high border-none rounded-2xl pr-14 pl-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="ماذا تريد أن تتعلم اليوم؟" type="text" />
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary" data-icon="search">search</span>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sleek Sidebar Filters */}
              <aside className="w-full lg:w-72 space-y-8">
                <div className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-bold text-xl">تصفية النتائج</h2>
                    <span className="material-symbols-outlined text-outline" data-icon="filter_list">filter_list</span>
                  </div>
                  {/* Categories */}
                  <div className="space-y-4 mb-8">
                    <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">التصنيفات</h3>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-medium">الكل</button>
                      <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface-variant text-sm font-medium transition-colors">برمجة</button>
                      <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface-variant text-sm font-medium transition-colors">تصميم</button>
                      <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface-variant text-sm font-medium transition-colors">أعمال</button>
                    </div>
                  </div>
                  {/* Price Range */}
                  <div className="space-y-4 mb-8">
                    <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">السعر</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0 group-data-[active=true]:opacity-100" />
                        </div>
                        <span className="text-on-surface">دورات مجانية</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-xs" style={{fontSize: 16}}>check</span>
                        </div>
                        <span className="text-on-surface font-semibold">دورات مدفوعة</span>
                      </label>
                    </div>
                  </div>
                  {/* Rating */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">التقييم</h3>
                    <div className="space-y-3">
                      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-secondary" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                        <span>4.5 فأعلى</span>
                      </button>
                      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-secondary" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                        <span>4.0 فأعلى</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Featured Teacher Promo */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tertiary to-tertiary-container p-8 text-on-tertiary">
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">كن معلماً</p>
                    <h4 className="text-2xl font-bold mb-4 leading-tight">شارك معرفتك مع العالم</h4>
                    <button className="bg-white text-tertiary px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">انضم إلينا</button>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                </div>
              </aside>
              {/* Course Grid Section */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Course Card 1 */}
                  <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img alt="UI Design Course" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern abstract user interface design with purple elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKF2_I1sARIUbeP9Or36d-niWc-5cHywC6iXb3lVeKUWGFSDedn7BRnDjOgJv5dOkwoG7PUNPI4pSgL-97eIunLNZs8b19wFySCmw4IhXb55NIcGYMR9X-2XyK-b4mK-FjA9B2pD8D0uDDpFT89TYjnvPwK8pYXNzOZd_rbSwRUtP4-Qgk-K9WPYNa_NhB0zrOje7L4erTQ-VBZTZAPvKmP_8ubrRPl7dWddwiWR8h4MjluOZASl8UvHHjNIYQg4xvOfO80eJo8c1I" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        $89.00
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-on-surface hover:text-error transition-colors">
                        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-1 bg-surface-container-high rounded-lg text-xs font-bold text-primary-container">تصميم</span>
                        <div className="flex items-center gap-1 text-secondary text-sm font-bold mr-auto">
                          <span className="material-symbols-outlined text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span>4.9</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">الأساسيات المتقدمة في تجربة المستخدم</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                          <img alt="Instructor" data-alt="Portrait of a smiling professional male instructor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEulFNFdJR-Q4AjZkCrCURm-OlV2NmBrAhYWOnpZroaRMlsKibbvAIGRdgqBHPaHIO1K_I4gwaxNtTZSJjU_VDq3PbTen5RLCO2GUTDOWhnkY3ZTIMxCpyGUiTHkBq4Boo32wnA0msdkctLZlkgHIS3revp-MoNmQTe5LpxuiGRiIAhS8Kuw28X6fr4dDRu0TnxifDsuS8XoLHNz5bzl9UZtDb2UMThFjGE2CKkGhSWTpDecf0d6KBEsUkgKru9rOMikPVXBJiq5aJ" />
                        </div>
                        <span className="text-sm text-on-surface-variant font-medium">أحمد كمال</span>
                      </div>
                    </div>
                  </div>
                  {/* Course Card 2 */}
                  <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img alt="Web Dev Course" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Sleek laptop showing programming code on screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfWqH7POcvWyj_CYzoCFtR_cYlBVUUmf3UASudeNqsb6HobB9-6YGOIRJSEW6-zRDXvD66VILAscWkB09e5-xeYdqObk04omf9JOLLK7XysKJfkiAc90IodwEWtWVr2yAwSW95msFzLVyUtrAt5-2R0XCs--07LdcWuZs7Ki4DEMYGp7Vhqu02F7FtP8B0AhQb5nO02mwNDwPgWB0MWy8lRDPPJ2PXXgcfW6hY6P4BX8lx8PYeGWW7qYqGXeuBdZwZDa2ICGgKJTk" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        مجاناً
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-on-surface hover:text-error transition-colors">
                        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-1 bg-surface-container-high rounded-lg text-xs font-bold text-primary-container">تطوير</span>
                        <div className="flex items-center gap-1 text-secondary text-sm font-bold mr-auto">
                          <span className="material-symbols-outlined text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span>4.7</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">بناء تطبيقات الويب الحديثة بـ React</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                          <img alt="Instructor" data-alt="Portrait of a professional female developer smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmRkEsrPa-w45C8baCiU0et6oENBsRnZCyoGAq9OmlJD-N3Hy1UZ_9rFJUBKojFeLvokoIt3HyFGea-g1yJSoQIV8cGhSCV-RggsOmsT4nbRHNyCYjhLxhxL0QctxCD44LmDblVcGBYzSN-mTe3yKCDp7VjZMYlwR5_jvc7EDkGs5N1vNdemmC5gsr8d7iPaA74lc93FONkPodN5xt-wy0hNOU6Qx-LkKOnNh3xpZCj0jEizgHEesLyS11fiZMTQcIfpCMeMr8hG69" />
                        </div>
                        <span className="text-sm text-on-surface-variant font-medium">سارة محمود</span>
                      </div>
                    </div>
                  </div>
                  {/* Course Card 3 */}
                  <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img alt="Business Strategy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Professional meeting room with digital data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9tfrlRByn3GzW6pXkvF4xVEpdMFQqoi_JYwrGy_3OgcQK79qS_JNGzJMkUkG6b5kIaFT4MO3685M-SX0tGIC8-c-ViZF70p8byBq3niDfByys5QTN25ueB26ci_OWA614x4zZ6Zo1JwgXIUmLOLkT0osa-6wZkZQ2ai2d7nZsC3Gx038Ado4bG_yTRi4uDZAuR-ReYn5woJNSxCmLneLZXfBN_6OFhWu8TpYZappfSN4UIRUcaD2HqW47LoIe3nA8aTP2g_yMdyow" />
                      <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-sm font-bold text-primary">
                        $120.00
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-on-surface hover:text-error transition-colors">
                        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-1 bg-surface-container-high rounded-lg text-xs font-bold text-primary-container">أعمال</span>
                        <div className="flex items-center gap-1 text-secondary text-sm font-bold mr-auto">
                          <span className="material-symbols-outlined text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                          <span>5.0</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">استراتيجيات التسويق الرقمي 2024</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                          <img alt="Instructor" data-alt="Portrait of a confident senior business strategist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1NXDqVtaD0jTFSAeBY3CpAtsDozKXkLXEvr_1hmLnxw3Io-QDx7tLLavlHlk711aS-YUfqNh_XK-4lG4jaAxgzk4Seq3ghuaoN0AmOJcKYOMrvrsW0RdxWymYOShwH5dA9Ad5Ik06P_3xkQmt9Cx0_L9LELiOdWnJPxBWeoM4pJg1WobTqk_SGCm78Ud_f0oR-Ja7413ZCBYNLI8O5vy1FROrVqLsStLHIAd6fqlfyOxDdTI5XyaebE15BeHlE2bMkcAf7KWT85GP" />
                        </div>
                        <span className="text-sm text-on-surface-variant font-medium">د. فهد العتيبي</span>
                      </div>
                    </div>
                  </div>
                  {/* Loading Skeleton State */}
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow p-0">
                    <div className="aspect-video bg-surface-container-highest animate-pulse" />
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between">
                        <div className="w-20 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                        <div className="w-12 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                      <div className="w-full h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high animate-pulse" />
                        <div className="w-32 h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                    </div>
                  </div>
                  {/* Repeat Skeleton for density */}
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow p-0 hidden xl:block">
                    <div className="aspect-video bg-surface-container-highest animate-pulse" />
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between">
                        <div className="w-20 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                        <div className="w-12 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                      <div className="w-full h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high animate-pulse" />
                        <div className="w-32 h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow p-0 hidden xl:block">
                    <div className="aspect-video bg-surface-container-highest animate-pulse" />
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between">
                        <div className="w-20 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                        <div className="w-12 h-6 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                      <div className="w-full h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high animate-pulse" />
                        <div className="w-32 h-8 bg-surface-container-high rounded-lg animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="mt-16 flex items-center justify-center gap-2">
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">1</button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface font-bold hover:bg-surface-variant transition-all">2</button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface font-bold hover:bg-surface-variant transition-all">3</button>
                  <div className="w-8 flex justify-center text-outline">...</div>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface font-bold hover:bg-surface-variant transition-all">12</button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <SiteFooter variant="simple" /></div>
        
      </div>
    </>
  )
}
