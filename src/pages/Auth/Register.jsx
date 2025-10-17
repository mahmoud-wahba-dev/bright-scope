import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { useAuth } from "../../context/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect } from "react";

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
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);
  const { login } = useAuth();

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
      console.log("Register payload:", payload);
      const response = await apiHelper.post("/auth/register/", payload);
      console.log("Register response:", response.data);

      const { tokens, user, message } = response.data;
      const { access } = tokens;

      // ✅ Log user in immediately after registration
      login(user, access);

      notyf.success(message || "Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Register error:", error.response?.data);

      const details = error.response?.data?.details;

      if (details && typeof details === "object") {
        // ✅ Loop through each field and its error array
        Object.entries(details).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => notyf.error(msg));
          } else if (typeof messages === "string") {
            notyf.error(messages);
          }
        });
      } else {
        // ✅ Fallback general error
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
    Object.values(formErrors).forEach((err) => {
      if (err?.message) notyf.error(err.message);
    });
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
                      Create Your Account
                    </h2>
                    <p className="font-normal text-12px mb-8 text-primary">
                      Join Bright Scope for a cleaner future
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
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Full name"
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
                        Email address*
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
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
                        Phone Number
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
                            placeholder="Enter your phone number"
                            onChange={(value) => field.onChange("+" + value)} // ✅ Ensures +971 format
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
                        Password*
                      </label>
                      <div className="input">
                        <input
                          className="h-10"
                          id="userPassword"
                          type="password"
                          placeholder="Password"
                          {...register("password")}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          data-toggle-password='{ "target": "#userPassword" }'
                          className="block cursor-pointer"
                          aria-label="userPassword"
                        >
                          <span className="icon-[tabler--eye] password-active:block hidden size-5 shrink-0"></span>
                          <span className="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0"></span>
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
                        Confirm Password
                      </label>
                      <div className="input">
                        <input
                          className="h-10"
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          {...register("confirmPassword")}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          data-toggle-password='{ "target": "#confirmPassword" }'
                          className="block cursor-pointer"
                          aria-label="confirmPassword"
                        >
                          <span className="icon-[tabler--eye] password-active:block hidden size-5 shrink-0"></span>
                          <span className="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0"></span>
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
                          Signing up...
                          <span className="loading loading-spinner loading-sm"></span>
                        </>
                      ) : (
                        <>
                          Sign Up Now
                          <span className="icon-[mdi--arrow-right]"></span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="font-semibold text-14px mt-8 mb-4 text-center ">
                    Already have an account?
                    <Link
                      to="/login"
                      className="link link-animated ms-1.5 link-primary font-normal"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info side */}
          <div className="max-md:order-2">
            <h1 className="font-bold text-48px mb-8">
              Join The <span className="text-primary">Bright Scope</span> Family
            </h1>
            <p className="font-normal text-18px mb-8 lg:w-[70%]">
              A brighter, cleaner space is just a click away. Create your
              account to access premium cleaning services and eco-friendly
              solutions.
            </p>
            {[
              "Instant booking and scheduling",
              "Track your service history",
              "Eco-friendly cleaning solutions",
              "24/7 customer support",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 mb-4">
                <div className="size-10 center_flex rounded-full bg-primary text-white">
                  <div className="border-2 border-white rounded-full center_flex ">
                    <span className="icon-[mdi--check] size-5 font-bold"></span>
                  </div>
                </div>
                <p className="font-semibold text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
