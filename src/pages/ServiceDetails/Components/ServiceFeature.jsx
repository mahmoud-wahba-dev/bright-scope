import { useNavigate } from "react-router-dom";

const ServiceFeature = ({ serviceDetails }) => {
  const navigate = useNavigate();
  return (
    <section className="my-3 md:my-6 border-b border-[#E0E0E0] pb-4 md:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 mb-8 text-primary "
          >
            <span className="icon-[mdi--arrow-left]"></span>
            <span className="font-normal text-base ">Back to Services</span>
          </button>
          <h1 className="font-bold text-48px text-primary-dark mb-2">
            {serviceDetails.description}
          </h1>
          <p className="font-semibold text-22px text-primary-dark mb-2">
            {serviceDetails.hero_description}
          </p>
          <p className="font-normal text-base text-primary-dark mb-8">
            {serviceDetails.hero_description}
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="text-center">
              <div className="center_flex mb-4">
                <span className="font-semibold text-22px text-primary">
                  4.9
                </span>
                <span className="icon-[mdi--star] text-[#FFCD29]  size-7"></span>
              </div>
              <p className="font-semibold text-22px text-primary">
                Customer Rating
              </p>
            </div>

            <div className="text-center">
              <div className="center_flex mb-4">
                <span className="font-semibold text-22px text-primary">
                  10K+
                </span>
                <span className="icon-[mdi--star] text-[#FFCD29]  size-7"></span>
              </div>
              <p className="font-semibold text-22px text-primary">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <div className="center_flex mb-4">
                <span className="font-semibold text-22px text-primary">
                  24/7{" "}
                </span>
                <span className="icon-[mdi--star] text-[#FFCD29]  size-7"></span>
              </div>
              <p className="font-semibold text-22px text-primary">Support</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2  mb-8">
            {/* loop here for service features */}
            {serviceDetails.contents.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <span className="icon-[mdi--check-circle] text-primary size-6"></span>
                <p className="font-normal text-base text-secondary-dark">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="center_flex">
          <div
            className="shadow-[0_0_10px_10px_#0000001A]
rounded-61px"
          >
            <img
              className="w-full rounded-61px"
              src="/assets/imgs/services/service_details_img.webp"
              alt="service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
