import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const { t } = useTranslation();
  const items = [
    {
      iconClass: "icon-[material-symbols--flag-rounded]",
      title: t("mission.missionTitle"),
      description: t("mission.missionDescription"),
      points: [
        t("mission.missionPoint1"),
        t("mission.missionPoint2"),
        t("mission.missionPoint3"),
        t("mission.missionPoint4"),
      ],
    },
    {
      iconClass: "icon-[material-symbols--other-admission-rounded]",
      title: t("mission.visionTitle"),
      description: t("mission.visionDescription"),
      points: [
        t("mission.visionPoint1"),
        t("mission.visionPoint2"),
        t("mission.visionPoint3"),
        t("mission.visionPoint4"),
      ],
    },
  ];
  return (
    <section className="my-7 md:my-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.isArray(items) && items.map((item, index) => (
            <div
              key={index}
              className="rounded-10px p-4 shadow-[0_0_10px_0_#00000040]"
            >
              <div className="size-14 center_flex bg-primary rounded-8px mb-4">
                <span
                  className={item.iconClass + " text-36px text-white font-bold"}
                ></span>
              </div>
              <h4 className="font-semibold text-22px mb-6 "> {item.title} </h4>
              <p className="font-normal text-18px mb-4">{item.description}</p>

              {Array.isArray(item.points) && item.points.map((point, index) => (
                <div key={index} className="flex items-center gap-1 mb-1.5">
                  <div className="size-6 center_flex  rounded-8px ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5001 7.98716C13.0001 10.4872 11.1152 12.8408 8.4694 13.3671C5.82362 13.8934 3.13874 12.6627 1.81037 10.3148C0.481997 7.96693 0.809937 5.0317 2.62373 3.03488C4.43752 1.03805 7.50009 0.487171 10.0001 1.48717"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 6.98718L7.5 9.48718L13.5 2.98718"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-14px text-secondary-dark">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
