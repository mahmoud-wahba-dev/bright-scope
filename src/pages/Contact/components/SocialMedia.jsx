import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <section className="my-7 md:my-20">
      <h4 className="font-bold text-48px text-center mb-4">
        Follow Us On <span className="text-primary">Social Media</span>
      </h4>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div>
          <Link
            to="https://www.facebook.com/brightscopeme"
            target="_blank"
            className="group btn btn-circle border-0 p-2.5 btn-outline bg-surface-light hover:bg-primary hover:border-none transition-colors duration-200 ease-in-out"
          >
            <span className="icon-[hugeicons--facebook-02] text-32px text-primary-dark group-hover:text-white transition-colors duration-200 ease-in-out"></span>
          </Link>

          <Link
            to="https://www.facebook.com/brightscopeme"
            target="_blank"
            className="group btn btn-circle border-0 p-2.5 btn-outline bg-surface-light hover:bg-primary hover:border-none transition-colors duration-200 ease-in-out"
          >
            <span className="icon-[hugeicons--instagram] text-32px text-primary-dark group-hover:text-white transition-colors duration-200 ease-in-out"></span>
          </Link>


               <Link
            to="https://www.linkedin.com/company/bright-scope/"
            target="_blank"
            className="group btn btn-circle border-0 p-2.5 btn-outline bg-surface-light hover:bg-primary hover:border-none transition-colors duration-200 ease-in-out"
          > 
            <span className="icon-[uit--linkedin-alt] text-32px text-primary-dark group-hover:text-white transition-colors duration-200 ease-in-out"></span>
          </Link>
            <Link 
            to="https://wa.me/971554467755"
            target="_blank"
            className="group btn btn-circle border-0 p-2.5 btn-outline bg-surface-light hover:bg-primary hover:border-none transition-colors duration-200 ease-in-out"
          >
          <span className="icon-[garden--twitter-stroke-16] text-32px text-primary-dark group-hover:text-white transition-colors duration-200 ease-in-out"></span>
          </Link>
          <Link
            to="https://www.youtube.com/@BrightScopePestControlEmirates"
            target="_blank"
            className="group btn btn-circle border-0 p-2.5 btn-outline bg-surface-light hover:bg-primary hover:border-none transition-colors duration-200 ease-in-out"
          >
            <span className="icon-[fa-brands--youtube] text-32px text-primary-dark group-hover:text-white transition-colors duration-200 ease-in-out"></span>
          </Link> 

 
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
