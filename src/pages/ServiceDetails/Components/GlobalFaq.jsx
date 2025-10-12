import React from "react";

const GlobalFaq = () => {
  return (
    <div>
      {" "}
      <section className="my-7 md:my-14">
        <h4 className="font-semibold text-36px text-center mb-2 text-primary-dark">
          Frequently Asked Questions
        </h4>
        <p className="font-normal text-base text-primary-dark text-center mb-8 ">
       Everything you need to know about our deep cleaning service
        </p>

        <div className="md:w-[50%] mx-auto ">
          <div class="accordion divide-neutral/20 divide-y">
            <div class="accordion-item border-0 active" id="payment-icon">
              <button
                class="accordion-toggle inline-flex items-center justify-between text-start bg-surface-light "
                aria-controls="payment-icon-collapse"
                aria-expanded="true"
              >
                <span class="inline-flex items-center gap-x-4">
                  <span class="icon-[tabler--credit-card-pay] text-base-content size-6"></span>
         How long does the service take?
                </span>
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
              </button>
              <div
                id="payment-icon-collapse"
                class="accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="payment-icon"
                role="region"
              >
                <div class="px-5 pb-4">
                  <p class="text-base-content/80 font-normal">
                    Payment is taken during the checkout process when you pay
                    for your order. The order number that appears on the
                    confirmation screen indicates payment has been successfully
                    processed.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0" id="delivery-icon">
              <button
                class="accordion-toggle inline-flex items-center justify-between text-start bg-surface-light "
                aria-controls="delivery-icon-collapse"
                aria-expanded="false"
              >
                <span class="inline-flex items-center gap-x-4">
                  <span class="icon-[tabler--shopping-bag] text-base-content size-6"></span>
                  How would you ship my order?
                </span>
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
              </button>
              <div
                id="delivery-icon-collapse"
                class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="delivery-icon"
                role="region"
              >
                <div class="px-5 pb-4">
                  <p class="text-base-content/80 font-normal">
                    For large products, we deliver your product via a third
                    party logistics company offering you the “room of choice”
                    scheduled delivery service. For small products, we offer
                    free parcel delivery.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" id="cancel-icon">
              <button
                class="accordion-toggle inline-flex items-center justify-between text-start bg-surface-light "
                aria-controls="cancel-icon-collapse"
                aria-expanded="false"
              >
                <span class="inline-flex items-center gap-x-4">
                  <span class="icon-[tabler--ban] text-base-content size-6"></span>
                  Can I cancel my order?
                </span>
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
              </button>
              <div
                id="cancel-icon-collapse"
                class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="cancel-icon"
                role="region"
              >
                <div class="px-5 pb-4">
                  <p class="text-base-content/80 font-normal">
                    Scheduled delivery orders can be cancelled 72 hours prior to
                    your selected delivery date for full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalFaq;
