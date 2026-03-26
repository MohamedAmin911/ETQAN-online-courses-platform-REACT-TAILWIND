import { LearningTopNav } from '../../../components/LearningTopNav'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { useSiteNavigation } from '../../../hooks/useSiteNavigation'

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        body {\n            font-family: 'Tajawal', sans-serif;\n            background-color: #fdf8ff;\n        }\n        .glass-nav {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n        }\n        .video-gradient {\n            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);\n        }"

export function CourseWatchPage() {
  usePageSetup("CourseWatchPage")
  const handleClick = useSiteNavigation()

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div onClick={handleClick}>
        <div>
          <LearningTopNav />
          <main className="pt-20 flex flex-row h-screen overflow-hidden">
            {/* Sidebar Navigation (Playlist) */}
            <aside className="w-80 h-full overflow-y-auto bg-slate-50 border-l border-surface-container flex flex-col font-['Tajawal'] relative z-10">
              <div className="p-6 bg-white shadow-sm mb-2">
                <h2 className="text-lg font-bold text-primary mb-1">منهج الدورة</h2>
                <p className="text-sm text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs" data-icon="analytics">analytics</span>
                  تقدمك: ٦٥٪
                </p>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full w-[65%] rounded-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2">
                {/* Section Header */}
                <div className="px-4 py-3 mt-2 text-sm font-bold text-on-surface-variant/70 border-b border-surface-container-high mb-2">
                  الوحدة الأولى: أساسيات التفكير السائل
                </div>
                {/* Lesson Items */}
                <div className="flex flex-row-reverse items-center justify-between p-3 rounded-xl bg-white text-primary font-bold shadow-sm transition-transform cursor-pointer">
                  <div className="flex flex-row-reverse items-center gap-3">
                    <span className="material-symbols-outlined text-primary" data-icon="play_circle" style={{fontVariationSettings: '"FILL" 1'}}>play_circle</span>
                    <span className="text-sm">مقدمة في فلسفة التعلم الحديث</span>
                  </div>
                  <span className="text-xs text-primary-container">٠٨:٤٥</span>
                </div>
                <div className="flex flex-row-reverse items-center justify-between p-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-transform cursor-pointer">
                  <div className="flex flex-row-reverse items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-500" data-icon="check_circle" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                    <span className="text-sm">تفكيك الأنماط الذهنية القديمة</span>
                  </div>
                  <span className="text-xs">١٢:٢٠</span>
                </div>
                <div className="flex flex-row-reverse items-center justify-between p-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-transform cursor-pointer">
                  <div className="flex flex-row-reverse items-center gap-3">
                    <span className="material-symbols-outlined" data-icon="lock">lock</span>
                    <span className="text-sm">آليات بناء الروابط المعرفية</span>
                  </div>
                  <span className="text-xs">١٥:١٠</span>
                </div>
                <div className="px-4 py-3 mt-6 text-sm font-bold text-on-surface-variant/70 border-b border-surface-container-high mb-2">
                  الوحدة الثانية: أدوات الإبداع المتقدمة
                </div>
                <div className="flex flex-row-reverse items-center justify-between p-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-transform cursor-pointer">
                  <div className="flex flex-row-reverse items-center gap-3">
                    <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
                    <span className="text-sm">مختبر الأفكار المستحيلة</span>
                  </div>
                  <span className="text-xs">٢٠:٠٠</span>
                </div>
              </div>
              {/* Side Nav Tabs (Shared Component Logic) */}
              <div className="mt-auto border-t border-surface-container p-4 grid grid-cols-5 gap-1 bg-surface-container-low">
                <button className="flex flex-col items-center gap-1 p-2 text-primary">
                  <span className="material-symbols-outlined text-xl" data-icon="menu_book" style={{fontVariationSettings: '"FILL" 1'}}>menu_book</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2 text-slate-400">
                  <span className="material-symbols-outlined text-xl" data-icon="attachment">attachment</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2 text-slate-400">
                  <span className="material-symbols-outlined text-xl" data-icon="edit_note">edit_note</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2 text-slate-400">
                  <span className="material-symbols-outlined text-xl" data-icon="forum">forum</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2 text-slate-400">
                  <span className="material-symbols-outlined text-xl" data-icon="star">star</span>
                </button>
              </div>
            </aside>
            {/* Main Content Area */}
            <section className="flex-1 overflow-y-auto bg-surface pb-12">
              {/* Video Player Section */}
              <div className="aspect-video w-full bg-on-surface relative overflow-hidden">
                <img alt="خلفية الدرس" className="w-full h-full object-cover opacity-60" data-alt="cinematic shot of a minimalist futuristic study room with soft purple ambient lighting and large windows overlooking a blurred city" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIf1qxAD2kHfWDBIV6Hp4LfDOuYCojak4G_iFeX70Dyl1qWy3ZYrg6tCINCW_R3Jh2ZiaNyTeIJ_t1RNBRA7LPmpeybNcs32o3gJP74GQgmKMi7zpmecI3MnNenC5tgxKnEeCtPj4Y1NBaN7RrU01BY63PaLTGpr9UKUAKm0vvIF-Nsyzph6ylEuAwjPOCLXFyABhfMyGeYmhcqGEWkXTw1cECRLV9unZZOxvMjwlptL9kATpEIUeqWOzfUS_QXj3649mxX7wRxmr_" />
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-5xl" data-icon="play_arrow" style={{fontVariationSettings: '"FILL" 1'}}>play_arrow</span>
                  </button>
                </div>
                <div className="absolute bottom-0 w-full p-6 video-gradient flex flex-row-reverse justify-between items-end">
                  <div className="flex flex-row-reverse gap-4">
                    <button className="text-white hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                    </button>
                    <button className="text-white hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined" data-icon="fullscreen">fullscreen</span>
                    </button>
                  </div>
                  <div className="flex-1 mx-8 h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-primary" />
                  </div>
                  <div className="text-white text-sm font-['Plus_Jakarta_Sans']">03:14 / 08:45</div>
                </div>
              </div>
              {/* Content Header */}
              <div className="p-8 max-w-6xl mx-auto">
                <div className="flex flex-row-reverse justify-between items-start mb-8">
                  <div>
                    <nav className="flex flex-row-reverse gap-2 text-sm text-secondary font-medium mb-2">
                      <span>هندسة التفكير الإبداعي</span>
                      <span className="text-slate-300">/</span>
                      <span>الوحدة الأولى</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-on-surface mb-4">مقدمة في فلسفة التعلم الحديث</h1>
                    <p className="text-on-surface-variant max-w-3xl leading-relaxed">
                      في هذا الدرس، نستكشف الأسس الفلسفية التي يقوم عليها مفهوم "السيولة المعرفية" وكيف يمكن للمتعلم المعاصر أن يتكيف مع تدفق المعلومات اللامتناهي دون أن يفقد قدرته على التفكير النقدي العميق.
                    </p>
                  </div>
                  <div className="flex flex-row-reverse gap-3">
                    <button className="px-6 py-3 rounded-xl bg-surface-container-high text-on-secondary-container font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                      <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                      الدرس السابق
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                      الدرس التالي
                      <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                    </button>
                  </div>
                </div>
                {/* Bento Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Resources Card */}
                  <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-row-reverse justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary" data-icon="folder_zip">folder_zip</span>
                        مصادر التعلم
                      </h3>
                      <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                        تحميل الكل
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-row-reverse items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                        <div className="flex flex-row-reverse items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                            <span className="material-symbols-outlined" data-icon="description">description</span>
                          </div>
                          <div>
                            <div className="font-bold text-sm">ملخص الفلسفة السائلة.pdf</div>
                            <div className="text-xs text-on-surface-variant">2.4 MB</div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400" data-icon="download">download</span>
                        </button>
                      </div>
                      <div className="flex flex-row-reverse items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                        <div className="flex flex-row-reverse items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="material-symbols-outlined" data-icon="mind_map">map</span>
                          </div>
                          <div>
                            <div className="font-bold text-sm">خريطة المفاهيم الذهنية.jpg</div>
                            <div className="text-xs text-on-surface-variant">1.8 MB</div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400" data-icon="download">download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Notes Card */}
                  <div className="bg-surface-container-high rounded-2xl p-6 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-tertiary/10 rounded-full -translate-x-12 -translate-y-12 blur-2xl" />
                    <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 mb-4 relative z-10">
                      <span className="material-symbols-outlined text-tertiary" data-icon="sticky_note_2">sticky_note_2</span>
                      ملاحظاتك الشخصية
                    </h3>
                    <textarea className="flex-1 w-full bg-white/50 backdrop-blur-sm border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-slate-400" placeholder="اكتب أفكارك هنا لتثبيتها..." defaultValue={""} />
                    <button className="mt-4 w-full py-3 bg-white text-primary font-bold rounded-xl shadow-sm hover:bg-primary hover:text-white transition-all">
                      حفظ الملاحظة
                    </button>
                  </div>
                </div>
                {/* Instructor Section */}
                <div className="mt-12 p-8 bg-linear-to-br from-primary-container to-primary rounded-3xl text-on-primary flex flex-row-reverse items-center gap-8 shadow-xl">
                  <div className="h-24 w-24 rounded-2xl border-4 border-white/20 overflow-hidden shrink-0 shadow-lg">
                    <img alt="المحاضر" className="w-full h-full object-cover" data-alt="middle-aged male academic with glasses and a friendly face, looking into camera against a library background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjFwV4E6j7UdOi2tx1q6fOj38i2vBxBHJyu2unKrJ4uLOvH8ICq0Ad78SbjH-ifATZ3NtjxeU3ukgqERAJxEhO48rd4-P7F7FxUZqGNIxsv6bH3BusBnkdVbDbrwLGvllA7kkZai2tRJe_iONkpov0V2Gc3nuaiy5Tvqk14kmgshfSLiblBG1lQ7bCHmn69q7wdXZtN054anfPXfqcmZ5amgZ1QrUQHtJ3aj4I9iPtW0gFAQdleRoGnbaf8cWu_0r0NaplJ5rIetq5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">د. يوسف الأحمدي</h4>
                    <p className="text-on-primary-container leading-relaxed opacity-90">
                      خبير في استراتيجيات التعلم المتسارع والابتكار المعرفي. قام بتدريب أكثر من ٥٠ ألف طالب حول العالم على تقنيات التفكير الإبداعي.
                    </p>
                    <div className="flex flex-row-reverse gap-4 mt-4">
                      <span className="flex items-center gap-1 text-xs px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">
                        <span className="material-symbols-outlined text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                        ٤.٩ تقييم
                      </span>
                      <span className="flex items-center gap-1 text-xs px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">
                        <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                        ١٢ دورة تدريبية
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* Contextual FAB (Only for Main Course Page) */}
          <div className="fixed bottom-8 left-8 z-50">
            <button className="w-16 h-16 rounded-full bg-secondary text-on-secondary shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform group">
              <span className="material-symbols-outlined text-3xl" data-icon="help_center">help_center</span>
              <span className="absolute right-full mr-4 bg-on-surface text-surface px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">اسأل المحاضر</span>
            </button>
          </div></div>
        
      </div>
    </>
  )
}
