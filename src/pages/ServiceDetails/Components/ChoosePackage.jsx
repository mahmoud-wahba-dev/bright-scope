import { Link } from "react-router-dom";

const ChoosePackage = ({ packages, selectedPackage, onSelectPackage ,onBookNow }) => {
  console.log(selectedPackage, "selectedPackage");

  return (
    <section className="my-7 md:my-14">
      <h2 className="font-semibold text-36px text-center text-primary-dark border-b border-[#E0E0E0] pb-4">
        Choose Your Package
      </h2>
      <div className="flex justify-between items-center mb-7">
        <div className="py-4">
          <p className="font-semibold text-22px text-primary-dark">
            {
              !selectedPackage ? "Please select a package" : `Selected Package: ${selectedPackage.name}`
            }
          </p>
          <p className="font-normal text-18px text-secondary-dark">
          {
            !selectedPackage ? "" : `Price: AED ${selectedPackage.price}`
          }
          </p>
        </div>
        <div>
          <Link
            className="btn btn-outline btn-primary  rounded-55px h-14 font-semibold text-base text-primary-dark "
            to="#"
          >
            <span className="icon-[mdi--whatsapp]  size-6 text-primary "></span>
            Whatsapp
          </Link>
          <button
            className="btn btn-primary rounded-55px text-white ml-3 h-14 font-semibold text-base  "
            onClick={onBookNow}
          >
            Book Now
            <span className="icon-[mdi--spa]"></span>
          </button>
        </div>
      </div>

      {/* checkbox */}
      <div class="flex w-full items-start gap-6 flex-wrap sm:flex-nowrap">
        {packages.map((pkg) => (
          <label
            key={pkg.id}
            class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3 bg-surface-light shadow-[0_4px_10px_0_#0000001A]
rounded-10px rounded-tr-none rounded-tl-none border-none [&:has(:checked)]:outline-3
"
          >
            <span class="flex flex-col label-text">
              <span class="text-22px font-semibold  mb-4"> {pkg.name}</span>
              <p class="font-semibold text-36px mb-2 text-primary">
                AED {pkg.price}
              </p>
              <p className="font-normal text-base mb-4">
                Up to {pkg.square_feet} sq ft
              </p>
              <div className="">
                <span className="icon-[tabler--clock]"></span>
                <span className="font-normal text-base mb-5">
                  {" "}
                  {pkg.duration} hours
                </span>
              </div>
            </span>
            <input
              type="radio"
              class="radio radio-primary rounded-full"
              name="package"
              // checked={selectedPackage?.id === pkg.id}
              onChange={() => onSelectPackage(pkg)}
            />
          </label>
        ))}

        {/* <label
          class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3 bg-surface-light shadow-[0_4px_10px_0_#0000001A]
rounded-10px rounded-tr-none rounded-tl-none border-none [&:has(:checked)]:outline-3
"
        >
          <span class="flex flex-col label-text">
            <span class="text-22px font-semibold  mb-4">Studio</span>
            <p class="font-semibold text-36px mb-2 text-primary">AED 120</p>
            <p className="font-normal text-base mb-4">Up to 400 sq ft</p>
            <div className="">
              <span className="icon-[tabler--clock]"></span>
              <span className="font-normal text-base mb-5">1-2 hours</span>
            </div>
          </span>
          <input
            type="checkbox"
            class="checkbox checkbox-primary rounded-full"
          />
        </label>

        <label
          class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3 bg-surface-light shadow-[0_4px_10px_0_#0000001A]
rounded-10px rounded-tr-none rounded-tl-none border-none [&:has(:checked)]:outline-3
"
        >
          <span class="flex flex-col label-text">
            <span class="text-22px font-semibold  mb-4">Studio</span>
            <p class="font-semibold text-36px mb-2 text-primary">AED 120</p>
            <p className="font-normal text-base mb-4">Up to 400 sq ft</p>
            <div className="">
              <span className="icon-[tabler--clock]"></span>
              <span className="font-normal text-base mb-5">1-2 hours</span>
            </div>
          </span>
          <input
            type="checkbox"
            class="checkbox checkbox-primary rounded-full"
          />
        </label>

        <label
          class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3 bg-surface-light shadow-[0_4px_10px_0_#0000001A]
rounded-10px rounded-tr-none rounded-tl-none border-none [&:has(:checked)]:outline-3
"
        >
          <span class="flex flex-col label-text">
            <span class="text-22px font-semibold  mb-4">Studio</span>
            <p class="font-semibold text-36px mb-2 text-primary">AED 120</p>
            <p className="font-normal text-base mb-4">Up to 400 sq ft</p>
            <div className="">
              <span className="icon-[tabler--clock]"></span>
              <span className="font-normal text-base mb-5">1-2 hours</span>
            </div>
          </span>
          <input
            type="checkbox"
            class="checkbox checkbox-primary rounded-full"
          />
        </label> */}
      </div>
    </section>
  );
};

export default ChoosePackage;
