import { useNavigate } from "react-router-dom";
const { VITE_IMG_BASE_URL } = import.meta.env;

const ServiceFeature = ({ serviceDetails }) => {
  const navigate = useNavigate();
  console.log(serviceDetails, "zz");

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
            {serviceDetails.hero_title}
          </h1>
          <p className="font-semibold text-22px text-primary-dark mb-2">
            {serviceDetails.sub_hero_title}
          </p>
          <p className="font-normal text-base text-primary-dark mb-8">
            {serviceDetails.hero_description}
          </p>
          <div className="flex items-center gap-6 mb-8">
            {serviceDetails.ratings
              ? serviceDetails.ratings.map((rating) => (
                  <div className="text-center">
                    <div className="center_flex mb-4">
                      <span className="font-semibold text-22px text-primary">
                        {rating.name}
                      </span>
                      {rating.icon ? (
                        <span className="icon-[mdi--star] text-[#FFCD29]  size-7"></span>
                      ) : null}
                    </div>
                    <p className="font-semibold text-22px text-primary">
                      {rating.description}
                    </p>
                  </div>
                ))
              : null}
          </div>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2  mb-8">
            {/* loop here for service features */}
            {Array.isArray(serviceDetails.contents) &&
              serviceDetails.contents.map((feature) => (
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
              className="w-full rounded-[61px]"
              src={
                serviceDetails.hero_image &&
                `${VITE_IMG_BASE_URL}${serviceDetails.hero_image}`
              }
              alt="service"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/imgs/services/service_details_img.webp";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
