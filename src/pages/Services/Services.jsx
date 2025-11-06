import { Link, useNavigate, useParams } from "react-router-dom";
import { useServices } from "../../hooks/useServices";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { services, loading } = useServices();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  // Normalize services into a safe array to avoid ".map is not a function" in production
  const servicesList = Array.isArray(services)
    ? services
    : services && typeof services === "object"
    ? Object.values(services)
    : [];

  // ✅ useEffect runs AFTER data is fetched
  useEffect(() => {
    if (!loading && servicesList.length > 0) {
      if (category) {
        // Match route param with backend service_type
        const matchedService = servicesList.find(
          (s) => s.service_type === category
        );

        if (matchedService) {
          setActiveTab(matchedService.id);
        } else {
          // Fallback to first service if category not found
          setActiveTab(servicesList[0].id);
        }
      } else if (activeTab === null) {
        // Default: first service
        setActiveTab(servicesList[0].id);
      }
    }
  }, [loading, services, category]);

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
            <h4 className="font-semibold text-22px  mb-6 max-md:w-full">
              {t("choose_service")}
            </h4>
            {servicesList.map((svc, idx) => (
              <button
                key={svc?.id ?? svc?.service_type ?? idx}
                type="button"
                className={`${
                  activeTab === svc.id ? "active" : ""
                } btn justify-start gap-2 btn-text rounded-10px h-14 max-md:w-fit font-normal text-base active-tab:!border  active-tab:bg-[#D2E2D9] active-tab:text-[#0C8C43] active-tab:border-primary hover:text-primary hover:bg-primary/20 w-full`}
                id={`tabs-pill-vertical-item-${svc.id ?? idx}`}
                data-tab={`#tabs-pill-vertical-${svc.id ?? idx}`}
                aria-controls={`tabs-pill-vertical-${svc.id ?? idx}`}
                aria-selected={activeTab === svc.id}
                role="tab"
                onClick={() => {
                  setActiveTab(svc.id);
                  navigate(`/services/${svc.service_type}`);
                }}
              >
                <span className={`${svc.icon} size-5 mr-2`}></span>
                {svc.name}
              </button>
            ))}
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
                    <div className="size-20 rounded-full bg-primary center_flex  shadow-[0px_0px_17.8px_0px_#00000040] max-md:size-auto ">
                      <span
                        className={`${service.icon} size-10 text-white max-md:scale-75 max-md:size-auto `}
                      ></span>
                    </div>

                    <div>
                      <h6 className="font-semibold text-22px mb-1">
                        {service.name}
                      </h6>
                      <p className="font-normal text-14px ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <h5 className="font-semibold text-22px mb-2">
                    {t("what_is_included")}
                  </h5>
                  <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2  mb-8">
                    {/* loop here for service contents */}
                    {Array.isArray(service.contents) &&
                    service.contents.length > 0 ? (
                      service.contents.map((content) => (
                        <div
                          key={content.id ?? content.name}
                          className="flex items-center gap-3"
                        >
                          <span className="icon-[mdi--check-circle] text-primary size-6"></span>
                          <p className="text-base text-secondary-dark">
                            {content.name}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-secondary-dark">{t("no_content")}</p>
                    )}
                  </div>

                  <div className="bg-[#F2F2F2] p-4 rounded-15px flex items-center flex-wrap justify-center gap-8 ">
                    {service.features.length > 0 ? (
                      <>
                        <div className="px-11">
                          <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                            <span
                              className={`icon-[mdi--clock] size-8 text-white`}
                            ></span>
                          </div>
                          <p className="font-semibold text-18px text-center">
                            {service.features[0]?.name}
                          </p>
                          <p className="font-normal text-14px text-center text-secondary-dark">
                            {service.features[0]?.description}
                          </p>
                        </div>

                        <div className="px-11">
                          <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                            <span
                              className={`icon-[mingcute--star-fill] size-8 text-white`}
                            ></span>
                          </div>
                          <p className="font-semibold text-18px text-center">
                            {service.features[1]?.name}
                          </p>
                          <p className="font-normal text-14px text-center text-secondary-dark">
                            {service.features[1]?.description}
                          </p>
                        </div>

                        <div className="px-11">
                          <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                            <span
                              className={`icon-[mdi--leaf] size-8 text-white`}
                            ></span>
                          </div>
                          <p className="font-semibold text-18px text-center">
                            {service.features[2]?.name}
                          </p>
                          <p className="font-normal text-14px text-center text-secondary-dark">
                            {service.features[2]?.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-secondary-dark">{t("no_features")}</p>
                    )}
                  </div>
                  <Link
                    to={`/service/${service.id}`}
                    className="btn btn-primary w-full h-14 rounded-55px font-semibold text-base mt-8"
                  >
                    {t("book_now")}
                    <span className="icon-[mdi--arrow-right] ml-2"></span>
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
