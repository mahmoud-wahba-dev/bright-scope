import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ✅ Validation schema
const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Submit handler
  const onSubmit = async (data) => {
    try {
      const response = await apiHelper.post("auth/reset-password-email/", data);
      console.log("Forgot :", response);

      notyf.success(
        response.data?.msg ||
          "A password reset code has been sent to your email."
      );

      // ✅ Optional: navigate to verification page
      // navigate("/verify-reset-code");
    } catch (error) {
      console.error("Forgot password error:", error);

      const details = error.response?.data?.details;

      if (details && typeof details === "object") {
        Object.entries(details).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => notyf.error(msg));
          } else if (typeof messages === "string") {
            notyf.error(messages);
          }
        });
      } else {
        notyf.error(
          error.response?.data?.error ||
            error.response?.data?.message ||
            "Failed to send reset code. Please try again."
        );
      }
    }
  };

  const onError = (formErrors) => {
    Object.values(formErrors).forEach((err) => {
      if (err?.message) notyf.error(err.message);
    });
  };

  return (
    <section className="my-7 md:my-14">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6 min-h-[calc(100vh-88px)]">
          <div className="max-md:order-2">
            <h1 className="font-bold text-48px mb-8">
              {t("auth.forgot.title_prefix")} <span className="text-primary">{t("auth.forgot.title_highlight")}</span>
            </h1>
            <p className="font-normal text-18px mb-8 lg:w-[70%]">{t("auth.forgot.subtitle")}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-primary text-white">
                <div className=" ">
                  <span className="">1</span>
                </div>
              </div>
              <p className="font-semibold  text-base">{t("auth.forgot.step1")}</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-disabled ">
                <div className=" ">
                  <span className="font-semibold text-base">2 </span>
                </div>
              </div>
              <p className="font-semibold  text-base">{t("auth.forgot.step2")}</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-disabled ">
                <div className=" ">
                  <span className="font-semibold text-base">3 </span>
                </div>
              </div>
              <p className="font-semibold  text-base">{t("auth.forgot.step3")}</p>
            </div>{" "}
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-disabled ">
                <div className=" ">
                  <span className="font-semibold text-base">4 </span>
                </div>
              </div>
              <p className="font-semibold  text-base">{t("auth.forgot.step4")}</p>
            </div>
          </div>
          <div className="max-md:order-1">
            <div class="flex h-auto  items-center justify-center  xl:pt-4 max-md:pt-12">
              <div class=" w-full flex items-center justify-center">
                <div class="w-full bg-surface-light shadow-[0_0_20px_0_#00000040]  space-y-6 rounded-30px p-6  lg:p-8">
                    <div class="text-center">
                    <div className="flex justify-center mb-2 size-28 rounded-full bg-primary text-white center_flex m-auto shadow-[0_4px_4px_#00000040]">
                      <span class="icon-[solar--key-bold] size-16"></span>
                    </div>
                    <h2 class="font-semibold text-36px mb-1">{t("auth.forgot.card_title")}</h2>
                    <p className="font-normal text-12px mb-8 text-primary">{t("auth.forgot.card_subtitle")}</p>
                  </div>

                  <div class="space-y-4">
                    <form
                      class="mb-4 space-y-4"
                      onSubmit={handleSubmit(onSubmit, onError)}
                    >
                      <div>
                        <label class="label-text font-medium mb-1.5" htmlFor="userEmail">{t("auth.fields.email_label")}</label>
                        <input type="email" placeholder={t("auth.placeholders.email")} class="input h-10" id="userEmail" {...register("email")} disabled={isSubmitting} />

                        {errors.email && (
                          <p className="text-error text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <p className="font-normal text-14px text-[#64748B]">{t("auth.forgot.will_send_code_note")}</p>

                      <button
                        class="btn btn-lg btn-primary btn-gradient h-14 rounded-55px btn-block uppercase mt-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            {t("auth.forgot.sending")}
                            <span className="loading loading-spinner loading-sm"></span>
                          </>
                        ) : (
                          <>
                            {t("auth.forgot.send_reset_code")}
                            <span className="icon-[mdi--arrow-right]"></span>
                          </>
                        )}
                      </button>
                    </form>
                    <div class="font-normal text-base mt-8 mb-4 text-center center_flex ">
                        <Link to="/login" class="link link-animated ms-1.5 link-primary text-primary-dark font-normal flex items-center">
                        <span class="icon-[lets-icons--back] me-1"></span>
                        {t("auth.back_to_login")}
                      </Link>
                    </div>

                    <div className="bg-[#E9EDED] p-4 rounded-lg ">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span class="icon-[iconamoon--shield-yes] size-6 text-primary"></span>
                        <p className="font-semibold text-12px">{t("auth.forgot.security_note_title")}</p>
                      </div>
                      <p className="font-normal text-14px text-[#4A5565]">{t("auth.forgot.security_note_body")}</p>
                    </div>
                    {/* <div class="divider">or</div>
                    <button class="btn btn-text btn-block">
                      <img
                        src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-icon.png"
                        alt="google icon"
                        class="size-5 object-cover"
                      />
                      Sign in with google
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
