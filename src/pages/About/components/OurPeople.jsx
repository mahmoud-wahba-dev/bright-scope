import { useTranslation } from "react-i18next";

const OurPeople = () => {
  const { t } = useTranslation();
  const items = [
    {
      icon: "icon-[iconamoon--shield]",
      title: t("people.item1.title"),
      description: t("people.item1.description"),
    },
    {
      icon: "icon-[iconamoon--certificate-badge-fill]",
      title: t("people.item2.title"),
      description: t("people.item2.description"),
    },
    {
      icon: "icon-[mdi--leaf]",
      title: t("people.item3.title"),
      description: t("people.item3.description"),
    },
    {
      icon: "icon-[mdi--heart]",
      title: t("people.item4.title"),
      description: t("people.item4.description"),
    },
  ];
  return (
    <section className="my-7 md:my-20">
      <div className="container text-center">
        <h2 className="font-bold text-48px mb-4">
          {t("people.titlePrefix")} <span className="text-primary">{t("people.titleHighlight")}</span>
        </h2>
        <p className="font-normal text-18px mb-14 text-secondary-dark">
          {t("people.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(items) && items.map((item, index) => (
            <div key={index}>
              <div className="size-28 m-auto bg-[linear-gradient(135deg,_#0B7A3B_0%,_#096732_100%)] shadow-[0_4px_4px_0_#00000040] center_flex  rounded-full  mb-6">
                <span className={`${item.icon} text-62px text-white`}></span>
              </div>
              <h3 className="font-semibold text-18px mb-2">{item.title}</h3>
              <p className="font-normal text-14px text-secondary-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
