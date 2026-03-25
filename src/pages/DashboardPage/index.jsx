import { BrandLogo } from '../../components/BrandLogo'
import { usePageSetup } from '../../hooks/usePageSetup'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-nav {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
.asymmetric-glow {
  background: radial-gradient(circle at top right, rgba(133, 74, 121, 0.1), transparent 40%);
}
body {
  font-family: 'Tajawal', 'Be Vietnam Pro', sans-serif;
}`

const weeklyLearningActivity = [
  { day: 'سبت', hours: 1.8, minutes: 108, lessons: 2, focus: 'مراجعة' },
  { day: 'أحد', hours: 0.9, minutes: 54, lessons: 1, focus: 'مشاهدة' },
  { day: 'اثنين', hours: 2.4, minutes: 144, lessons: 3, focus: 'تطبيق' },
  { day: 'ثلاثاء', hours: 1.5, minutes: 90, lessons: 2, focus: 'قراءة' },
  { day: 'أربعاء', hours: 1.2, minutes: 72, lessons: 1, focus: 'اختبار' },
  { day: 'خميس', hours: 1.7, minutes: 102, lessons: 2, focus: 'مشروع' },
  { day: 'جمعة', hours: 0.7, minutes: 42, lessons: 1, focus: 'ملخص' },
]

const enrolledCourses = [
  {
    id: 'javascript',
    title: 'أساسيات جافاسكربت المتقدمة',
    nextLesson: 'المحاضرة القادمة: الوعود (Promises)',
    progress: 75,
    accent: 'text-primary',
    ring: '31.4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDS2DUS4FgS8mnEV7vCvBQJzFCpT6tvuRUZ1NH-n7ivQqswwcnFc25spXZGyQg-SmtBZXzOZHLk0kDrxvv4wnSDyIKDVlkFtqvYK7HqNwK2LPrEWk75YxfHacNBVkUxvwR14ehUGClfcbz9laRzWKviqkS7BxtWon9EXAvwiUPbFP5reD83FUSWgjqbO6xHHkKDL_JbamK0FskEPKFzI-PTp-dmM1MI-wi4-wzAlywbBwtqMjcFUDwS_xyf9yJ6_PParMuzWJ2mwH05',
  },
  {
    id: 'python',
    title: 'تحليل البيانات باستخدام بايثون',
    nextLesson: 'المحاضرة القادمة: مكتبة NumPy',
    progress: 30,
    accent: 'text-secondary',
    ring: '87.9',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0d-QgfZfSute0vMSAnDMcBhpybd6iIv5skxJZGVrcoAyX8iRP9vt_yzloeonjDQV4qQm9Mc-FCF13hv_jIXhl3FyX2jjmVQh5yWNdF7gQOnqMHMP_WxroH9-tCUpwLqCx6ojB203C0VwC3VylFFoP4VPHTvC3Sh0T_I9hDd8US77WUo1dNlia18q7P951LLCVY1Jvd5KPrhQKlk015gjDwghDiSk_yBnGOs485lPu-vOB0bK8ogckAuunnlpNqAjp7OntTzLwW8V8',
  },
]

const recentActivity = [
  {
    title: 'التعامل مع الكائنات',
    course: 'دورة الـ JavaScript',
    progress: 'w-2/3',
    accent: 'bg-primary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmfzxxE6IgcGFV_sFbI_-6ScjNKLkzM85emXsGSx0s_AmOewoQ6NQuTo613fW3GAtbYsi_mZYxA7xUHASNJgNWfLuwM_Hw2d-271NXMqClnTkx9CZSX6Xx3o1ioV9FcZ1_arpIH92pl1e-n8prmCSD73qb3tcUOKj-daNNJEVvlLA2tpBvEqWvdyiVDiqF87hUvuOS2WcUpbbGA86H3L9avDE6pU8mjO0yZRhopCMxV-zXTEw2yvg4X3TyW79XBCtUTJhVyURzrotV',
  },
  {
    title: 'بناء واجهة المستخدم',
    course: 'دورة الـ React',
    progress: 'w-1/4',
    accent: 'bg-secondary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc16pLHX_Re9xVCDq7Vd33pHPKDB-mn_WmUYF_OyRfb-PqL5XRMnyTikvrzPT1kELY1VhlyxvU-6AArRdZdU4VbI7b3T4Mfu13rX99xQhocgNBK96kOY-HYPsSsbtUhwDJRXWs9SWcieLQBTifpfjLvSb53Qn_XSRVBQHky3P7tPdlAgNsBDkYJ6vkQmHnaci7E0OirZgG354OAs5rOWP-VJolYwafTMcoYm2Vpmg1DH_0_dWVALcu80clFIb5azZWBfOAFE3ySzqT',
  },
]

const notifications = [
  {
    title: 'تم الرد على استفسارك',
    body: 'المدرب أحمد علّق على مشروعك الأخير',
    time: 'منذ 5 دقائق',
    dot: 'bg-primary',
  },
  {
    title: 'موعد المحاضرة المباشرة',
    body: 'تبدأ جلسة المراجعة الجماعية بعد 15 دقيقة',
    time: 'منذ ساعة',
    dot: 'bg-secondary',
  },
  {
    title: 'إضافة درس جديد',
    body: 'تمت إضافة "مقدمة في الذكاء الاصطناعي"',
    time: 'منذ يومين',
    dot: 'bg-surface-container-high',
  },
]

export function DashboardPage() {
  usePageSetup('DashboardPage')

  const totalWeeklyMinutes = weeklyLearningActivity.reduce((sum, day) => sum + day.minutes, 0)
  const totalWeeklyHours = (totalWeeklyMinutes / 60).toFixed(1)
  const topDay = weeklyLearningActivity.reduce((best, day) => (day.minutes > best.minutes ? day : best))
  const averageMinutes = Math.round(totalWeeklyMinutes / weeklyLearningActivity.length)
  const weeklyGoalMinutes = 900
  const goalCompletion = Math.round((totalWeeklyMinutes / weeklyGoalMinutes) * 100)
  const maxMinutes = Math.max(...weeklyLearningActivity.map((day) => day.minutes))

  return (
    <>
      <style>{pageStyles}</style>
      <div>
        <aside className="fixed right-0 top-0 z-40 hidden h-full w-64 flex-col border-l border-surface-container bg-surface-container-lowest shadow-[0px_12px_32px_rgba(28,25,45,0.06)] md:flex">
          <div className="px-8 py-10">
            <h1 className="font-headline text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
              <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
            </h1>
          </div>
          <nav className="flex-1 space-y-2 px-4">
            <a className="flex items-center gap-4 rounded-2xl bg-surface-container px-4 py-3 text-primary transition-all duration-200" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>dashboard</span>
              <span className="font-bold">لوحة التحكم</span>
            </a>
            <a className="group flex items-center gap-4 rounded-2xl px-4 py-3 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">school</span>
              <span>دوراتي</span>
            </a>
            <a className="group flex items-center gap-4 rounded-2xl px-4 py-3 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">forum</span>
              <span>الرسائل</span>
            </a>
            <a className="group flex items-center gap-4 rounded-2xl px-4 py-3 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">settings</span>
              <span>الإعدادات</span>
            </a>
          </nav>
          <div className="p-6">
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-high p-4">
              <div className="relative z-10">
                <p className="mb-1 text-xs text-on-surface-variant">خطة الاشتراك</p>
                <p className="mb-3 font-bold text-primary">الباقة الاحترافية</p>
                <button className="w-full rounded-xl bg-primary py-2 text-xs font-bold text-on-primary transition-transform active:scale-95">
                  ترقية الآن
                </button>
              </div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-primary-container/20 blur-xl" />
            </div>
          </div>
        </aside>

        <main className="min-h-screen asymmetric-glow md:mr-64">
          <header className="glass-nav sticky top-0 z-30 flex items-center justify-between bg-white/70 px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <span className="material-symbols-outlined text-3xl text-primary">menu</span>
              </div>
              <div className="hidden md:flex flex-col">
                <h2 className="text-xl font-bold text-on-surface">أهلاً بك مرة أخرى، عبدالله</h2>
                <p className="text-sm text-on-surface-variant">لقد أنجزت 85% من أهدافك الأسبوعية!</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="relative rounded-full bg-surface-container p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-tertiary" />
                </button>
              </div>
              <div className="flex items-center gap-3 border-r border-surface-variant pr-4">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="User profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTrbTetgS_PPAd0x7GCF34aah9pfYygGzIfAjFyPsw_-vp8lg0ogzEZJ3OtTu0nJ6yIHQcwqWrLmtqT3h_ycqoggHEn02jVGcBfn8BDdoLcOeGqUO8zv4KX9v3MvPC5bkSHNdxhkqvQt1DFdb9STOaspMW3l-5mawAR9_9C3h443FpJiXLuKjxeqM0gG_Q4c6mq-1SBSsJSjxTQxtWO_sa_jSlbxvBKKgE3OxNmoEOuQwEsBX8j3z3re4jPNgDbqS1m5auTbZjiaLD"
                />
                <div className="hidden lg:block">
                  <p className="text-sm font-bold leading-tight">عبدالله الحربي</p>
                  <p className="text-xs text-on-surface-variant">طالب مستوى متقدم</p>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 p-6">
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>timer</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">ساعات التعلم</p>
                  <p className="text-xl font-bold">12.5 ساعة</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-fixed text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_stories</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">الدورات المكتملة</p>
                  <p className="text-xl font-bold">4 دورات</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary-fixed text-tertiary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>military_tech</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">الشهادات المحققة</p>
                  <p className="text-xl font-bold">2 شهادة</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">سلسلة الإنجاز</p>
                  <p className="text-xl font-bold">7 أيام</p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <section className="rounded-2xl bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-lg font-bold">نشاط التعلم الأسبوعي</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-on-surface-variant">الأسبوع الأخير</span>
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
                    <div>
                      <div className="mb-4 flex items-center gap-6 rounded-2xl bg-surface-container-low p-4">
                        <div>
                          <p className="text-xs text-on-surface-variant">إجمالي التعلم</p>
                          <p className="text-2xl font-extrabold text-on-surface">{totalWeeklyHours} ساعة</p>
                        </div>
                        <div>
                          <p className="text-xs text-on-surface-variant">أفضل يوم</p>
                          <p className="text-lg font-bold text-primary">{topDay.day}</p>
                        </div>
                        <div>
                          <p className="text-xs text-on-surface-variant">متوسط يومي</p>
                          <p className="text-lg font-bold text-on-surface">{averageMinutes} دقيقة</p>
                        </div>
                      </div>

                      <div className="flex h-56 items-end justify-between gap-3">
                        {weeklyLearningActivity.map((day) => {
                          const height = `${Math.max(20, Math.round((day.minutes / maxMinutes) * 100))}%`
                          const isTopDay = day.day === topDay.day

                          return (
                            <div key={day.day} className="flex flex-1 flex-col items-center gap-3">
                              <div className="text-[11px] font-bold text-on-surface">{day.hours} س</div>
                              <div className="flex h-full w-full items-end">
                                <div
                                  className={`w-full rounded-t-2xl transition-all duration-300 ${
                                    isTopDay
                                      ? 'bg-primary shadow-lg shadow-primary/20'
                                      : 'bg-surface-container-high hover:bg-primary/20'
                                  }`}
                                  style={{ height }}
                                />
                              </div>
                              <div className="text-center">
                                <div className={`text-[10px] ${isTopDay ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>
                                  {day.day}
                                </div>
                                <div className="text-[9px] text-on-surface-variant/80">{day.lessons} دروس</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-primary/5 p-4">
                        <p className="mb-1 text-xs text-on-surface-variant">نسبة الهدف الأسبوعي</p>
                        <p className="text-2xl font-extrabold text-primary">{goalCompletion}%</p>
                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(goalCompletion, 100)}%` }} />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-4">
                        <p className="text-xs text-on-surface-variant">جلسة الذروة</p>
                        <p className="mt-1 text-lg font-bold text-on-surface">{topDay.focus} يوم {topDay.day}</p>
                        <p className="mt-1 text-xs text-on-surface-variant">{topDay.minutes} دقيقة خلال أعلى نشاط هذا الأسبوع</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-4">
                        <p className="text-xs text-on-surface-variant">مؤشر الانتظام</p>
                        <p className="mt-1 text-lg font-bold text-on-surface">6 / 7 أيام نشطة</p>
                        <p className="mt-1 text-xs text-on-surface-variant">استمر بهذا النمط لتحافظ على سلسلة الإنجاز</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold">متابعة التعلم</h3>
                    <a className="text-sm font-bold text-primary hover:underline" href="#">عرض الكل</a>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {enrolledCourses.map((course) => (
                      <div
                        key={course.id}
                        className="rounded-2xl bg-surface-container-lowest p-5 shadow-[0px_12px_32px_rgba(28,25,45,0.06)] transition-transform duration-300 hover:translate-y-[-4px]"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-surface-container">
                            <img className="h-full w-full object-cover" alt={course.title} src={course.image} />
                          </div>
                          <div className="relative flex h-12 w-12 items-center justify-center">
                            <svg className="h-full w-full -rotate-90">
                              <circle className="text-surface-container" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeWidth={3} />
                              <circle className={course.accent} cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeDasharray="125.6" strokeDashoffset={course.ring} strokeWidth={3} />
                            </svg>
                            <span className="absolute text-[10px] font-bold">{course.progress}%</span>
                          </div>
                        </div>
                        <h4 className="mb-1 font-bold">{course.title}</h4>
                        <p className="mb-4 text-xs text-on-surface-variant">{course.nextLesson}</p>
                        <button className="w-full rounded-xl bg-surface-container py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white">
                          متابعة الدرس
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                  <h3 className="mb-6 text-lg font-bold">شوهد مؤخراً</h3>
                  <div className="space-y-5">
                    {recentActivity.map((item) => (
                      <div key={item.title} className="group flex gap-4 cursor-pointer">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-surface-container">
                          <img className="h-full w-full object-cover" alt={item.title} src={item.image} />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="material-symbols-outlined text-xl text-white">play_arrow</span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold">{item.title}</p>
                          <p className="text-[10px] text-on-surface-variant">{item.course}</p>
                          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-surface-container">
                            <div className={`h-full ${item.accent} ${item.progress}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold">التنبيهات</h3>
                    <span className="rounded-full bg-tertiary-fixed px-2 py-0.5 text-[10px] font-bold text-on-tertiary-fixed">3 جديد</span>
                  </div>
                  <div className="space-y-6">
                    {notifications.map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
                        <div>
                          <p className="text-xs font-bold leading-tight">{item.title}</p>
                          <p className="mt-1 text-[10px] text-on-surface-variant">{item.body}</p>
                          <p className="mt-1 text-[9px] text-primary/60">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full rounded-xl border border-surface-container-high py-2 text-xs font-bold text-on-surface-variant transition-colors hover:bg-surface-container-low">
                    مسح الإشعارات
                  </button>
                </section>
              </div>
            </div>

            <footer className="mt-12 bg-surface-container-low px-8 py-10">
              <div className="grid grid-cols-1 gap-8 text-right md:grid-cols-4">
                <div className="md:col-span-2">
                  <h4 className="mb-4 text-lg font-bold text-on-surface">
                    <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
                  </h4>
                  <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
                    منصة رائدة تهدف إلى تمكين العقول من خلال تجربة تعليمية سلسة ومبتكرة.
                  </p>
                </div>
                <div>
                  <h5 className="mb-4 font-bold text-on-surface">روابط سريعة</h5>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li><a className="transition-colors hover:text-primary" href="#">مكتبة الدورات</a></li>
                    <li><a className="transition-colors hover:text-primary" href="#">خريطة التعلم</a></li>
                    <li><a className="transition-colors hover:text-primary" href="#">الدعم الفني</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-4 font-bold text-on-surface">تواصل معنا</h5>
                  <div className="flex justify-end gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">language</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">mail</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-surface-variant pt-6 text-center">
                <p className="text-xs text-on-surface-variant">© 2024 The Fluid Scholar. جميع الحقوق محفوظة.</p>
              </div>
            </footer>
          </div>

          <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-surface-variant bg-white/80 py-3 backdrop-blur-lg md:hidden">
            <a className="flex flex-col items-center gap-1 text-primary" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>dashboard</span>
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
          </nav>
        </main>
      </div>
    </>
  )
}
