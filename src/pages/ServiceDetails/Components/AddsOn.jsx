const AddsOn = ({ addOns, selectedAddons, onToggleAddon }) => {
  console.log(selectedAddons);

  return (
    <section className="my-3 md:my-6">
      <h4 className="font-semibold text-36px  text-center text-primary-dark mb-2">
        Add-ons: Enhance Your Service{" "}
        <span className="font-medium text-15px italic">(Optional)</span>
      </h4>
      <p className="font-normal text-center text-base text-primary-dark mb-8">
        Add these premium services to get the most comprehensive cleaning
        experience
      </p>
      <div class="flex w-full items-start gap-6 flex-wrap sm:flex-nowrap">
        {(addOns ?? []).map((addon) => {
          const isSelected = selectedAddons.some((a) => a.id === addon.id);
          return (
            <label
              class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3 bg-surface-light shadow-[0_4px_10px_0_#0000001A]
rounded-10px rounded-tr-none rounded-tl-none border-none [&:has(:checked)]:outline-3
"
              key={addon.id}
              onClick={() => onToggleAddon(addon)}
            >
              <span class="flex flex-col label-text">
                <span class="text-22px font-semibold  mb-4">
                  {" "}
                  {addon.name}{" "}
                </span>
                <p class="font-semibold text-36px mb-2 text-primary">
                  AED {addon.price}{" "}
                </p>
                <p className="font-normal text-base mb-4">
                  {" "}
                  {addon.description}{" "}
                </p>
                <div className="">
                  <span className="icon-[tabler--clock]"></span>
                  <span className="font-normal text-base mb-5">1-2 hours</span>
                </div>
              </span>
              <input
                name="addon"
                type="checkbox"
                class="checkbox checkbox-primary rounded-full"
                checked={isSelected}
                onChange={() => onToggleAddon(addon)}
              />
            </label>
          );
        })}

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
          name="addon"
            type="radio"
            class="radio radio-primary rounded-full"
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
          name="addon"
            type="radio"
            class="radio radio-primary rounded-full"
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
          name="addon"
            type="radio"
            class="radio radio-primary rounded-full"
          />
        </label> */}
      </div>
    </section>
  );
};

export default AddsOn;
