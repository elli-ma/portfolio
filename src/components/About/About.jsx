import { useTranslation } from "react-i18next";

function FlowerDecor({ className }) {
  return (
    <svg className={className} viewBox="0 0 253 253" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M123.392 0.792288C109.962 6.34729 105.091 44.7803 112.43 87.2993C113.185 91.6773 113.706 95.3583 113.586 95.4783C113.466 95.5973 110.12 91.3403 106.151 86.0173C83.3671 55.4633 60.4901 36.2993 45.3001 35.0393C40.5661 34.6463 39.4491 34.9053 37.3431 36.8843C35.3631 38.7453 34.8921 40.1673 34.8921 44.2913C34.8921 58.6723 54.4921 82.8563 84.0101 104.896C94.6751 112.859 95.9071 114.055 92.8921 113.525C75.9741 110.549 63.7241 109.448 48.3921 109.525C23.5041 109.651 9.42907 113.045 2.88507 120.499C-1.16993 125.117 -0.979932 128.206 3.64207 132.802C14.7261 143.824 47.6531 146.824 85.8921 140.296C90.5671 139.497 94.7781 138.843 95.2501 138.841C95.7211 138.839 90.6481 142.915 83.9751 147.898C54.8621 169.638 36.3461 192.112 35.1681 207.138C34.7221 212.824 34.8951 213.536 37.2521 215.73C39.5321 217.851 40.4851 218.062 45.6701 217.592C49.0361 217.287 53.6681 215.972 56.5851 214.494C70.6321 207.376 88.7851 190.1 104.409 168.983C109.311 162.357 113.443 157.055 113.589 157.202C113.736 157.349 113.206 161.264 112.411 165.903C106.763 198.857 108.066 228.948 115.769 243.431C120.862 253.007 125.946 255.188 131.764 250.292C143.168 240.696 146.863 204.78 140.298 167.338C139.526 162.938 138.894 158.727 138.893 157.98C138.893 157.234 143.024 162.184 148.074 168.98C164.176 190.652 186.504 211.082 199.662 216.183C206.26 218.74 212.442 218.379 215.569 215.252C217.879 212.942 218.096 212.108 217.612 207.414C216.121 192.968 200.419 173.02 173.928 151.915C168.658 147.717 162.646 143.231 160.567 141.946C158.488 140.661 156.974 139.423 157.202 139.195C157.43 138.967 161.391 139.429 166.004 140.222C207.197 147.308 243.656 142.968 251.18 130.084C253.014 126.944 253.016 126.755 251.229 123.097C248.942 118.418 239.955 113.612 228.892 111.154C217.622 108.649 189.529 108.899 171.455 111.665C163.79 112.838 157.415 113.694 157.289 113.568C157.163 113.441 162.519 109.288 169.191 104.338C175.863 99.3883 186.542 90.1633 192.921 83.8383C210.016 66.8873 218.671 52.5873 217.607 43.0473C216.925 36.9333 214.669 34.8383 208.766 34.8383C193.392 34.8383 167.056 56.7343 144.538 88.2373C141.433 92.5823 138.893 95.5073 138.893 94.7373C138.894 93.9683 139.535 89.7003 140.318 85.2543C147.008 47.2403 142.812 10.2543 130.883 2.08829C127.347 -0.332712 126.476 -0.483712 123.392 0.792288Z" />
    </svg>
  );
}

function About() {
  const { t } = useTranslation();
  return (
    <div id="about-me" className="pt-12 xl:pt-[70px]">
      <section className="section-container flex-col-reverse xl:flex-row items-center border-b-2">
        {/* Text column */}
        <div className="flex flex-col justify-between w-full xl:w-1/2 animate-fade-in-up">
          <div>
            <h1 className="font-heading text-6xl xl:text-8xl leading-none tracking-wider uppercase">
              {t("aboutme.title")}
            </h1>
            <p className="mt-2 font-heading text-xl xl:text-2xl tracking-wider uppercase opacity-80">
              Frontend Developer
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {t("aboutme.text")}
            </p>
          </div>

          {/* Contact info — vertical list like in the reference */}
          <ul className="mt-6 space-y-3">
            <li>
              <a href="mailto:ellidev9225@gmail.com" className="flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full bg-brand-blue dark:bg-brand-cream text-brand-cream dark:text-brand-navy flex items-center justify-center text-xs shrink-0
                               group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-sm">ellidev9225@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/elli_dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full bg-brand-blue dark:bg-brand-cream text-brand-cream dark:text-brand-navy flex items-center justify-center text-xs shrink-0
                               group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-paper-plane"></i>
                </span>
                <span className="text-sm">@elli_dev</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/elli-ma" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full bg-brand-blue dark:bg-brand-cream text-brand-cream dark:text-brand-navy flex items-center justify-center text-xs shrink-0
                               group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-code"></i>
                </span>
                <span className="text-sm">github.com/elli-ma</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Decorative flower column */}
        <div className="w-full xl:w-1/2 mb-6 xl:mb-0 flex items-center justify-end">
          <FlowerDecor className="w-44 h-44 xl:w-80 xl:h-80 text-brand-blue dark:text-brand-cream animate-spin-slow xl:-mr-[12%]" />
        </div>
      </section>
    </div>
  );
}
export default About;
