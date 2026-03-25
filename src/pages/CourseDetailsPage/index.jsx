import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { courses } from '../../data/courses'
import { instructors } from '../../data/instructors'
import { useAppState } from '../../hooks/useAppState'
import { usePageSetup } from '../../hooks/usePageSetup'
import { routes } from '../../siteData'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
}`

export function CourseDetailsPage() {
  usePageSetup('CourseDetailsPage')

  const navigate = useNavigate()
  const { addToCart } = useAppState()
  const course = courses[0]
  const instructor = instructors.find((entry) => entry.id === course.instructorId)
  const [openModuleId, setOpenModuleId] = useState(course.curriculum[0]?.id ?? null)

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active="courses" progress="third" maxWidth="max-w-8xl" />

        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-24 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <section className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img alt={course.title} className="aspect-video w-full object-cover" src={course.previewImage} />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <button className="glass-panel flex h-20 w-20 items-center justify-center rounded-full text-primary shadow-xl">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    play_arrow
                  </span>
                </button>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold text-on-tertiary-fixed-variant">
                    {course.badge}
                  </span>
                  <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed-variant">
                    {course.level}
                  </span>
                </div>
                <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-5xl">
                  {course.title}
                </h1>
                <p className="text-lg leading-relaxed text-on-surface-variant">{course.description}</p>
              </div>

              <div className="flex items-center gap-8 border-y border-outline-variant/20 py-4">
                <div className="flex items-center gap-3">
                  <img alt={instructor?.name} className="h-12 w-12 rounded-full object-cover" src={instructor?.image} />
                  <div>
                    <p className="text-xs text-on-surface-variant">المحاضر</p>
                    <p className="font-bold text-on-surface">{instructor?.name}</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-outline-variant/20" />
                <div>
                  <p className="text-xs text-on-surface-variant">التقييم</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-on-surface">{course.rating}</span>
                    <span className="text-xs text-on-surface-variant">({course.reviews} تقييم)</span>
                  </div>
                </div>
                <div className="h-10 w-px bg-outline-variant/20" />
                <div>
                  <p className="text-xs text-on-surface-variant">الطلاب</p>
                  <div className="font-bold text-on-surface">{course.students.toLocaleString()}</div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="font-headline text-2xl font-bold">منهج المنتج</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => {
                  const isOpen = openModuleId === module.id

                  return (
                    <div key={module.id} className="overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => setOpenModuleId(isOpen ? null : module.id)}
                        className="flex w-full items-center justify-between px-6 py-5 transition-colors hover:bg-surface-container"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-lg font-bold">{module.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-on-surface-variant">
                            {module.lessons.length} دروس • {module.duration}
                          </span>
                          <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
                        </div>
                      </button>
                      {isOpen ? (
                        <div className="space-y-4 px-14 pb-5">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between py-2 text-sm">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">play_circle</span>
                                <span className="text-on-surface-variant">{lesson.title}</span>
                              </div>
                              <span className="text-on-surface-variant/60">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-2xl font-bold">آراء المتعلمين</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {course.testimonials.map((review) => (
                  <div key={review.name} className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed font-bold text-on-secondary-fixed">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <div className="flex text-secondary">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <span
                              key={`${review.name}-${index}`}
                              className="material-symbols-outlined text-xs"
                              style={{ fontVariationSettings: index < review.rating ? '"FILL" 1' : '"FILL" 0' }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="relative lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
                <div className="mb-6">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-on-surface">${course.price}.00</span>
                    <span className="text-sm text-on-surface-variant line-through">${course.originalPrice}.00</span>
                  </div>
                  <p className="text-sm font-bold text-tertiary">
                    خصم {Math.round((1 - course.price / course.originalPrice) * 100)}% لفترة محدودة
                  </p>
                </div>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => navigate(routes.checkout.path)}
                    className="w-full rounded-xl bg-linear-to-r from-primary to-primary-container py-4 text-lg font-bold text-on-primary transition-all duration-300 hover:shadow-lg hover:scale-[0.98]"
                  >
                    اشترك الآن
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(course.id)}
                    className="w-full rounded-xl border-2 border-primary py-4 font-bold text-primary transition-all hover:bg-primary/5"
                  >
                    أضف إلى السلة
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="border-b border-outline-variant/10 pb-2 font-bold text-on-surface">يتضمن هذا المنتج:</h4>
                  <ul className="space-y-3">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-surface-container p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">المقاعد المتبقية بالخصم</span>
                  <span className="text-sm font-bold text-primary">12 / 100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                  <div className="h-full w-[88%] bg-primary" />
                </div>
                <p className="mt-4 text-center text-xs text-on-surface-variant">
                  انضم إلى {course.students.toLocaleString()} متعلم نشط
                </p>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter variant="course" />
      </div>
    </>
  )
}
