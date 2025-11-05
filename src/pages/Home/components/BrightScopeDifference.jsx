import React from "react";
import { useTranslation } from "react-i18next";

const BrightScopeDifference = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-[#0B7A3B] to-[#096732] rounded-20px mb-44">
      <div className="px-6 md:px-32 py-14  flex gap-6 items-center max-md:flex-wrap">
        <div className="min-w-[120px]">
          <img
            className=""
            src="../../../assets/imgs/home/logo_bright_xl.webp"
            alt=""
          />
        </div>



        <div>
          <h6 className="font-semibold text-28px mb-3 text-white">
            {t("brightscope_difference_heading")}
          </h6>
          <p className="font-normal text-18px text-white    ">
            {t("brightscope_difference_paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrightScopeDifference;
