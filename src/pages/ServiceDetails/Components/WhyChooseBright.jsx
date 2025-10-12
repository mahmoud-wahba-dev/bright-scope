import React from "react";

const WhyChooseBright = () => {
  const items = [
    {
      icon: "icon-[iconamoon--shield]",
      title: "Background Verified",
      description: "Every team member undergoes thorough background checks",
    },
    {
      icon: "icon-[iconamoon--certificate-badge-fill]",
      title: "Professionally Trained",
      description: "Continuous training programs ensure expertise",
    },
    {
      icon: "icon-[mdi--leaf]",
      title: "Eco-Conscious",
      description: "Committed to sustainable and safe practices",
    },
    {
      icon: "icon-[mdi--heart]",
      title: "Customer-First",
      description: "Dedicated to exceeding customer expectations",
    },
  ];
  return (
    <section className="my-7 md:my-14">
      <h3 className="font-bold text-48px text-center mb-4 text-primary-dark">
        Why Choose <span className="text-primary">Bright Scope</span>
      </h3>
      <p className="font-normal text-18px text-center text-secondary-dark mb-20">
        Dubai's most trusted cleaning service with thousands of satisfied
        customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index}>
            <div className="size-28 m-auto bg-[linear-gradient(135deg,_#0B7A3B_0%,_#096732_100%)] shadow-[0_4px_4px_0_#00000040] center_flex  rounded-full  mb-6">
              <span className={`${item.icon} text-62px text-white`}></span>
            </div>
            <h3 className="font-semibold text-center text-18px mb-2">{item.title}</h3>
        
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseBright;
