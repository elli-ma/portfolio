import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="section-container flex-col xl:flex-row">
      <div className="w-full xl:w-1/5 mb-4 xl:mb-0">
        <h2 className="section-title">{t("skills.title")}</h2>
      </div>
      <div className="w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { key: 'item1', text: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS, SASS, HTML.' },
          { key: 'item3', text: 'Three.js, React Three Fiber, GSAP, React Native, Expo.' },
          { key: 'backend', text: 'Node.js.' },
          { key: 'item2', text: 'Figma.' },
        ].map(({ key, text, title }) => (
          <div key={key} className="group">
            <h3 className="font-heading text-xl xl:text-2xl tracking-wider leading-snug
                           group-hover:text-brand-blue-light dark:group-hover:text-brand-cream/70 transition-colors duration-200">
              {title || t(`skills.${key}`)}
            </h3>
            <p className="mt-1 text-sm leading-relaxed opacity-70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
