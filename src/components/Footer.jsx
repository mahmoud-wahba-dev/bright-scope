const Footer = () => {
  return (
    <>
      <div class="w-full footer_bg_gradient">
        <footer class="footer py-14 px-8">
          <div class="gap-0">
            <div class="flex items-center gap-2 text-2xl font-semibold text-primary_light mb-4">
              <img src="./assets/imgs/global/logo_footer.svg" alt="" />
              <span>Bright Scope UAE</span>
            </div>
            <p class="text-sm font-normal text-primary_light mb-8 max-w-sm">
              Your trusted cleaning and pest control partner in Dubai. 15+ years
              of excellence from Egypt to the UAE, serving thousands of
              satisfied customers.
            </p>

            <div className="bg-[#229E5B] rounded-lg flex items-center gap-3 p-2 pe-4 mb-4">
              <div className="size-8 rounded-lg bg-[#00C950] center_flex ">
                <span className="icon-[mingcute--phone-fill] text-white"></span>{" "}
              </div>
              <div>
                <a href="tel:+971554445555">
                  <p className="text-base font-semibold text-primary_light ">
                    Call Now
                  </p>
                  <p className="text-base font-semibold text-primary_light">
                    +971 XXX XXX XXX
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-[#229E5B] rounded-lg flex items-center gap-3 p-2 pe-5 mb-4">
              <div className="size-8 rounded-lg bg-[#00C950] center_flex ">
                <span className="icon-[basil--whatsapp-solid] text-white"></span>{" "}
              </div>
              <div>
                <a
                  href="https://wa.me/200000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-base font-semibold text-primary_light ">
                    WhatsApp Us
                  </p>
                  <p className="text-base font-semibold text-primary_light">
                    Instant Response
                  </p>
                </a>
              </div>
            </div>
          </div>

          <nav class="text-base-content">
            <h6 class="footer-title">Services</h6>
            <a href="#" class="link link-hover">
              Branding
            </a>
            <span>
              <a href="#" class="link link-hover">
                Design
              </a>
              <span class="badge ms-2 badge-sm badge-primary">New</span>
            </span>
            <a href="#" class="link link-hover">
              Marketing
            </a>
            <a href="#" class="link link-hover">
              Advertisement
            </a>
          </nav>
          <nav class="text-base-content">
            <h6 class="footer-title">Company</h6>
            <a href="#" class="link link-hover">
              About us
            </a>
            <a href="#" class="link link-hover">
              Contact
            </a>
            <a href="#" class="link link-hover">
              Jobs
            </a>
            <a href="#" class="link link-hover">
              Press kit
            </a>
          </nav>
          <nav class="text-base-content">
            <h6 class="footer-title">Legal</h6>
            <a href="#" class="link link-hover">
              Terms of use
            </a>
            <a href="#" class="link link-hover">
              Privacy policy
            </a>
            <a href="#" class="link link-hover">
              Cookie policy
            </a>
          </nav>
        </footer>
        <footer class="footer bg-base-200/60 border-base-content/25 border-t px-6 py-4">
          <div class="flex w-full items-center justify-between">
            <aside class="grid-flow-col items-center">
              <p>
                ©2024{" "}
                <a class="link link-hover font-medium" href="#">
                  FlyonUI
                </a>
              </p>
            </aside>
            <div class="flex h-5 gap-4">
              <a href="#" class="link" aria-label="Github Link">
                <span class="icon-[tabler--brand-github] size-5"></span>
              </a>
              <a href="#" class="link" aria-label="Facebook Link">
                <span class="icon-[tabler--brand-facebook] size-5"></span>
              </a>
              <a href="#" class="link" aria-label="X Link">
                <span class="icon-[tabler--brand-x] size-5"></span>
              </a>
              <a href="#" class="link" aria-label="Google Link">
                <span class="icon-[tabler--brand-google] size-5"></span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
