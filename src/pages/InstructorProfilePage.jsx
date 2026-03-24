import { PublicTopNav } from '../components/PublicTopNav'
import { SiteFooter } from '../components/SiteFooter'
import { usePageSetup } from '../hooks/usePageSetup'
import { useSiteNavigation } from '../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-nav {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(24px);\n        }\n        .editorial-shadow {\n            box-shadow: 0px 12px 32px rgba(28, 25, 45, 0.06);\n        }\n        .direction-rtl { direction: rtl; }\n        .no-scrollbar::-webkit-scrollbar { display: none; }"

export function InstructorProfilePage() {
  usePageSetup("InstructorProfilePage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <PublicTopNav active="instructors" searchPlaceholder="???? ?? ????..." />
          <main className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-low min-h-[480px] flex items-center">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="relative z-10 grid md:grid-cols-12 gap-12 p-8 md:p-16 items-center w-full">
                  <div className="md:col-span-4 flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500" />
                      <img className="relative w-64 h-80 object-cover rounded-[2.5rem] editorial-shadow grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="professional portrait of a middle-aged academic man with a neat beard, wearing a stylish navy blazer, set against a soft blurred library background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEOwCag7oo-ZgXHmA1qamhsrMcV3A8UkDgHv35gdpmCDgY3ljdGIVXMA6gzlAmwwBC7Pp0nAZyv17wfIuy9Vzwco2XiVwrhjIvrJuJh9E1a51cVe75dRE2VC8wACRF6tCeWhMxcBZ6KpIvqy8VgrDHAuLs0rX8myEHYqf8A1Aipp5G0D4w3fUSzkltKx2IS6WvrM3gfj1Xpqbh9voet--YcZRoCxhiFptCHVC49FIZX5FeCSM4y7tJT_FQDGQF60mXmT4eB9V_zo62" />
                    </div>
                    <div className="mt-8 flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">12k+</div>
                        <div className="text-xs text-outline font-medium">طالب</div>
                      </div>
                      <div className="w-px h-8 bg-outline-variant/30 mt-2" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">4.9</div>
                        <div className="text-xs text-outline font-medium">تقييم</div>
                      </div>
                      <div className="w-px h-8 bg-outline-variant/30 mt-2" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15</div>
                        <div className="text-xs text-outline font-medium">دورة</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-8 space-y-6 text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
                      مدرب معتمد
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface font-headline leading-tight">د. يوسف الخالدي</h1>
                    <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">
                      خبير في استراتيجيات التعلم السائل والذكاء الاصطناعي الأكاديمي. أكرس حياتي لتبسيط المعرفة المعقدة وتحويلها إلى تجارب تعليمية ملهمة.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-surface-container-highest rounded-xl text-sm font-semibold text-primary">هندسة المعرفة</span>
                      <span className="px-4 py-2 bg-surface-container-highest rounded-xl text-sm font-semibold text-primary">الذكاء الاصطناعي</span>
                      <span className="px-4 py-2 bg-surface-container-highest rounded-xl text-sm font-semibold text-primary">التفكير التصميمي</span>
                      <span className="px-4 py-2 bg-surface-container-highest rounded-xl text-sm font-semibold text-primary">القيادة الرقمية</span>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button className="px-10 py-4 bg-primary text-on-primary rounded-3xl font-bold editorial-shadow hover:bg-primary-container transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined">person_add</span>
                        متابعة المحاضر
                      </button>
                      <button className="p-4 bg-surface-container-lowest text-primary rounded-3xl border border-outline-variant/20 editorial-shadow hover:bg-surface-container transition-all">
                        <span className="material-symbols-outlined">mail</span>
                      </button>
                      <button className="p-4 bg-surface-container-lowest text-primary rounded-3xl border border-outline-variant/20 editorial-shadow hover:bg-surface-container transition-all">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Main Content Layout */}
            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
              {/* Sidebar (Links & Bio) */}
              <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                {/* Detailed Bio */}
                <div className="bg-surface-container-low rounded-3xl p-8 space-y-4">
                  <h3 className="text-xl font-bold font-headline text-on-surface">نبذة تعريفية</h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    يمتلك الدكتور يوسف خبرة تمتد لأكثر من 15 عاماً في تطوير المناهج الرقمية. حصل على شهادة الدكتوراه في تكنولوجيا التعليم من جامعة ستانفورد، وعمل مستشاراً تقنياً لكبرى المنصات التعليمية العالمية. يركز في أسلوبه التعليمي على "السيولة المعرفية" - وهي قدرة المتعلم على ربط المفاهيم المتباعدة لخلق حلول مبتكرة.
                  </p>
                </div>
                {/* Social Links */}
                <div className="bg-surface-container-lowest rounded-3xl p-8 editorial-shadow space-y-6">
                  <h3 className="text-xl font-bold font-headline text-on-surface">التواصل الاجتماعي</h3>
                  <div className="space-y-4">
                    <a className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-primary font-bold">𝕏</div>
                        <span className="text-sm font-semibold">Twitter / X</span>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">arrow_back</span>
                    </a>
                    <a className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-primary font-bold">in</div>
                        <span className="text-sm font-semibold">LinkedIn</span>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">arrow_back</span>
                    </a>
                    <a className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-primary font-bold">YT</div>
                        <span className="text-sm font-semibold">YouTube</span>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">arrow_back</span>
                    </a>
                  </div>
                </div>
              </aside>
              {/* Main Feed */}
              <div className="lg:col-span-8 space-y-16 order-1 lg:order-2">
                {/* Courses Grid */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold font-headline">الدورات التدريبية</h2>
                    <a className="text-primary font-bold text-sm hover:underline underline-offset-8" href="#">عرض الكل</a>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Course Card 1 */}
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 editorial-shadow">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="abstract digital visualization of cybersecurity networks and glowing blue data nodes in a dark futuristic space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEvdVYkW-RbTU_uMOkRM6uJtTNaxVtHyxlTht3-VMKNltclSV5LhBxDbQxPFo5ZE3F8qy6S6ukaq5SzuJhkdDXm13JK1tP_rXlVVRIZks7V7-GWJ3qt82tMEfTnM_kHECTDmMQ71EpnT8m47bjQBMgpy6AgVBJMPgIeS0p1OcFfbTQWRTuSrXgaGftieEJO4aQYH5KceO9vYMhUQlWItyR9N5UV18ampofOcwKM9fJvm3rXCS-2Qrn3o2rUcz42hMyceMZeg82PPsF" />
                        <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">
                          $89.00
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-tight">أساسيات الأمن السيبراني في العصر الرقمي</h4>
                      <div className="flex items-center gap-4 text-sm text-outline font-medium">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 12 ساعة</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span> 4.9</span>
                      </div>
                    </div>
                    {/* Course Card 2 */}
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 editorial-shadow">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="minimalist rendering of artificial intelligence neural networks with soft violet and magenta lighting accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVpK4jKxza5plhhMekO_JEmjHCS6K-jTgP4chrrhE7XVdh0GHiokvDp6hGbPR8qvUYzcQ6Kg9G-ylQwwLQTinFbEulpCqz11wn1XLI1Fh-tDrmqcZO2PGdJ8tMB9Ofuhnahl6eqP3ZHjqnx6vNQy6lGkXNGyXemclHk8Ba6HYDGY6N2znDQKNP4HN7GfPG3Mr8LwGmfK93L9DbbyyGG24MsuVI-OoBVQ1iApgILMci83OrzyPGBTraMEdTi5wSC-7qvyqHOUiX8ykM" />
                        <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">
                          $120.00
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-tight">هندسة الأوامر: إتقان التفاعل مع الذكاء الاصطناعي</h4>
                      <div className="flex items-center gap-4 text-sm text-outline font-medium">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 ساعات</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span> 5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonials Bento */}
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold font-headline">قالوا عن المحاضر</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-highest/30 p-8 rounded-3xl space-y-4 border border-white/40">
                      <div className="flex items-center gap-3">
                        <img className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a young smiling professional woman with a clean bright background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-I5uuPLPVenzFmiWH-MgBd2UEGwEkiVNMdRo0XexXfUfqGNPXpMITM9inJo_aZ1uTX4kf10KBOkALMAAspd1tQMhSo2S05badFMPI4GSIyfVJnuwcoZBYprIcY14ASLZLcNi7i8U0o-JKPQqcHg298UcZakXiI7utzKaLTZxU0coxTYHlOrIuBKX7KEWrUIhnLoB69gi_uuzXODUyfFtC9U5gco2gUjopEwpIvKCPrQ3le4QEQIgbq2d8d-7-ouFQahBzaPCh05mE" />
                        <div>
                          <div className="font-bold text-on-surface">سارة العمري</div>
                          <div className="text-xs text-outline font-medium">مديرة مشاريع</div>
                        </div>
                      </div>
                      <p className="text-sm italic text-on-surface-variant leading-relaxed">
                        "لقد غير أسلوب د. يوسف نظرتي للتعلم تماماً. طريقته في شرح المفاهيم المعقدة تجعلك تشعر بأن المعرفة تتدفق بسلاسة في ذهنك دون عناء."
                      </p>
                    </div>
                    <div className="bg-primary/5 p-8 rounded-3xl space-y-4 self-end">
                      <div className="flex items-center gap-3">
                        <img className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a young male creative professional in a sunlit workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWN9221ETqACzEyBc3KIChl5vCa4dj8S36fdghlJfP9LXQkZ_noRdLjI0ZUaXLQaAUGFAq81EEScOunH9y0ir9B6du1w3LFneECPCeRXAZlgCn5ygOt1s4adv0EZX7Q3tfSunR40Z-QtRA5bfBTGSHEoXK6-zwhK4OsxAnRhpfRhQtcrV6w6DmOzLFwlfVuk6EhuwAJu0wbjKecUKIf0mHNoJr0wN0YzW5CC1jM_cje-4In7Kuep3W4GEKQvTYFL1M4GBFwLpFGkwK" />
                        <div>
                          <div className="font-bold text-on-surface">أحمد منصور</div>
                          <div className="text-xs text-outline font-medium">مطور واجهات</div>
                        </div>
                      </div>
                      <p className="text-sm italic text-on-surface-variant leading-relaxed">
                        "محتوى غني، تقديم مذهل، وتطبيق عملي حقيقي. أفضل استثمار تعليمي قمت به هذا العام كان الالتحاق بدورة هندسة الأوامر."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <SiteFooter variant="instructor" />
          {/* FAB for focused action */}
          <div className="fixed bottom-8 left-8 z-40 hidden md:block">
            <button className="flex items-center gap-3 px-6 py-4 bg-secondary text-on-secondary rounded-full editorial-shadow hover:scale-105 active:scale-95 transition-all font-bold">
              <span className="material-symbols-outlined">chat_bubble</span>
              تحدث مع د. يوسف
            </button>
          </div></div>
        
      </div>
    </>
  )
}
