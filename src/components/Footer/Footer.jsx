import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-blue text-brand-cream">
      <div className="max-w-md mx-auto py-5 px-4 text-center">
        <p className="font-heading text-lg tracking-wider uppercase">
          {t("footer.text")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
