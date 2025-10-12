import { Link } from "react-router-dom";

const SelectedPackage = () => {
  return (
    <section className="my-7 md:my-14 bg-[#ECF0F0] p-5 md:p-8 rounded-10px flex flex-col items-center gap-4 ">
      <h6 className="font-semibold  text-22px">Selected Studio Package</h6>

      <p className="font-semibold text-36px text-primary">AED 120</p>
      <p className="font-normal text-12px ">Duration: 2-3 Hours</p>
      <div className="flex items-center gap-4 max-md:flex-col justify-center">
        <Link
          className="btn btn-primary rounded-55px text-white ml-3 h-14 font-semibold text-base  "
          to="#"
        >
          <span>Book Now -AED 120</span>
          <span className="icon-[mdi--arrow-right]"></span>
        </Link>
        <Link
          className="btn btn-outline btn-primary bg-white  rounded-55px h-14 font-semibold text-base text-primary-dark "
          to="#"
        >
          <span className="icon-[mdi--whatsapp]  size-6 text-primary "></span>
          Whatsapp Chat
        </Link>
      </div>
    </section>
  );
};

export default SelectedPackage;
