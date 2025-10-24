import FaqItem from "../../../composable/FaqItem";

const GlobalFaq = () => (
  <section className="my-7 md:my-14">
    <h4 className="font-semibold text-36px text-center mb-2 text-primary-dark">
      Frequently Asked Questions
    </h4>
    <p className="font-normal text-base text-primary-dark text-center mb-8">
      Everything you need to know about our deep cleaning service
    </p>
    <div className="md:w-[50%] mx-auto divide-neutral/20 divide-y">
      <FaqItem
        icon="tabler--credit-card-pay"
        title="How long does the service take?"
      >
        Payment is taken during checkout when you pay for your order. The order
        number that appears on the confirmation screen indicates successful
        payment.
      </FaqItem>

      <FaqItem icon="tabler--shopping-bag" title="How would you ship my order?">
        For large products, we deliver via a third party logistics company. For
        smaller items, we offer free parcel delivery.
      </FaqItem>

      <FaqItem icon="tabler--ban" title="Can I cancel my order?">
        Scheduled delivery orders can be cancelled 72 hours before your selected
        date for a full refund.
      </FaqItem>
    </div>
  </section>
);

export default GlobalFaq;