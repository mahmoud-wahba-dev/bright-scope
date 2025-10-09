const OurJourney = () => {
  return (
    <section className="mb-14 md:mb-7">
      <div className="md:px-14 px-6">
        <h2 className="font-bold text-48px mb-4 text-center">
          Our <span className="text-primary">Journey</span>
        </h2>
        <p className="font-normal text-secondary-dark text-18px text-center mb-6">
          From humble beginnings in Egypt to becoming a trusted name across
          borders
        </p>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
          {/* uniform timeline items (left/right alternating) */}

          {/* item 1 - left (2010) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-start flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--location] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      2010
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    Founded in Egypt
                  </h5>
                  <p className="text-14px text-black font-normal">
                    Started our journey in Cairo with a vision to revolutionize
                    cleaning services
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-primary" />
          </li>

          {/* item 2 - right (2015) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-end flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--graph] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      2015
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    Expanding Operations
                  </h5>
                  <p className="text-14px text-black font-normal">
                    Grew to serve over 50 cities with 100+ professional staff,
                    expanding our footprint across Egypt.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-start me-4 mb-8"></div>
            <hr className="bg-primary" />
          </li>

          {/* item 3 - left (2020) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-start flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--star] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      2020
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    Digital Innovation
                  </h5>
                  <p className="text-14px text-black font-normal">
                    Launched our digital platform and introduced eco-friendly
                    solutions to improve service efficiency.
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-primary" />
          </li>

          {/* item 4 - right (2025) */}
          <li>
            <div className="timeline-middle h-16">
              <span className="bg-primary flex size-4 items-center justify-center rounded-full"></span>
            </div>

            <div className="timeline-end flex justify-around mt-8 max-md:pt-2">
              <div className="card lg:max-w-[61%] bg-surface-light rounded-10px shadow-lg p-4">
                <div className="card-body gap-1 p-0">
                  <div className="flex items-center gap-2">
                    <div className="size-11 rounded-full bg-primary center_flex">
                      <span className="icon-[tabler--star] text-white size-5"></span>
                    </div>
                    <p className="font-semibold text-22 text-primary-dark">
                      2025
                    </p>
                  </div>
                  <h5 className="card-title font-semibold text-22px text-primary">
                    Dubai Expansion
                  </h5>
                  <p className="text-14px text-black font-normal">
                    Bringing 15 years of expertise to the UAE market with
                    cutting-edge services and local teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-start me-4 mb-8"></div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurJourney;
