import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'Videocubes',
      url: 'https://videocubes.ru/',
      tech: 'Tailwind, Flowbite',
      descKey: 'projects.videocubes',
    },
    {
      name: 'Dicolorled Russia',
      url: 'https://dicolorled.ru/',
      tech: 'Next.js, Tailwind, Flowbite',
      descKey: 'projects.dicolor',
    },
    {
      name: 'Katafot',
      url: 'https://www.katafot.su/',
      tech: 'Next.js, Tailwind',
      descKey: 'projects.katafot',
    },
    {
      name: 'GTL AM PRO',
      url: 'https://lampro.moscow/',
      tech: 'Bootstrap 5, jQuery, Slick.js',
      descKey: 'projects.lampro',
    },
    {
      name: '3D Cone Generator',
      url: 'https://github.com/elli-ma/cone',
      tech: 'Next.js, React Three Fiber, Three.js, TypeScript',
      descKey: 'projects.cone',
    },
    {
      name: 'Scroll Animation',
      url: 'https://github.com/elli-ma/scroll',
      tech: 'Next.js, GSAP, ScrollTrigger, Canvas, TypeScript',
      descKey: 'projects.scroll',
    },
    {
      name: 'Recipes',
      url: 'https://github.com/elli-ma/recipes',
      tech: 'Next.js, TypeScript, Tailwind, shadcn/ui',
      descKey: 'projects.recipes',
    },
    {
      name: 'Lichi Catalog',
      url: 'https://github.com/elli-ma/lichi-catalog',
      tech: 'Next.js, SWR Infinite, react-window, TypeScript',
      descKey: 'projects.lichi',
    },
    {
      name: 'AI Bag Shop',
      url: 'https://github.com/elli-ma/ai-bag-shop',
      tech: 'Vanilla JS, SCSS, BEM',
      descKey: 'projects.aibag',
    },
  ];

  return (
    <section id="portfolio" className="px-[8%] py-10 xl:py-14 xl:px-[12%] 2xl:px-[20%] 3xl:px-[28%] border-b-2 border-separator">
      <h2 className="section-title mb-8">{t("portfolio.title")}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map(({ name, url, tech, descKey }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group block p-5 border-2 border-brand-blue/20 dark:border-brand-cream/20
                       bg-brand-cream dark:bg-brand-navy-light
                       hover:border-brand-blue dark:hover:border-brand-cream hover:-translate-y-1
                       shadow-card hover:shadow-card-hover
                       transition-all duration-300 ease-out"
          >
            <h4 className="font-heading text-xl tracking-wider flex items-center justify-between
                          group-hover:text-brand-blue-light dark:group-hover:text-brand-cream
                          transition-colors duration-200">
              {name}
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-50 transition-opacity duration-200"></i>
            </h4>
            <p className="mt-2 text-sm opacity-70 leading-relaxed">{t(descKey)}</p>
            <p className="mt-3 text-xs opacity-40 font-bold">{tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
