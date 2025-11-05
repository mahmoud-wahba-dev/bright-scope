import { useTranslation } from "react-i18next";

const AboutBrightScope = () => {
  const { t } = useTranslation();
  const aboutBrightItems = [
    {
      iconClass: "icon-[mdi--calendar]",
      title: "15+",
      subtitle: "Years Experience",
    },
    {
      iconClass: "icon-[mdi--emoticon-happy-outline]",
      title: "10,000+",
      subtitle: "Happy Customers",
    },
    {
      iconClass: "icon-[mdi--earth]",
      title: "50+",
      subtitle: "Cities Served",
    },
    {
      iconClass: "icon-[mdi--sparkles]",
      title: "99%",
      subtitle: "Satisfaction Rate",
    },
  ];

  return (
    <section className="py-7 md:py-14 text-center">
      <div className="md:px-28 px-4">
        <h1 className="font-bold text-48px mb-4">
          {t("about_page.titlePrefix")} <span className="text-primary">{t("about_page.titleHighlight")}</span>
        </h1>
        <p className="font-normal text-18px text-secondary-dark mb-14">
          {t("about_page.subtitle")}
        </p>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {Array.isArray(aboutBrightItems) && aboutBrightItems.map((item, index) => (
            <div key={index}>
              <div className="size-20  bg-primary text-white rounded-full center_flex mb-4 mx-auto">
                <span className={`${item.iconClass} text-40px`}></span>
              </div>

              <p className="font-semibold text-36px mb-1">{item.title}</p>
              <p className="font-semibold text-22px text-secondary-dark">
                {t(`about_page.stats.${index}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBrightScope;
