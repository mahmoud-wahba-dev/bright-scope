const OurPeople = () => {
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
    <section className="my-7 md:my-20">
      <div className="container text-center">
        <h2 className="font-bold text-48px mb-4">
          Our <span className="text-primary">People</span>
        </h2>
        <p className="font-normal text-18px mb-14 text-secondary-dark">
          The heart of Bright Scope - our professional, trained, and dedicated
          team members{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index}>
              <div className="size-28 m-auto bg-[linear-gradient(135deg,_#0B7A3B_0%,_#096732_100%)] shadow-[0_4px_4px_0_#00000040] center_flex  rounded-full  mb-6">
                <span className={`${item.icon} text-62px text-white`}></span>
              </div>
              <h3 className="font-semibold text-18px mb-2">{item.title}</h3>
              <p className="font-normal text-14px text-secondary-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
