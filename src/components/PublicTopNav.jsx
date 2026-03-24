import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../siteData'
import { BrandLogo } from './BrandLogo'

const navItems = [
  { label: 'الأصناف', key: 'courses', path: routes.courses.path },
  { label: 'تعلمي', key: 'dashboard', path: routes.dashboard.path },
  { label: 'المدربون', key: 'instructors', path: routes.instructor.path },
]

export function PublicTopNav({
  active = 'courses',
  searchPlaceholder,
  maxWidth = 'max-w-8xl',
  progress = 'full',
  className = '',
}) {
  const navigate = useNavigate()

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b-2 border-transparent bg-white/75 backdrop-blur-xl shadow-[0px_12px_32px_rgba(28,25,45,0.06)] ${className}`}
    >
      <div
        className={`mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 ${maxWidth}`}
      >
        <div className="justify-self-start">
          <Link to={routes.home.path} className="inline-flex items-center">
            <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={
                item.key === active
                  ? 'border-b-2 border-violet-600 pb-1 font-bold text-violet-800'
                  : 'text-slate-600 transition-all duration-300 hover:text-violet-600'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="justify-self-end">
          <div className="flex items-center gap-4">
            {searchPlaceholder ? (
              <div className="relative hidden lg:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-64 rounded-full bg-surface-container-high py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                />
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => navigate(routes.signIn.path)}
              className="hidden rounded-xl px-6 py-2.5 font-bold text-primary transition-all duration-200 hover:bg-violet-50 sm:block"
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => navigate(routes.signUp.path)}
              className="rounded-xl bg-gradient-to-r from-primary to-primary-container px-6 py-2.5 font-bold text-on-primary transition-all duration-200 hover:scale-95 active:scale-90"
            >
              اشترك مجاناً
            </button>
            <button type="button" className="p-2 text-on-surface md:hidden">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`h-[2px] bg-gradient-to-r from-primary via-secondary to-tertiary opacity-40 ${
          progress === 'third' ? 'w-1/3' : 'w-full'
        }`}
      />
    </header>
  )
}
