import { useNavigate } from 'react-router-dom'
import { BrandLogo } from '../components/BrandLogo'
import { usePageSetup } from '../hooks/usePageSetup'
import { routes } from '../siteData'

const pageStyles = `body {
  font-family: 'Tajawal', 'Plus Jakarta Sans', sans-serif;
  background-color: #fdf8ff;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.custom-gradient-bg {
  background: linear-gradient(135deg, #5a45c6 0%, #d1688c 100%);
}`

export function SignUpPage() {
  usePageSetup('SignUpPage')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(routes.signIn.path)
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

              <div className="glass-panel absolute -bottom-6 -right-6 rounded-xl border border-white/20 p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 space-x-reverse">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      alt="User avatar 1"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzT9YEQz83LEkY2bvdiJPJxwJT2PvC-mTZ_VFh7JSZq6LTJqXW6LOJ-tBNDTTeXEbHWOYjPqKzA7DGv7VjiRgoPTVZCgZzTVC68eb24Xom88CG-VWg8KGkAldIUElUPOgb8i-jnHHyZQRZMxVthrqqgzNUUZOcU9stf3OJyWgHb8F5n29PfLbxMmpM2IZEEAZ6QtnZA7dcjHRSQLylDnxLpPzCKQkAw-wQ3bL7nXCA1h5GUzwVMEcT5tHx0K5e3mHCDMeu-of6jdqQ"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      alt="User avatar 2"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0xpj1Y5Ot0kkbcyaTwMPA3HNHuc7konypueU8_afyjOqiYzDd6xTzAuidxkikvWCx8nrMMs95ADQuzGjoYV82NZ-ouWIDNO1JwbjnG1Nl4Wi79OZpJiaQHm27TtfXwS1J49Dv1ELlOwadWjFvuevDnairlH-hH_CjNy3cnXw49zq3MFV7DxhQfqKRlXEi8hXPXWXLFVHGPk8_JmPDxoCSp80rNf7VNQVOanlUpylAKB9QId-6x5uDHx4NchDe3K4QrVphuC0mJUP7"
                    />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-secondary text-[10px] font-bold">
                      +150k
                    </div>
                  </div>
                </div>
              </div>
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

            <div className="mb-8 grid grid-cols-2 gap-4">
              <button
                className="group flex items-center justify-center gap-2 rounded-xl border-2 border-surface-container px-4 py-3 transition-all duration-200 hover:bg-surface-container-low"
                type="button"
              >
                <img
                  className="h-5 w-5 grayscale group-hover:grayscale-0"
                  alt="Google logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfqjHNcrjrO8S2k0v5WAAYVN695dZUEDrIa0Hg6Mejss_XNeTOpPD13ogPyAuBix_V8ZftkSlTjW6CWuT8gOaWX9_GpTjDmZW6X_9O4zVTfyX5RRPQOx4IoHQtE_w22cuvaYd7JvgQivWIzOrVFcQJoSOFqqLlAncx0KnnE2b5E_VFC03mk4ujXqaanYNPM4-uL0Vi1f7gn2X-0P1pI-pHduxd-IFK7-cN0MCjuTKS0O_yPMj2JPBoFmG3nyrEfq3JI9e11Io6R0Bi"
                />
                <span className="text-sm font-semibold text-on-surface-variant">
                  Google
                </span>
              </button>

              <button
                className="group flex items-center justify-center gap-2 rounded-xl border-2 border-surface-container px-4 py-3 transition-all duration-200 hover:bg-surface-container-low"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-xl text-on-surface-variant transition-colors group-hover:text-black"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  ios
                </span>
                <span className="text-sm font-semibold text-on-surface-variant">
                  Apple
                </span>
              </button>
            </div>

            <div className="relative mb-8 flex items-center">
              <div className="flex-grow border-t border-surface-variant/50" />
              <span className="bg-white px-4 text-xs font-medium text-outline-variant">
                أو عبر البريد الإلكتروني
              </span>
              <div className="flex-grow border-t border-surface-variant/50" />
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-right">
                <label
                  className="mr-1 text-sm font-bold text-on-surface-variant"
                  htmlFor="name"
                >
                  الاسم الكامل
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    person
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-right">
                <label
                  className="mr-1 text-sm font-bold text-on-surface-variant"
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="email"
                    placeholder="example@domain.com"
                    type="email"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    mail
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-right">
                <label
                  className="mr-1 text-sm font-bold text-on-surface-variant"
                  htmlFor="password"
                >
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                    lock
                  </span>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant transition-colors hover:text-primary"
                    type="button"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                <p className="mr-1 mt-1 text-[10px] text-outline-variant">
                  يجب أن تتكون من 8 أحرف على الأقل.
                </p>
              </div>

              <div className="flex items-center gap-3 py-2 text-right">
                <input
                  className="h-5 w-5 cursor-pointer rounded-lg border-surface-variant text-primary focus:ring-primary/20"
                  id="terms"
                  type="checkbox"
                />
                <label
                  className="cursor-pointer text-xs leading-relaxed text-on-surface-variant"
                  htmlFor="terms"
                >
                  أوافق على{' '}
                  <button
                    type="button"
                    className="font-bold text-primary hover:underline"
                  >
                    شروط الخدمة
                  </button>{' '}
                  و{' '}
                  <button
                    type="button"
                    className="font-bold text-primary hover:underline"
                  >
                    سياسة الخصوصية
                  </button>
                  .
                </label>
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
