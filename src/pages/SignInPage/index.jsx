import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthFooter } from '../../components/AuthFooter'
import { BrandLogo } from '../../components/BrandLogo'
import { useAppState } from '../../hooks/useAppState'
import { usePageSetup } from '../../hooks/usePageSetup'
import { routes } from '../../siteData'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
}
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  transform: translateY(-1.5rem) scale(0.85);
  color: #4228ad;
}`

export function SignInPage() {
  usePageSetup('SignInPage')

  const navigate = useNavigate()
  const { signIn } = useAppState()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

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

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    signIn(form.email.trim())
    navigate(routes.dashboard.path)
  }

  return (
    <>
      <style>{pageStyles}</style>

      <main className="flex min-h-screen">
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-primary-container to-tertiary lg:flex lg:w-1/2">
          <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-secondary/20 blur-[100px]" />
          <div className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-tertiary/30 blur-[80px]" />

          <div className="relative z-10 flex w-full flex-col items-center justify-center px-20 text-center">
            <div className="relative mb-12 w-full max-w-lg">
              <div className="absolute -inset-4 rounded-xl bg-white/10 blur-2xl" />
              <img
                alt="Abstract flowing liquid art representing knowledge"
                className="relative z-20 h-auto w-full -rotate-3 scale-110 rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5y1mXQbJE_-P_wK3GKVDxLlxtadbqh9z5MOVxB37QrUZG-UONsYCbeMOPYBvnPW1pFoS1r4vAuq-sRyh47mHc8VWA4NXc80w1c9IsC2KqcYN5JtrqbJrJsbkPF-4Wc9Yt5LHYPPciLpzzhK5KsvmpfzDcEAYz0KVjhHtSsxp5yLjP6wkRnQm28F7mieFpR_52ANq58cuKaoNdIMxqhVufYtoh6puMeCapW8PYnnym5v_TeC2IwoQ1pfAJd0gy16Xn-BMIUMas-D3D"
              />
            </div>

            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-tight text-white">
              انطلق في رحلة
              <br />
              <span className="text-secondary-fixed">المعرفة السائلة</span>
            </h1>

            <p className="mx-auto max-w-md text-xl leading-relaxed text-on-primary-container">
              انضم إلى مجتمع The Fluid Scholar واكتشف أسلوباً جديداً للتعلم يجمع بين
              الأصالة والحداثة الرقمية.
            </p>
          </div>
        </section>

        <section className="relative flex w-full flex-col bg-surface lg:w-1/2">
          <div className="p-8 lg:hidden">
            <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
          </div>

          <div className="flex flex-1 items-center justify-center p-8 md:p-16 lg:p-24">
            <div className="w-full max-w-md">
              <div className="mb-10">
                <h2 className="mb-3 font-headline text-4xl font-extrabold text-on-surface">
                  مرحباً بك مجدداً
                </h2>
                <p className="text-lg text-on-surface-variant">
                  أدخل بياناتك للوصول إلى لوحة التعلم الخاصة بك.
                </p>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-4">
                <button
                  className="group flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container-lowest px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-primary/10"
                  type="button"
                >
                  <img
                    alt="Google Logo"
                    className="h-5 w-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-35MOO8hAPfA0SKLG_PzoRkL7rvS2QP9R2W8RJLgRJp2yNTFxRyXjMAB4RYI7liw_M2tbbSHpHQgWvotyi_UFoqXzoEONKg_ZiSck0iYUmjzfHj5kZLb8-e3FQz1xIDZSjwAFIz5CHDgqBM7rZYxGhrEPV0yiY9d2j_uao0BJVAzTYU2XbitzswAauUUXiYrLPC1MAr2fGGFAZO8wmQM0GgbCTWnY_IssqVDu1u45a-Q8LfMZscaTsBYbkubiqv3vhcJwQtkbfM0"
                  />
                  <span className="text-sm font-semibold text-on-surface">Google</span>
                </button>

                <button
                  className="group flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container-lowest px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-primary/10"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    ios
                  </span>
                  <span className="text-sm font-semibold text-on-surface">Apple</span>
                </button>
              </div>

              <div className="relative mb-8 flex items-center">
                <div className="flex-grow border-t border-surface-container-highest" />
                <span className="mx-4 flex-shrink text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  أو عبر البريد
                </span>
                <div className="flex-grow border-t border-surface-container-highest" />
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group relative">
                  <input
                    className={`peer w-full rounded-xl border-none bg-surface-container-high px-5 py-4 text-on-surface placeholder-transparent transition-all duration-300 focus:ring-4 ${
                      errors.email ? 'focus:ring-red-200' : 'focus:ring-primary/10'
                    }`}
                    id="email"
                    name="email"
                    placeholder=" "
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label
                    className="pointer-events-none absolute right-5 top-4 origin-right text-on-surface-variant transition-all duration-300"
                    htmlFor="email"
                  >
                    البريد الإلكتروني
                  </label>
                  {errors.email ? (
                    <p className="mt-2 text-sm font-medium text-red-500">{errors.email}</p>
                  ) : null}
                </div>

                <div className="group relative">
                  <input
                    className={`peer w-full rounded-xl border-none bg-surface-container-high px-5 py-4 text-on-surface placeholder-transparent transition-all duration-300 focus:ring-4 ${
                      errors.password ? 'focus:ring-red-200' : 'focus:ring-primary/10'
                    }`}
                    id="password"
                    name="password"
                    placeholder=" "
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <label
                    className="pointer-events-none absolute right-5 top-4 origin-right text-on-surface-variant transition-all duration-300"
                    htmlFor="password"
                  >
                    كلمة المرور
                  </label>
                  <button
                    className="absolute left-4 top-4 text-on-surface-variant transition-colors hover:text-primary"
                    type="button"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  {errors.password ? (
                    <p className="mt-2 text-sm font-medium text-red-500">{errors.password}</p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between">
                  <label className="group flex cursor-pointer items-center gap-2">
                    <input
                      className="h-5 w-5 rounded-lg border-none bg-surface-container-high text-primary transition-all focus:ring-primary/20 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
                      تذكرني
                    </span>
                  </label>

                  <button
                    className="text-sm font-bold text-primary transition-colors hover:text-primary-container"
                    type="button"
                  >
                    نسيت كلمة المرور؟
                  </button>
                </div>

                <button
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-container py-4 text-lg font-bold text-white shadow-[0px_12px_32px_rgba(66,40,173,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_16px_40px_rgba(66,40,173,0.3)] active:scale-[0.98]"
                  type="submit"
                >
                  تسجيل الدخول
                </button>
              </form>

              <p className="mt-10 text-center text-on-surface-variant">
                ليس لديك حساب؟
                <button
                  type="button"
                  onClick={() => navigate(routes.signUp.path)}
                  className="ms-2 font-bold text-primary transition-all decoration-2 decoration-primary/30 underline-offset-4 hover:underline"
                >
                  إنشاء حساب جديد
                </button>
              </p>
            </div>
          </div>

          <AuthFooter />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-surface-container-low opacity-50 blur-3xl" />
        </section>
      </main>
    </>
  )
}
