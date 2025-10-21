import { Link, useNavigate, useParams } from "react-router-dom";
import { useServices } from "../../hooks/useServices";
import { useEffect, useState } from "react";

const Services = () => {
  const { services, loading } = useServices();
  const [activeTab, setActiveTab] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();
  // ✅ useEffect runs AFTER data is fetched

  // ✅ Set the active tab based on URL or default to first
  useEffect(() => {
    if (!loading && services.length > 0) {
      if (category) {
        // Match route param with backend service_type
        const matchedService = services.find(
          (s) => s.service_type === category
        );

        if (matchedService) {
          setActiveTab(matchedService.id);
        } else {
          // Fallback to first service if category not found
          setActiveTab(services[0].id);
        }
      } else if (activeTab === null) {
        // Default: first service
        setActiveTab(services[0].id);
      }
    }
  }, [loading, services, category]);

  // Add: utility to avoid calling .map on non-arrays and log helpful warnings
  function safeArray(value, path = "unknown") {
    if (Array.isArray(value)) return value;
    if (value == null) return [];
    // warn once for visibility in client console / Vercel logs
    console.warn(`Expected array at "${path}" but received:`, value);
    return [];
  }

  // Add: debug log the services payload after loading to help identify type issues
  useEffect(() => {
    if (!loading) {
      console.info("Services payload:", services);
      // If services is not an array, this will log the warning from safeArray below during render.
    }
  }, [loading, services]);

  return (
    <section className="my-7 md:my-14">
      <div className="container">
        <h1 className="font-bold text-48px mb-4 text-primary-dark text-center">
          Comprehensive{" "}
          <span className="text-primary">Cleaning Pest Control</span>
        </h1>

        <p className="font-normal text-secondary-dark text-18px text-center mb-8">
          Professional services designed to keep your spaces clean, healthy, and
          pest-free. Experience the difference with our expert team and
          eco-friendly solutions.
        </p>

        <div class="flex gap-6 max-md:flex-col">
          <nav
            class="tabs flex-col max-md:flex-row max-md:flex-wrap items-start space-y-1 min-w-[30%] rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A] h-fit"
            aria-label="Tabs"
            role="tablist"
            data-tabs-vertical="true"
            aria-orientation="horizontal"
          >
            <h4 className="font-semibold text-22px  mb-6 max-md:w-full">
              Choose Your Service
            </h4>
            {safeArray(services, "services").map((category) => (
              <button
                key={category.id}
                type="button"
                class={`${
                  activeTab === category.id ? "active" : ""
                }  btn justify-start gap-2 btn-text rounded-10px h-14 max-md:w-fit font-normal text-base active-tab:!border  active-tab:bg-[#D2E2D9] active-tab:text-[#0C8C43] active-tab:border-primary   hover:text-primary hover:bg-primary/20  w-full`}
                id={`tabs-pill-vertical-item-${category.id}`}
                data-tab={`#tabs-pill-vertical-${category.id}`}
                aria-controls={`tabs-pill-vertical-${category.id}`}
                aria-selected={activeTab === category.id}
                role="tab"
                onClick={() => {
                  setActiveTab(category.id);
                  navigate(`/services/${category.service_type}`);
                }}
              >
                <span className={`${category.icon} size-5 mr-2`}></span>
                {category.name}
              </button>
            ))}
          </nav>

          <div class="ms-3 w-full rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A] rounded-10px">
            {safeArray(services, "services").map((service) =>
              activeTab === service.id ? (
                <div
                  id={`tabs-pill-vertical-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`tabs-pill-vertical-item-${service.id}`}
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
                    What is Included
                  </h5>
                  <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2  mb-8">
                    {/* loop here for service contents */}
                    {safeArray(service.contents, `services[${service?.id}].contents`).length > 0 ? (
                      safeArray(service.contents, `services[${service?.id}].contents`).map((content) => (
                        <div key={content.id} className="flex items-center gap-3">
                          <span className="icon-[mdi--check-circle] text-primary size-6"></span>
                          <p className="text-base text-secondary-dark">{content.name}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-secondary-dark">
                        No content available.
                      </p>
                    )}
                  </div>

                  <div class="bg-[#F2F2F2] p-4 rounded-15px flex items-center flex-wrap justify-center gap-8 ">
                    {safeArray(service.features, `services[${service?.id}].features`).length > 0 ? (
                      safeArray(service.features, `services[${service?.id}].features`).map((feature) => (
                        <div className="px-11" key={feature?.id ?? feature?.name}>
                          <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                            <span
                              className={`${feature.icon} size-8 text-white`}
                            ></span>
                          </div>
                          <p className="font-semibold text-18px text-center">
                            {feature.description}
                          </p>
                          <p className="font-normal text-14px text-center text-secondary-dark">
                            {feature.name}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-secondary-dark">
                        No features available.
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/service/${service.id}`} // e.g. /services/home_cleaning
                    className="btn btn-primary w-full h-14 rounded-55px font-semibold text-base mt-8"
                  >
                    Book Now
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
