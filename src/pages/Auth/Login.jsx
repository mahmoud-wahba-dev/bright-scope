import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { useAuth } from "../../context/AuthContext";
// form validation schema
const schema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);
  // setup form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      // Debug: Check value of rememberMe
      console.log("Remember Me value:", data.rememberMe);

      const response = await apiHelper.post("/auth/login/", data);
      console.log("Login response:", response.data);

      // ✅ Destructure correctly
      const { tokens, user, message } = response.data;
      const { access } = tokens;

      // ✅ Save login info to localStorage
      // ✅ Save based on rememberMe checkbox

      login(user, access, data.rememberMe);
      console.log("Remember Me value:", data.rememberMe);

      // localStorage.setItem("token", access);
      // localStorage.setItem("refreshToken", refresh);
      // localStorage.setItem("user", JSON.stringify(user));

      // ✅ Notify success
      notyf.success(message || "Login successful!");

      // ✅ Redirect to dashboard/home
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      // ✅ Handle backend error gracefully
      notyf.error(
        error.response?.data?.errors?.non_field_errors?.[0] ||
          error.response?.data?.message ||
          "Login failed. Please try again."
      );
    }
  };

  const onError = (formErrors) => {
    Object.values(formErrors).forEach((err) => {
      if (err?.message) {
        notyf.error(err.message);
      }
    });
  };

  return (
    <section className="my-7 md:my-14">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6 min-h-[calc(100vh-88px)]">
          <div className="max-md:order-2">
            <h1 className="font-bold text-48px mb-8">
              Welcome Back to <br />
              <span className="text-primary"> Bright Scope</span>
            </h1>
            <p className="font-normal text-18px mb-8 lg:w-[70%]">
              A brighter, cleaner space is just a click away. Log in to access
              your personalized cleaning services and manage your bookings.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-primary text-white">
                <div className="border-2 border-white rounded-full center_flex ">
                  <span className="icon-[mdi--check] size-5 font-bold"></span>
                </div>
              </div>
              <p className="font-semibold  text-base">
                Instant booking and scheduling
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-primary text-white">
                <div className="border-2 border-white rounded-full center_flex ">
                  <span className="icon-[mdi--check] size-5 font-bold"></span>
                </div>
              </div>
              <p className="font-semibold  text-base">
                Track your service history
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-primary text-white">
                <div className="border-2 border-white rounded-full center_flex ">
                  <span className="icon-[mdi--check] size-5 font-bold"></span>
                </div>
              </div>
              <p className="font-semibold  text-base">
                Eco-friendly cleaning solutions
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 center_flex rounded-full bg-primary text-white">
                <div className="border-2 border-white rounded-full center_flex ">
                  <span className="icon-[mdi--check] size-5 font-bold"></span>
                </div>
              </div>
              <p className="font-semibold  text-base">24/7 customer support</p>
            </div>
          </div>
          <div className="max-md:order-1">
            <div class="flex h-auto  items-center justify-center  xl:pt-4 max-md:pt-12">
              <div class="xl:w-[80%] w-[90%] flex items-center justify-center  xl:px-6">
                <div class="w-full bg-surface-light shadow-[0_0_20px_0_#00000040]  space-y-6 rounded-30px p-6  lg:p-8">
                  <div class="text-center">
                    <div className="flex justify-center mb-2">
                      <img
                        src="/assets/imgs/global/logo_auth.svg"
                        class=""
                        alt="brand-logo"
                      />
                    </div>
                    <h2 class="font-semibold text-36px mb-1">Welcome Back</h2>
                    <p className="font-normal text-12px mb-8 text-primary">
                      Sign in to your Bright Scope account
                    </p>
                  </div>

                  <div class="space-y-4">
                    <form
                      class="mb-4 space-y-4"
                      onSubmit={handleSubmit(onSubmit, onError)}
                      noValidate
                    >
                      <div>
                        <label
                          class="label-text font-medium mb-1.5"
                          for="userEmail"
                        >
                          Email address*
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          class="input h-10"
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
                          class="label-text font-medium mb-1.5"
                          for="userPassword"
                        >
                          Password*
                        </label>
                        <div class="input">
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
                            class="block cursor-pointer"
                            aria-label="userPassword"
                          >
                            <span class="icon-[tabler--eye] password-active:block hidden size-5 shrink-0"></span>
                            <span class="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0"></span>
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-error text-sm mt-1">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            id="rememberMe"
                            {...register("rememberMe")}

                              
                          />
                          <label
                            className="label-text text-14px font-normal"
                            htmlFor="rememberMe"
                          >
                            Remember Me
                          </label>
                        </div>
                        <Link
                          to="/forgot-password"
                          className="link link-animated link-primary text-14px font-normal"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-lg btn-primary btn-gradient h-14 rounded-55px btn-block uppercase "
                      >
                        {isSubmitting ? (
                          <>
                            Logging in...
                            <span class="loading loading-spinner loading-sm"></span>
                          </>
                        ) : (
                          <>
                            Login
                            <span className="icon-[mdi--arrow-right]"></span>
                          </>
                        )}
                      </button>

                      {/* <button
                        disabled={isSubmitting}
                        class="btn btn-lg btn-primary  btn-gradient h-14 rounded-55px btn-block uppercase"
                      >
                        Login
                        {loading ? (
                          <span class="loading loading-spinner loading-sm"></span>
                        ) : (
                          <span className="icon-[mdi--arrow-right]"></span>
                        )}
                      </button> */}
                    </form>
                    <p class="font-semibold text-14px mt-8 mb-4 text-center ">
                      Don’t have an account?
                      <Link
                        to="/register"
                        class="link link-animated ms-1.5 link-primary font-normal"
                      >
                        Create an account
                      </Link>
                    </p>
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

export default Login;
