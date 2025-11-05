import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
  const { t } = useTranslation();
  return (
    <section className="my-7 md:my-14 text-center">
      <h1 className="font-bold text-48px  mb-4">
        {t("contact_page.getInTouchTitlePrefix")} <span className="text-primary">{t("contact_page.getInTouchTitleHighlight")}</span>
      </h1>
      <p className="font-normal text-18px mb-14 text-secondary-dark">
        {t("contact_page.getInTouchSubtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="p-4 shadow-[0_0_10px_0_#00000040] rounded-10px">
          <div className="size-16 rounded-full bg-[linear-gradient(135deg,_#00C955_0%,_#00D490_100%)] mb-6 m-auto center_flex text-white ">
            <span className="icon-[tabler--phone]   text-35px text-white "></span>
          </div>
          <h2 className="text-28px font-semibold mb-1 ">{t("contact_page.card.call_us")}</h2>
          <h3 className="font-semibold text-22px text-primary mb-1">
            {t("contact_page.card.dubai_office")}
          </h3>
          <p className="font-normal text-base  text-secondary-dark mb-6">
            {t("contact_page.card.call_description")}
          </p>
          <div>
            <Link
              to="tel:+971800247686"
              className="btn rounded-55px h-14 border-0 font-semibold text-base bg-[linear-gradient(90deg,_#01CC60_0%,_#00D284_100%)] "
            >
              +971 800 247686
            </Link>
          </div>
        </div>

        <div className="p-4 shadow-[0_0_10px_0_#00000040] rounded-10px">
          <div className="size-16 rounded-full bg-[linear-gradient(90deg,_#01B044_0%,_#01BD4A_100%)] mb-6 m-auto center_flex text-white ">
            <span className="icon-[tabler--message]   text-35px text-white "></span>
          </div>
          <h2 className="text-28px font-semibold mb-1 ">{t("contact_page.card.whatsapp_us")}</h2>
          <h3 className="font-semibold text-22px text-primary mb-1">
            {t("contact_page.card.instant_response")}
          </h3>
          <p className="font-normal text-base  text-secondary-dark mb-6">
            {t("contact_page.card.whatsapp_description")}
          </p>
          <div>
            <Link
              to="tel:+971800247686"
              className="btn rounded-55px h-14 border-0 font-semibold text-base bg-[linear-gradient(90deg,_#01B044_0%,_#01BD4A_100%)] "
            >
              Chat Now
            </Link>
          </div>
        </div>

        <div className="p-4 shadow-[0_0_10px_0_#00000040] rounded-10px">
          <div className="size-16 rounded-full bg-[linear-gradient(135deg,_#1A90FF_0%,_#00C2F7_100%)] mb-6 m-auto center_flex text-white ">
            <span className="icon-[tabler--mail]   text-35px text-white "></span>
          </div>
          <h2 className="text-28px font-semibold mb-1 ">{t("contact_page.card.email_support")}</h2>
          <h3 className="font-semibold text-22px text-primary mb-1">
            {t("contact_page.card.twentyfour_support")}
          </h3>
          <p className="font-normal text-base  text-secondary-dark mb-6">
            {t("contact_page.card.email_description")}
          </p>
          <div>
            <Link
              to="mailto:Info@brightscope.ae"
              className="btn rounded-55px h-14 border-0 font-semibold text-base bg-[linear-gradient(135deg,_#1A90FF_0%,_#00C2F7_100%)] "
            >
              Info@brightscope.ae
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
