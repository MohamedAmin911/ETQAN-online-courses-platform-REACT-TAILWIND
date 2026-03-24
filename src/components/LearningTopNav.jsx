import { Link } from 'react-router-dom'
import { routes } from '../siteData'
import { BrandLogo } from './BrandLogo'

export function LearningTopNav() {
  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-primary-container bg-white/80 px-8 shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-6">
        <Link
          to={routes.home.path}
          className="bg-gradient-to-r from-violet-800 to-fuchsia-600 bg-clip-text text-2xl font-bold text-transparent"
        >
          <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link className="text-slate-600 transition-colors hover:text-violet-600" to={routes.home.path}>
            الرئيسية
          </Link>
          <Link className="border-b-2 border-violet-600 font-bold text-violet-900" to={routes.watch.path}>
            مساراتي
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-violet-600" to={routes.courses.path}>
            المكتبة
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button type="button" className="rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary-container">
          <img
            alt="الملف الشخصي"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATfaJ7tU7bnmxJ7YWIu7MEZJ_LXplgn7PlUM5oJxYRYHlpRHPHteDlS2bg3Iu54_Vcj2QV5Zw21z_GOpw6hDRMNpGASHKNeZ5J1u8M9TD4J2loT2nyuAHgXY8oVXuBJQnOm1s6kda-ebGqk677NWqbdgrbyGk_x8TaiUEnx4hn8MIUCbLHA8TKKCFQDxBO0n8ca9uhOb5aVIPUg4okUd94_-e_MZR_vvDJlZQ9Yp9IrNppZBMGqZnW-CAUMoue5I0NB-jjiZXHs4R8"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-[2px] w-[65%] bg-gradient-to-l from-primary to-tertiary" />
    </nav>
  )
}
