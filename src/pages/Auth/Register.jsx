
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { useAuth } from "../../context/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// ✅ Validation schema with Zod
const schema = z
  .object({
    full_name: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .optional()
      .or(z.literal("")) // ✅ Handle undefined/empty
      .refine((val) => val && val.length >= 8, {
        message: "Phone number must be at least 9 digits",
      }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) navigate("/");
  }, [navigate]);
  const { login } = useAuth();
  const { t } = useTranslation();

  // password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ setup form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ form submission handler
  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.full_name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        password2: data.confirmPassword,
      };
      const response = await apiHelper.post("/auth/register/", payload);

      const { tokens, user, message } = response.data;
      const access = tokens?.access;

      if (!access) {
        notyf.error("Registration failed: no access token returned from server.");
        return;
      }

      // Log user in immediately after registration (AuthContext will persist using cookies)
      login(user, access);

      // Ensure token stored in cookie
      const storedToken = Cookies.get("token");
      if (!storedToken) {
        notyf.error("Registration failed: unable to store authentication token.");
        return;
      }

      notyf.success(message || "Registration successful!");
      navigate("/");
    } catch (error) {
      // في حالة الخطأ من الباك
      const details = error.response?.data?.details;

      // نظهر فقط أول error من كل المدخلات (أو السيرفر)
      let firstError = null;
      if (details && typeof details === "object") {
        Object.entries(details).some(([field, messages]) => {
          if (Array.isArray(messages) && messages.length > 0) {
            firstError = messages[0];
            return true;
          } else if (typeof messages === "string") {
            firstError = messages;
            return true;
          }
          return false;
        });
      }
      if (firstError) {
        notyf.error(firstError);
      } else {
        notyf.error(
          error.response?.data?.error ||
            error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      }
    }
  };

  // ✅ error handler for form validation
  const onError = (formErrors) => {
    // نظهر فقط أول error بدلاً من الطباعة المتسلسلة
    const firstErrMsg =
      Object.values(formErrors).map((err) => err?.message).find(Boolean);
    if (firstErrMsg) {
      notyf.error(firstErrMsg);
    }
  };

  return (
    <section className="my-7 md:my-14">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6 min-h-[calc(100vh-88px)]">
          {/* Form side */}
          <div className="max-md:order-1">
            <div className="flex h-auto items-center justify-center xl:pt-4 max-md:pt-12">
              <div className="xl:w-[80%] w-[90%] flex items-center justify-center xl:px-6">
                <div className="w-full bg-surface-light shadow-[0_0_20px_0_#00000040] space-y-6 rounded-30px p-6 lg:p-8">
                    <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <img
                        src="/assets/imgs/global/logo_auth.svg"
                        alt="brand-logo"
                      />
                    </div>
                    <h2 className="font-semibold text-36px mb-1">
                      {t("auth.register.title")}
                    </h2>
                    <p className="font-normal text-12px mb-8 text-primary">
                      {t("auth.register.subtitle")}
                    </p>
                  </div>

                  <form
                    className="mb-4 space-y-4"
                    onSubmit={handleSubmit(onSubmit, onError)}
                    noValidate
                  >
                    <div>
                      <label
                        className="label-text font-medium mb-1.5"
                        htmlFor="userName"
                      >
                        {t("auth.fields.full_name")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("auth.placeholders.full_name")}
                        className="input h-10"
                        id="userName"
                        {...register("full_name")}
                        disabled={isSubmitting}
                      />
                      {errors.full_name && (
                        <p className="text-error text-sm mt-1">
                          {errors.full_name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="label-text font-medium mb-1.5"
                        htmlFor="userEmail"
                      >
                        {t("auth.fields.email_label")}
                      </label>
                      <input
                        type="email"
                        placeholder={t("auth.placeholders.email")}
                        className="input h-10"
                        id="userEmail"
                        {...register("email")}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-error text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="label-text font-medium mb-1.5"
                        htmlFor="userPhone"
                      >
                        {t("auth.fields.phone")}
                      </label>
                      <Controller
                        name="phone"
                        control={control}
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            country={"ae"} // 🇦🇪 Default to UAE
                            enableSearch={true}
                            disableDropdown={false}
                            inputClass="!w-full !h-10"
                            inputProps={{
                              name: "phone",
                              required: true,
                              autoFocus: false,
                            }}
                            placeholder={t("auth.placeholders.phone")}
                            onChange={(value) => field.onChange("+" + value)}
                          />
                        )}
                      />
                      {errors.phone && (
                        <p className="text-error text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="label-text font-medium mb-1.5"
                        htmlFor="userPassword"
                      >
                        {t("auth.fields.password_label")}
                      </label>
                      <div className="input">
                        <input
                          className="h-10"
                          id="userPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder={t("auth.placeholders.password")}
                          autoComplete="new-password"
                          {...register("password")}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((s) => !s)}
                          className="block cursor-pointer"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          <span className={`${showPassword ? "block" : "hidden"} icon-[tabler--eye] size-5 shrink-0`}></span>
                          <span className={`${showPassword ? "hidden" : "block"} icon-[tabler--eye-off] size-5 shrink-0`}></span>
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-error text-sm mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="label-text font-medium mb-1.5"
                        htmlFor="confirmPassword"
                      >
                        {t("auth.fields.confirm_password")}
                      </label>
                      <div className="input">
                        <input
                          className="h-10"
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder={t("auth.placeholders.confirm_password")}
                          autoComplete="new-password"
                          {...register("confirmPassword")}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((s) => !s)}
                          className="block cursor-pointer"
                          aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        >
                          <span className={`${showConfirmPassword ? "block" : "hidden"} icon-[tabler--eye] size-5 shrink-0`}></span>
                          <span className={`${showConfirmPassword ? "hidden" : "block"} icon-[tabler--eye-off] size-5 shrink-0`}></span>
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-error text-sm mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-lg btn-primary btn-gradient h-14 rounded-55px btn-block uppercase mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          {t("auth.register.signing_up")}
                          <span className="loading loading-spinner loading-sm"></span>
                        </>
                      ) : (
                        <>
                          {t("auth.register.sign_up_button")}
                          <span className="icon-[mdi--arrow-right]"></span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="font-semibold text-14px mt-8 mb-4 text-center ">
                    {t("auth.already_have")}
                    <Link
                      to="/login"
                      className="link link-animated ms-1.5 link-primary font-normal"
                    >
                      {t("auth.sign_in")}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info side */}
          <div className="max-md:order-2">
            <h1 className="font-bold text-48px mb-8">
              {t("auth.register.info_title_prefix")} <span className="text-primary">{t("auth.register.info_title_highlight")}</span> {t("auth.register.info_title_suffix")}
            </h1>
            <p className="font-normal text-18px mb-8 lg:w-[70%]">
              {t("auth.register.info_subtitle")}
            </p>
            {[
              "auth.features.instant_booking",
              "auth.features.track_history",
              "auth.features.eco_friendly",
              "auth.features.support_247",
            ].map((key) => (
              <div key={key} className="flex items-center gap-2 mb-4">
                <div className="size-10 center_flex rounded-full bg-primary text-white">
                  <div className="border-2 border-white rounded-full center_flex ">
                    <span className="icon-[mdi--check] size-5 font-bold"></span>
                  </div>
                </div>
                <p className="font-semibold text-base">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
