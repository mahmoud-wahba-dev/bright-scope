import { Link } from "react-router-dom";

const Login = () => {
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
                    <form class="mb-4 space-y-4" onsubmit="return false;">
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
                          required
                        />
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
                            placeholder="············"
                            required
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
                      </div>
                      <div class="flex items-center justify-between gap-y-2">
                        <div class="flex items-center gap-2">
                          <input
                            type="checkbox"
                            class="checkbox checkbox-primary"
                            id="rememberMe"
                          />
                          <label
                            class="label-text text-14px font-normal"
                            for="rememberMe"
                          >
                            Remember Me
                          </label>
                        </div>
                        <Link
                            to="/forgot-password"
                          class="link link-animated link-primary text-14px font-normal"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <button class="btn btn-lg btn-primary btn-gradient h-14 rounded-55px btn-block uppercase">
                        Login
                        <span className="icon-[mdi--arrow-right]"></span>
                      </button>
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
