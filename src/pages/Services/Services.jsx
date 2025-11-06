import { Link, useNavigate, useParams } from "react-router-dom";
import { useServices } from "../../hooks/useServices";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"; // ✅ استيراد المكتبة الجديدة

const Services = () => {
  const { services, loading } = useServices();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  const servicesList = Array.isArray(services)
    ? services
    : services && typeof services === "object"
    ? Object.values(services)
    : [];

  useEffect(() => {
    if (!loading && servicesList.length > 0) {
      if (category) {
        const matchedService = servicesList.find(
          (s) => s.service_type === category
        );

        if (matchedService) {
          setActiveTab(matchedService.id);
        } else {
          setActiveTab(servicesList[0].id);
        }
      } else if (activeTab === null) {
        setActiveTab(servicesList[0].id);
      }
    }
  }, [loading, services, category]);

  // 🔄 helper لتحويل الكلاس القادم من الباك لصيغة iconify
  const formatIcon = (icon) =>
    icon?.replace("icon-[", "")?.replace("--", ":")?.replace("]", "")?.trim();

  return (
    <section className="my-7 md:my-14">
      <div className="container">
        <h1 className="font-bold text-48px mb-4 text-primary-dark text-center">
          {t("comprehensive_title_part1")}{" "}
          <span className="text-primary">{t("comprehensive_title_part2")}</span>
        </h1>

        <p className="font-normal text-secondary-dark text-18px text-center mb-8">
          {t("services_description")}
        </p>

        <div className="flex gap-6 max-md:flex-col">
          <nav
            className="tabs flex-col max-md:flex-row max-md:flex-wrap items-start space-y-1 min-w-[30%] rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A] h-fit"
            aria-label="Tabs"
            role="tablist"
            data-tabs-vertical="true"
            aria-orientation="horizontal"
          >
            <h4 className="font-semibold text-22px mb-6 max-md:w-full">
              {t("choose_service")}
            </h4>
            {servicesList.map((svc, idx) => {
              const isActive = activeTab === svc.id;
              return (
                <button
                  key={svc?.id ?? svc?.service_type ?? idx}
                  type="button"
                  className={`flex items-center gap-2 w-full justify-start rounded-10px h-14 px-3 font-normal text-base transition-all duration-200
        ${
          isActive
            ? "bg-[#D2E2D9] text-[#0C8C43] border border-primary shadow-sm"
            : "text-secondary-dark hover:text-primary hover:bg-primary/10"
        }`}
                  onClick={() => {
                    setActiveTab(svc.id);
                    navigate(`/services/${svc.service_type}`);
                  }}
                >
                  <Icon
                    icon={svc.icon
                      ?.replace("icon-[", "")
                      ?.replace("--", ":")
                      ?.replace("]", "")
                      ?.trim()}
                    className={`size-5 transition-colors ${
                      isActive
                        ? "text-[#0C8C43]"
                        : "text-gray-500 group-hover:text-primary"
                    }`}
                  />
                  <span className="truncate">{svc.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="ms-3 w-full rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A]">
            {servicesList.map((service, sIdx) =>
              activeTab === service.id ? (
                <div
                  key={service?.id ?? sIdx}
                  id={`tabs-pill-vertical-${service.id ?? sIdx}`}
                  role="tabpanel"
                  aria-labelledby={`tabs-pill-vertical-item-${
                    service.id ?? sIdx
                  }`}
                >
                  <div className="flex items-center gap-9 p-4 mb-4 bg-[#D2E2D9] rounded-10px">
                    <div className="size-20 rounded-full bg-primary center_flex shadow-[0px_0px_17.8px_0px_#00000040] max-md:size-auto">
                      <Icon
                        icon={formatIcon(service.icon)}
                        className="text-white size-10"
                      />
                    </div>

                    <div>
                      <h6 className="font-semibold text-22px mb-1">
                        {service.name}
                      </h6>
                      <p className="font-normal text-14px">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <h5 className="font-semibold text-22px mb-2">
                    {t("what_is_included")}
                  </h5>

                  <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 mb-8">
                    {Array.isArray(service.contents) &&
                    service.contents.length > 0 ? (
                      service.contents.map((content) => (
                        <div
                          key={content.id ?? content.name}
                          className="flex items-center gap-3"
                        >
                          <Icon
                            icon="mdi:check-circle"
                            className="text-primary size-6"
                          />
                          <p className="text-base text-secondary-dark">
                            {content.name}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-secondary-dark">{t("no_content")}</p>
                    )}
                  </div>

                  <div className="bg-[#F2F2F2] p-4 rounded-15px flex items-center flex-wrap justify-center gap-8">
                    {service.features.length > 0 ? (
                      service.features.slice(0, 3).map((feat, i) => (
                        <div className="px-11" key={i}>
                          <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto shadow-[0px_0px_17.8px_0px_#00000040]">
                            <Icon
                              icon={
                                ["mdi:clock", "mingcute:star-fill", "mdi:leaf"][
                                  i
                                ]
                              }
                              className="text-white size-8"
                            />
                          </div>
                          <p className="font-semibold text-18px text-center">
                            {feat.name}
                          </p>
                          <p className="font-normal text-14px text-center text-secondary-dark">
                            {feat.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-secondary-dark">{t("no_features")}</p>
                    )}
                  </div>

                  <Link
                    to={`/service/${service.id}`}
                    className="btn btn-primary w-full h-14 rounded-55px font-semibold text-base mt-8"
                  >
                    {t("book_now")}
                    <Icon icon="mdi:arrow-right" className="ml-2" />
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
