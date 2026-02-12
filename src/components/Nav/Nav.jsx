import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Nav({ toggleTheme, changeLanguage, isDark, language }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-blue z-50
                     px-[8%] py-3
                     xl:px-[12%]
                     2xl:px-[20%] 2xl:py-5
                     3xl:px-[28%]">
      <div className="flex items-center justify-between">
        {/* Hamburger — mobile only */}
        <button
          className="xl:hidden text-brand-cream p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden xl:flex items-center gap-6">
          {['about-me', 'skills', 'education', 'portfolio'].map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-xs uppercase font-heading tracking-widest text-brand-cream/70
                           hover:text-brand-cream transition-colors duration-200
                           relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-cream
                           hover:after:w-full after:transition-all after:duration-300"
              >
                {t(`nav.item${i + 1}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme + Language buttons */}
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 rounded-full border-2 border-brand-cream/40 flex items-center justify-center text-xs text-brand-cream
                       hover:bg-brand-cream hover:text-brand-blue transition-all duration-200"
            onClick={() => changeLanguage(language)}
          >
            <span className="font-bold text-[10px] leading-none">{language === 'en' ? 'RU' : 'EN'}</span>
          </button>
          <button
            className="w-8 h-8 rounded-full border-2 border-brand-cream/40 flex items-center justify-center text-xs text-brand-cream
                       hover:bg-brand-cream hover:text-brand-blue transition-all duration-200"
            onClick={toggleTheme}
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <ul className={`xl:hidden flex flex-col gap-3 pt-4 overflow-hidden transition-all duration-300
                      ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        {['about-me', 'skills', 'education', 'portfolio'].map((id, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-sm uppercase font-heading tracking-widest text-brand-cream/70
                         hover:text-brand-cream transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.item${i + 1}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
