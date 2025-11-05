import { useTranslation } from "react-i18next";

const OurJourney = () => {
  const { t } = useTranslation();
  return (
    <section className="mb-14 md:mb-7">
      <div className="md:px-14 px-6">
        <h2 className="font-bold text-48px mb-4 text-center">
          {t("journey.titlePrefix")} <span className="text-primary">{t("journey.titleHighlight")}</span>
        </h2>
        <p className="font-normal text-secondary-dark text-18px text-center mb-6">
          {t("journey.subtitle")}
        </p>

  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
          {/* uniform timeline items (left/right alternating) */}

          {/* item 1 - left (2010) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-start flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--location] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      {t('journey.items.0.year')}
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    {t('journey.items.0.title')}
                  </h5>
                  <p className="text-14px text-black font-normal">
                    {t('journey.items.0.desc')}
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-primary" />
          </li>

          {/* item 2 - right (2015) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-end flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--graph] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      {t('journey.items.1.year')}
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    {t('journey.items.1.title')}
                  </h5>
                  <p className="text-14px text-black font-normal">
                    {t('journey.items.1.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-start me-4 mb-8"></div>
            <hr className="bg-primary" />
          </li>

          {/* item 3 - left (2020) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-start flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--star] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      {t('journey.items.2.year')}
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    {t('journey.items.2.title')}
                  </h5>
                  <p className="text-14px text-black font-normal">
                    {t('journey.items.2.desc')}
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-primary" />
          </li>

          {/* item 4 - right (2025) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-end flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--star] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      {t('journey.items.3.year')}
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    {t('journey.items.3.title')}
                  </h5>
                  <p className="text-14px text-black font-normal">
                    {t('journey.items.3.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-start me-4 mb-8"></div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurJourney;
