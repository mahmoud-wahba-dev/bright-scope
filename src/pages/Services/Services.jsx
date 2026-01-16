import { Link } from "react-router-dom";
import { useServices } from "../../hooks/useServices";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Services = () => {
  const { services, loading } = useServices();
  const { t, i18n } = useTranslation();

  const getLocalized = (obj, field) => {
    if (!obj) return "";
    const langField = `${field}_${i18n.language}`;
    return obj[langField] ?? obj[field] ?? "";
  };

  const servicesList = Array.isArray(services)
    ? services
    : services && typeof services === "object"
    ? Object.values(services)
    : [];

  const formatIcon = (icon) =>
    icon?.replace("icon-[", "")?.replace("--", ":")?.replace("]", "")?.trim();

  if (loading) {
    return (
      <section className="my-7 md:my-14">
        <div className="container">
          <p className="text-center">{t("loading", { defaultValue: "Loading..." })}</p>
        </div>
      </section>
    );
  }

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

        <div className="mt-10">
          <h4 className="font-semibold text-22px mb-4">
            {t("choose_service")}
          </h4>
          {servicesList.length === 0 ? (
            <p className="text-secondary-dark">
              {t("no_services_available", { defaultValue: "No services available." })}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service) => (
                <Link
                  key={service.id}
                  to={`/booking/${service.service_type}`}
                  className="block rounded-15px overflow-hidden shadow-[0px_4px_10px_0px_#0000001A] bg-surface-light hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gray-100 flex items-center justify-center">
                    {service.icon ? (
                      <Icon
                        icon={formatIcon(service.icon)}
                        className="text-primary text-5xl"
                      />
                    ) : (
                      <span className="text-secondary-dark text-lg">
                        {getLocalized(service, "name")}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {getLocalized(service, "name")}
                    </h3>
                    <p className="text-sm text-secondary-dark mb-4">
                      {getLocalized(service, "description")}
                    </p>
                    <button className="btn btn-primary w-full rounded-55px h-12 font-semibold text-base">
                      {t("book_now")}
                      <span className="icon-[mdi--arrow-left] ms-2 rtl-flip"></span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
