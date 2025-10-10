import { Link } from "react-router-dom";
const servicesitems = [
  {
    title: "Home Cleaning",
    startingPrice: "AED 120",
    description: "Regular home cleaning to keep your place fresh and tidy",
    iconClass: "icon-[material-symbols--home-rounded]",
    link: "/services",
  },
  {
    title: "Office Cleaning",
    startingPrice: "AED 200",
    description: "Professional office cleaning for a productive work environment",
    iconClass: "icon-[material-symbols--business-center]",
    link: "/services",  
  },
  {
    title: "Carpet Cleaning",
    startingPrice: "AED 150",
    description: "Deep carpet cleaning to remove stains and allergens",
    iconClass: "icon-[material-symbols--cleaning-services]",
    link: "/services",    
  },
  {
    title: "Pest Control",
    startingPrice: "AED 80",
    description: "Effective pest control to protect your home from infestations",
    iconClass: "icon-[material-symbols--bug-report]",
    link: "/services",  
  }
    ,
  {
    title: "Window Cleaning",
    startingPrice: "AED 100",
    description: "Professional window cleaning to keep your windows spotless",
    iconClass: "icon-[material-symbols--window]",
    link: "/services",  
  }
];
const OurServices = () => {
  return (
    <>
      <section className="my-28">
        <h1 className="text-4xl font-semibold  text-center mb-2 " id="services">
          Our <span className="text-primary">Premium</span> Services
        </h1>
        <p className="font-normal text-center text-primary-dark mb-8">
          Discover our comprehensive range of cleaning and pest control
          services, each designed to meet your specific needs with professional
          excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {servicesitems.map((item, index) => (
            <div key={index} className="py-8 px-4 border-primary border-[5px] border-s-[3px] rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6 gap-4">
                <div className="bg-primary text-white rounded-lg p-4 size-[70px] ">
                  <span className={`${item.iconClass}   size-9.5 text-white font-normal`}></span>
                </div>
                <div>
                  <h3 className="text-black font-semibold text-22">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold text-base">
                    Starting from {item.startingPrice}
                  </p>
                </div>
              </div>
              <p className="font-normal text-18 text-black mb-14 ">
                {item.description}
              </p>
              <Link
                to={`${item.link}`}
                className="btn btn-primary rounded-[55px] p-4 btn-block font-semibold text-base min-h-14 uppercase"
              >
                Book Now
                <span className="icon-[cil--arrow-right]  ms-3 w-6 h-11 font-bold"></span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurServices;
