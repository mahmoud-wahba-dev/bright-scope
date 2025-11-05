import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PeaceOfMind = () => {
  const { t } = useTranslation();
  return (
    <section className="my-7 md:my-20 md:p-14 p-7 bg-[linear-gradient(91.48deg,_#096732_0.13%,_#0B7A3B_100%)] rounded-20px text-center">
      <h5 className="font-semibold text-36px text-white mb-8">
        {t("peace.title")}
      </h5>
      <p className="font-semibold text-base text-white mb-8 md:max-w-[70%] mx-auto leading-7">
        {t("peace.paragraph")}
      </p>
      <div className="center_flex md:gap-6 gap-2 md:flex-wrap flex-nowrap  max-sm:flex-col max-sm:gap-3">
        <Link
          to="/services"
          className="btn btn-wide btn-primary md:min-w-[29rem] rounded-[55px] text-white h-14 font-semibold text-base md:px-8 md:py-6 hover:bg-primary-light_hover hover:border-none transition max-sm:w-full max-sm:px-6 max-sm:py-3 max-sm:text-sm"
        >
          {t("buttons.book_now")}
        </Link>
        <Link
          to="https://wa.me/971554467755"
          className="btn btn-wide btn-secondary md:min-w-44 rounded-[55px] h-14 text-primary-dark font-semibold text-base md:py-6 hover:text-white hover:border-none hover:bg-primary-light_hover transition max-sm:w-full max-sm:px-6 max-sm:py-3 max-sm:text-sm"
          target="_blank"
        >
          {t("buttons.chat_whatsapp")}
        </Link>
      </div>
    </section>
  );
};

export default PeaceOfMind;
