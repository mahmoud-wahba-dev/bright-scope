import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="my-7 md:my-14">
      <div className="container">
        <h1 className="font-bold text-48px mb-4 text-primary-dark text-center">
          Comprehensive{" "}
          <span className="text-primary">Cleaning Pest Control</span>
        </h1>
        <p className="font-normal text-secondary-dark text-18px text-center mb-8">
          Professional services designed to keep your spaces clean, healthy, and
          pest-free. Experience the difference with our expert team and
          eco-friendly solutions.
        </p>

        <div class="flex gap-6 ">
          <nav
            class="tabs flex-col items-start space-y-1 min-w-[30%] rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A] h-fit"
            aria-label="Tabs"
            role="tablist"
            data-tabs-vertical="true"
            aria-orientation="horizontal"
          >
            <h4 className="font-semibold text-22px  mb-6">
              Choose Your Service
            </h4>
            <button
              type="button"
              class="btn justify-start gap-2 btn-text rounded-10px h-14 font-normal text-base active-tab:!border  active-tab:bg-[#D2E2D9] active-tab:text-[#0C8C43] active-tab:border-primary   hover:text-primary hover:bg-primary/20 active w-full"
              id="tabs-pill-vertical-item-1"
              data-tab="#tabs-pill-vertical-1"
              aria-controls="tabs-pill-vertical-1"
              role="tab"
              aria-selected="true"
            >
              <span class="icon-[ic--round-home] size-5 mr-2"></span>
              Home Cleaning
            </button>
          </nav>

          <div class="ms-3 w-full rounded-10px p-4 bg-surface-light shadow-[0px_4px_10px_0px_#0000001A] rounded-10px">
            <div
              id="tabs-pill-vertical-1"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-1"
            >
              <div className="flex items-center gap-9 p-4 mb-4 bg-[#D2E2D9] rounded-10px">
                <div className="size-20 rounded-full bg-primary center_flex  shadow-[0px_0px_17.8px_0px_#00000040]">
                  <span className="icon-[ic--round-home] size-10 text-white"></span>
                </div>

                <div>
                  <h6 className="font-semibold text-22px mb-1">
                    Home Cleaning
                  </h6>
                  <p className="font-normal text-14px ">
                    Professional home cleaning services for a spotless living
                    space
                  </p>
                </div>
              </div>
              <h5 className="font-semibold text-22px mb-2">What is Included</h5>
              <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2  mb-8">
                <div className="flex items-center gap-2  w-[50%] ">
                  <span class="icon-[charm--circle-tick] size-6 text-primary"></span>
                  <p className="font-normal text-18px text-primary-dark">
                    Deep cleaning
                  </p>
                </div>

                <div className="flex items-center gap-2  w-[50%]">
                  <span class="icon-[charm--circle-tick] size-6 text-primary"></span>
                  <p className="font-normal text-18px text-primary-dark">
                    Deep cleaning
                  </p>
                </div>

                <div className="flex items-center gap-2  w-[50%]">
                  <span class="icon-[charm--circle-tick] size-6 text-primary"></span>
                  <p className="font-normal text-18px text-primary-dark">
                    Deep cleaning
                  </p>
                </div>

                <div className="flex items-center gap-2  w-[50%]">
                  <span class="icon-[charm--circle-tick] size-6 text-primary"></span>
                  <p className="font-normal text-18px text-primary-dark">
                    Deep cleaning
                  </p>
                </div>
              </div>

              <div class="bg-[#F2F2F2] p-4 rounded-15px flex items-center flex-wrap justify-center gap-8 ">
                <div className="px-11">
                  <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                    <span class="icon-[mingcute--time-fill] size-8 text-white"></span>
                  </div>
                  <p className="font-semibold text-18px text-center">2-4 H</p>
                  <p className="font-normal text-14px text-center text-secondary-dark">
                    Duration
                  </p>
                </div>
                <div className="px-11">
                  <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                    <span class="icon-[mingcute--star-fill] size-8 text-white"></span>
                  </div>
                  <p className="font-semibold text-18px text-center">4.9</p>
                  <p className="font-normal text-14px text-center text-secondary-dark">
                    Rating
                  </p>
                </div>

                <div className="px-11">
                  <div className="size-14 rounded-full bg-primary mb-2 center_flex m-auto  shadow-[0px_0px_17.8px_0px_#00000040]">
                    <span class="icon-[mdi--leaf] size-8 text-white"></span>
                  </div>
                  <p className="font-semibold text-18px text-center">100%</p>
                  <p className="font-normal text-14px text-center text-secondary-dark">
                    Eco-safe
                  </p>
                </div>
              </div>
              <Link
                to="#"
                class="btn btn-primary w-full h-14 rounded-55px font-semibold text-base mt-8"
              >
                Book Now
                <span class="icon-[mdi--arrow-right] ml-2"></span>
              </Link>
            </div>
            <div
              id="tabs-pill-vertical-2"
              class="hidden"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-2"
            >
              <p class="text-base-content/80">
                This is your{" "}
                <span class="text-base-content font-semibold">Profile</span>{" "}
                tab, where you can update your personal information and manage
                your account details.
              </p>
            </div>
            <div
              id="tabs-pill-vertical-3"
              class="hidden"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-3"
            >
              <p class="text-base-content/80">
                <span class="text-base-content font-semibold">Messages:</span>{" "}
                View your recent messages, chat with friends, and manage your
                conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
