import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { useTranslation } from "react-i18next";

const schema = z
  .object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const ResetPassword = () => {
  const { uid, token } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await apiHelper.post("auth/reset-password-confirm/", {
        uid,
        token,
        new_password: data.new_password,
      });
      notyf.success(res.data?.msg || "Password reset successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      notyf.error(
        error.response?.data?.error || "Failed to reset password. Try again."
      );
    }
  };

  return (
    <section className="my-7 md:my-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6 min-h-[calc(100vh-88px)]">
          <div className="max-md:order-2">
            <h1 className="font-bold text-48px mb-8">
              {t("auth.forgot.title_prefix")}{" "}
              <span className="text-primary">
                {t("auth.forgot.title_highlight")}
              </span>
            </h1>
            <p className="font-normal text-18px mb-8 lg:w-[70%]">
              {t("auth.forgot.subtitle")}
            </p>

            {[1, 2, 3, 4].map((num) => {
              const active = num === 3;
              return (
                <div key={num} className="flex items-center gap-2 mb-4">
                  <div
                    className={`size-10 center_flex rounded-full ${
                      active ? "bg-primary text-white" : "bg-disabled"
                    }`}
                  >
                    <span>{num}</span>
                  </div>
                  <p
                    className={`font-semibold text-base ${
                      active ? "text-primary" : ""
                    }`}
                  >
                    {t(`auth.forgot.step${num}`)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-md:order-1">
            <div className="flex items-center justify-center">
              <div className="w-full bg-surface-light shadow-[0_0_20px_0_#00000040] space-y-6 rounded-30px p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h2 className="font-semibold text-36px mb-1">
                    {t("auth.reset.card_title") || "Reset Your Password"}
                  </h2>
                  <p className="font-normal text-12px text-primary">
                    {t("auth.reset.card_subtitle") || "Enter your new password"}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="label-text font-medium mb-1.5">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="input h-10"
                      {...register("new_password")}
                    />
                    {errors.new_password && (
                      <p className="text-error text-sm mt-1">
                        {errors.new_password.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="label-text font-medium mb-1.5">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="input h-10"
                      {...register("confirm_password")}
                    />
                    {errors.confirm_password && (
                      <p className="text-error text-sm mt-1">
                        {errors.confirm_password.message}
                      </p>
                    )}
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-gradient h-14 rounded-55px btn-block uppercase mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Resetting..." : "Reset Password"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
