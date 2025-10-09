import { Link } from "react-router-dom";

const PeaceOfMind = () => {
  return (
    <section className="my-7 md:my-20 md:p-14 p-7 bg-[linear-gradient(91.48deg,_#096732_0.13%,_#0B7A3B_100%)] rounded-20px text-center">
      <h5 className="font-semibold text-36px text-white mb-8">
        Your Peace of Mind is Our Promise
      </h5>
      <p className="font-semibold text-base text-white mb-8 md:max-w-[70%] mx-auto leading-7">
        When you choose Bright Scope, you're not just getting a service – you're
        gaining a trusted partner committed to creating cleaner, healthier, and
        more comfortable spaces for you and your loved ones. From our family to
        yours, we bring reliability, excellence, and care to every job we do.
      </p>
      <div className="center_flex md:gap-6 gap-2 md:flex-wrap flex-nowrap  max-sm:flex-col max-sm:gap-3">
        <Link
          to="/services"
          className="btn btn-wide btn-primary md:min-w-[29rem] rounded-[55px] text-white h-14 font-semibold text-base md:px-8 md:py-6 hover:bg-primary-light_hover hover:border-none transition max-sm:w-full max-sm:px-6 max-sm:py-3 max-sm:text-sm"
        >
          Book Now
        </Link>
        <Link
          to="https://wa.me/971554467755"
          className="btn btn-wide btn-secondary md:min-w-44 rounded-[55px] h-14 text-primary-dark font-semibold text-base md:py-6 hover:text-white hover:border-none hover:bg-primary-light_hover transition max-sm:w-full max-sm:px-6 max-sm:py-3 max-sm:text-sm"
          target="_blank"
        >
          Chat On Whatsapp
        </Link>
      </div>
    </section>
  );
};

export default PeaceOfMind;
