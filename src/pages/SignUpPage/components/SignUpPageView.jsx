import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandLogo } from '../../../components/BrandLogo'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { routes } from '../../../siteData'

const pageStyles = `body {
  font-family: 'Tajawal', 'Plus Jakarta Sans', sans-serif;
  background-color: #fdf8ff;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.custom-gradient-bg {
  background: linear-gradient(135deg, #5a45c6 0%, #d1688c 100%);
}`

export function SignUpPage() {
  usePageSetup('SignUpPage')

  const navigate = useNavigate()
  const { signUp } = useAppState()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'أدخل الاسم الكامل.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'أدخل البريد الإلكتروني.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'أدخل كلمة المرور.'
    } else if (form.password.trim().length < 8) {
      nextErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل.'
    }

    if (!form.terms) {
      nextErrors.terms = 'يجب الموافقة على الشروط والمتابعة.'
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    signUp({
      name: form.name.trim(),
      email: form.email.trim(),
    })
    navigate(routes.dashboard.path)
  }

  return (
    <>
      <style>{pageStyles}</style>

      <main className="flex min-h-screen flex-col md:flex-row-reverse">
        <section className="custom-gradient-bg relative hidden overflow-hidden p-12 text-white md:flex md:w-1/2 md:flex-col md:items-center md:justify-between">
          <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-tertiary/20 blur-3xl" />

          <div className="z-10 flex w-full justify-end">
            <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
          </div>

          <div className="z-10 flex max-w-md flex-col items-center text-center">
            <div className="relative mb-8">
              <img
                className="h-auto w-full -rotate-2 rounded-2xl border-4 border-white/10 shadow-2xl transition-transform duration-500 hover:rotate-0"
                alt="Educational artwork"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzk6900RYyH_3WzFLmLcXIIQj-as6OS2vnZVKUaEgSCYuXy0MTttZDwKelcBaW-0N1Vfas2GjNIszcR7PejmR1gEA4to0aUveX05sdg-2vtgC5ZVGythrdt4Sz1edTTVJeEJyvlcUW9WkW2IxlAg-upmiL98nzaAw5s2eZQkPK5U66n9wLc7FDzgQmE1Yl51zoUJOFY7tXNCFXD6pX2KemXgbLSa1hBZCGw-9VC1wKk5bw6i1gXthGHHmTBbrBhPrZvKkBnpizV4Lb"
              />
            </div>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight">
              انضم إلى أكثر من 150 ألف متعلم
            </h2>
            <p className="text-lg font-light leading-relaxed text-on-primary-container opacity-90">
              اكتشف مساراً تعليمياً مخصصاً يجمع بين الأصالة والحداثة في بيئة رقمية
              ملهمة.
            </p>
          </div>

          <div className="z-10 w-full text-center text-sm opacity-60">
            © 2024 The Fluid Scholar. جميع الحقوق محفوظة.
          </div>
        </section>

        <section className="flex w-full items-center justify-center bg-white p-6 md:w-1/2 md:p-12">
          <div className="w-full max-w-md">
            <div className="mb-12 flex justify-center md:hidden">
              <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
            </div>

            <div className="mb-10 text-right">
              <h1 className="mb-2 text-3xl font-extrabold text-on-surface">
                ابدأ رحلتك اليوم
              </h1>
              <p className="text-on-surface-variant">
                أدخل تفاصيلك لإنشاء حساب جديد والبدء في التعلم.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-right">
                <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="name">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="name"
                    name="name"
                    placeholder="أدخل اسمك الكامل"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    person
                  </span>
                </div>
                {errors.name ? <p className="text-sm font-medium text-red-500">{errors.name}</p> : null}
              </div>

              <div className="space-y-2 text-right">
                <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="email"
                    name="email"
                    placeholder="example@domain.com"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    mail
                  </span>
                </div>
                {errors.email ? <p className="text-sm font-medium text-red-500">{errors.email}</p> : null}
              </div>

              <div className="space-y-2 text-right">
                <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="password">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    lock
                  </span>
                </div>
                <p className="mr-1 mt-1 text-[10px] text-outline-variant">
                  يجب أن تتكون من 8 أحرف على الأقل.
                </p>
                {errors.password ? <p className="text-sm font-medium text-red-500">{errors.password}</p> : null}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-3 py-2 text-right">
                  <input
                    className="h-5 w-5 cursor-pointer rounded-lg border-surface-variant text-primary focus:ring-primary/20"
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={handleChange}
                  />
                  <span className="cursor-pointer text-xs leading-relaxed text-on-surface-variant">
                    أوافق على شروط الخدمة وسياسة الخصوصية.
                  </span>
                </label>
                {errors.terms ? <p className="text-sm font-medium text-red-500">{errors.terms}</p> : null}
              </div>

              <button
                className="w-full rounded-2xl bg-primary-container py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:bg-primary active:scale-[0.98]"
                type="submit"
              >
                إنشاء حساب
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-on-surface-variant">
                لديك حساب بالفعل؟
                <button
                  type="button"
                  onClick={() => navigate(routes.signIn.path)}
                  className="mr-1 font-extrabold text-primary transition-colors hover:text-tertiary"
                >
                  تسجيل الدخول
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
