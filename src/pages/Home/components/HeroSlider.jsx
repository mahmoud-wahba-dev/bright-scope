import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const HeroSlider = () => {
  const slide1 = "assets/imgs/home/slide1.webp";
  const slide2 = "assets/imgs/home/slide2.webp";
  const slide3 = "assets/imgs/home/slide3.webp";
  const heroSlides = [
    {
      img: slide1,
      alt: "Home Cleaning",
      title:
        "Dubai’s Trusted Cleaning & Pest Control Experts — Fresh Homes, Healthy Spaces.",
      sutitle: "WE LET YOUR HOME BREATHE SAFETY",
      category: "Home Cleaning",
    },

    {
      img: slide2,
      alt: "Pest Control",
      title:
        "Dubai’s Trusted Cleaning & Pest Control Experts — Fresh Homes, Healthy Spaces.",
      sutitle: "WE LET YOUR HOME BREATHE SAFETY",
      category: "Pest Control",
    },

    {
      img: slide3,
      alt: "Office Cleaning",
      title:
        "Dubai’s Trusted Cleaning & Pest Control Experts — Fresh Homes, Healthy Spaces.",
      sutitle: "WE LET YOUR HOME BREATHE SAFETY",
      category: "Office Cleaning",
    },
  ];
  return (
    <>
      <div
        id="image"
        data-carousel='{ "loadingClasses": "opacity-0" }'
        className="relative w-full pt-5"
      >
        <div className="carousel">
          <div className="carousel-body h-full opacity-0">
            {/* <!-- Slide 1 --> */}
            {heroSlides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <div className="flex h-full justify-center relative">
                  <img
                    src={slide.img}
                    className="size-full object-cover"
                    alt={slide.alt}
                  />
                  <div className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[68%] max-md:w-full">
                    <p className="text-base  font-normal text-white mb-6">
                      {slide.category}
                    </p>

                    <h1 className="text-primary_light font-bold text-5xl  mb-8 leading-normal">
                      {slide.title}
                    </h1>
                    <div className="center_flex gap-6  flex-wrap mb-8">
                      <Link
                        to="/services"
                        className="btn btn-wide btn-primary min-w-[20rem] rounded-[55px] text-white font-semibold text-base px-8 py-6  hover:bg-primary_light_hover hover:border-none transition"
                        target="_blank"
                      >
                        Book Now
                      </Link>
                      <Link
                        to="/services"
                        className="btn btn-wide btn-secondary  min-w-[20rem] rounded-[55px] text-primary-dark font-semibold text-base px-8 py-6 hover:text-white hover:border-none  hover:bg-primary_light_hover  transition"
                      >
                        Our Services
                      </Link>
                    </div>
                    <h3 className=" text-xl font-bold text-[#F1F2F2] mb-4 ">
                      - <span className="px-5">{slide.sutitle}</span> -
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            <div className="layer absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        {/* <!-- Previous Slide --> */}
        <button
          type="button"
          className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
        >
          <span className="icon-[cil--arrow-left]  size-9.5 text-white font-normal"></span>
          <span className="sr-only">Previous</span>
        </button>
        {/* <!-- Next Slide --> */}
        <button
          type="button"
          className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5  flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
        >
          <span className="icon-[cil--arrow-right] size-9.5 text-white font-normal"></span>
          <span className="sr-only">Next</span>
        </button>
        <div className="absolute bottom-10 start-44  flex items-center gap-2 ">
          <ScrollLink
            className="w-[92px] h-[88px] btn cursor-pointer animate-bounce transition-all duration-1000 center_flex glass bg-white/10 rounded-full overflow-hidden "
            to="services"
            smooth={true}
            duration={600}
            offset={-100}
          >
            <span className="icon-[fluent--arrow-down-28-regular] text-white text-5xl"></span>
          </ScrollLink>
          <p className="text-white  font-normal text-base">See all services</p>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
