const WhyChooseUs = () => {
  const features = [
    {
      icon: "icon-[mdi--currency-usd]",
      title: "Transparent Pricing",
      subtitle: "No Hidden Fees",
      highlight: "0 Hidden Fees",
      description:
        "Clear upfront pricing with no surprises or additional charges",
    },
    {
      icon: "icon-[mdi--shield-check]",
      title: "Trained & Verified Staff",
      subtitle: "Background Checked",
      highlight: "100% Verified",
      description:
        "Every Team member is professionally trained and security verified",
    },
    {
      icon: "icon-[mdi--star-circle]",
      title: "15+ Years Experience",
      subtitle: "Egypt   Dubai",
      highlight: "2008 - 2024",
      description:
        "Trusted expertise spanning across borders with proven track record",
    },
    {
      icon: "icon-[mdi--leaf]",
      title: "Eco-Friendly Solutions",
      subtitle: "Safe Treatments",
      highlight: "100% Safe",
      description:
        "Environmental-friendly cleaning products and safe pest control methods",
    },
    {
      icon: "icon-[mdi--clock]",
      title: "Quick Booking",
      subtitle: "60 Seconds Only",
      highlight: "< 60 Seconds",
      description:
        "Lightning-fast booking through our form or WhatsApp in just one minute",
    },
  ];
  return (
    <section className="my-28 text-center relative">
      <h2 className="font-semibold text-36px mb-2 text-primary-dark">
        Why <span className="text-primary"> Choose Us ?</span>
      </h2>
      <p className="text-primary-dark font-medium text-18px mb-4">
        Discover what makes us the trusted choice for thousands of customers
        across Dubai and beyond
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {Array.isArray(features) && features.map((item, index) => (
          <div
            key={index}
            className="bg-surface-light rounded-20px shadow-2xl p-4 max-w-[75%] m-auto hover:scale-105 transition-transform duration-300"
          >
            <div className="size-14 bg-primary rounded-full center_flex mb-2 m-auto mb-1">
              <span className={`${item.icon} size-8 text-white`}></span>
              {/* <span className='icon-[mdi--shield-check] size-10 text-white'></span> */}
            </div>
            <h5 className="font-semibold text-22px   mb-1 text-black">
              {item.title}
            </h5>
            <p className="font-semibold text-base  mb-1 text-muted-dark">
              {item.subtitle}
            </p>
            <div className="bg-primary rounded-[100px] h-10 center_flex text-white  font-semibold text-base mb-1">
              {item.highlight}
            </div>
            <p className="text-black font-normal text-14px">
              {item.description}{" "}
            </p>
          </div>
        ))}

     
      </div>

         <div className="absolute bottom-[10%] start-0 w-full h-[84px]  -z-10 ">
          <img
            className="w-full "
            src="/assets/imgs/home/snake_shape.webp"
            alt="snake shape"
          />
        </div>
    </section>
  );
};

export default WhyChooseUs;
