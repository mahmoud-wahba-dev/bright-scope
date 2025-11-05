import { useTranslation } from "react-i18next";

const ContactHint = () => {
  const { t } = useTranslation();
  return (
    <section className="my-7 md:my-20 md:p-14 p-7 bg-[linear-gradient(91.48deg,_#096732_0.13%,_#0B7A3B_100%)] rounded-20px text-center">
      <h5 className="font-semibold text-36px text-white mb-8">
        {t("contact_page.hintTitle")}
      </h5>
      <p className="font-semibold text-base text-white  md:max-w-[70%] mx-auto leading-7">
        {t("contact_page.hintParagraph")}
      </p>
    </section>
  );
};

export default ContactHint;
