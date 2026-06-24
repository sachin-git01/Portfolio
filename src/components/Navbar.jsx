import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems } from '../data/portfolio.js';

export default function Navbar({ activeSection, theme, themeLabel, onSectionChange, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    onSectionChange(id);
    const offset = id === 'home' ? 0 : 92;
    window.scrollTo({
      top: Math.max(target.offsetTop - offset, 0),
      behavior: 'smooth'
    });
    closeMenu();
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full" onClick={(event) => scrollToSection(event, 'home')}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan to-plasma shadow-neon">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="hidden font-display text-lg font-bold sm:block">Sachin.dev</span>
        </a>

        <div className="hidden items-center gap-1 min-[900px]:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id)}
              className={`focus-ring rounded-full px-2.5 py-2 text-[0.72rem] font-semibold text-white/72 transition hover:text-white light:text-[#24344d] xl:px-4 xl:text-sm ${
                activeSection === item.id ? 'active-pill' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={onToggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:border-cyan/60 hover:text-cyan light:border-[#091223]/15 light:bg-white/70 light:text-[#091223]"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:border-cyan/60 hover:text-cyan light:border-[#091223]/15 light:bg-white/70 light:text-[#091223] min-[900px]:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-3 grid max-w-6xl gap-1 rounded-[1.6rem] p-3 min-[900px]:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id)}
              className={`focus-ring rounded-2xl px-4 py-3 text-sm font-semibold ${
                activeSection === item.id ? 'active-pill' : 'text-white/80 light:text-[#24344d]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
