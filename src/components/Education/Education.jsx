import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="section-container flex-col xl:flex-row">
      <div className="w-full xl:w-1/5 mb-4 xl:mb-0">
        <h2 className="section-title">{t("education.title")}</h2>
      </div>
      <div className="w-full xl:w-2/3">
        <h4 className="font-heading text-xl xl:text-2xl tracking-wider leading-snug">
          {t("education.name")}
        </h4>
        <span className="text-sm font-bold mt-1 inline-block opacity-70">
          2009 — 2014
        </span>
        <p className="mt-2 text-sm leading-relaxed opacity-70">
          {t("education.text")}
        </p>
      </div>
    </section>
  );
}
export default Education;
