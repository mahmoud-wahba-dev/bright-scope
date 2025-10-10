import { useRef } from "react";

const QuickContact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    const form = formRef.current;
    if (!form) return;

    // Prevent default refresh if invalid
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Add FlyonUI class for CSS validation
    form.classList.add("was-validated", "validate");
  };

  return (
    <section className="my-7 md:my-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form_container">
          <div className="w-full ">
            <div
              className="bg-surface-light w-full rounded-10px shadow-[0px_0px_9.4px_0px_#00000040]
 md:p-8 p-4"
            >
              <h5 className="font-semibold text-36px mb-2 ">
                Quick <span className="text-primary">Contact</span>
              </h5>
              <p className="font-normal text-14px text-secondary-dark mb-8">
                Fill out the form below and we’ll get back to you within 24
                hours.
              </p>

              <form
                ref={formRef}
                className="needs-validation   grid gap-8"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="label-text font-medium text-14px mb-1.5 font-medium text-14px mb-1.5"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="input border-[#CBD5E1] h-10 "
                      required
                    />
                    <span className="error-message">
                      Please enter your name.
                    </span>
                    <span className="success-message">Looks good!</span>
                  </div>

                  <div>
                    <label
                      className="label-text font-medium text-14px mb-1.5"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+971 XXX XXX XXX"
                      className="input border-[#CBD5E1] h-10"
                      required
                    />
                    <span className="error-message">
                      Please enter your phone number.
                    </span>
                    <span className="success-message">Looks good!</span>
                  </div>
                </div>

                <div>
                  <label
                    className="label-text font-medium text-14px mb-1.5"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="input border-[#CBD5E1] h-10"
                    required
                  />
                  <span className="error-message">
                    Please enter a valid email.
                  </span>
                  <span className="success-message">Looks good!</span>
                </div>

                <div>
                  <label
                    className="label-text font-medium text-14px mb-1.5"
                    htmlFor="service"
                  >
                    Service Type
                  </label>
                  <select id="service" className="select" required>
                    <option value="">Select a service</option>
                    <option value="consulting">Consulting</option>
                    <option value="support">Support</option>
                    <option value="design">Design</option>
                  </select>
                  <span className="error-message">
                    Please select a service.
                  </span>
                  <span className="success-message">Looks good!</span>
                </div>

                <div>
                  <label
                    className="label-text font-medium text-14px mb-1.5"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="textarea min-h-24"
                    placeholder="Type your message here"
                    required
                  />
                  <span className="error-message">Please write a message.</span>
                  <span className="success-message">Looks good!</span>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary h-14 rounded-55px font-semibold text-base w-full"
                >
                  <span className="icon-[tabler--send] me-2"></span>
                  SEND MESSAGE
                  <span className="icon-[tabler--arrow-right] me-2"></span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* right column can hold contact info, map or leave empty */}
        <div className="">
          <div className="bg-surface-light w-full rounded-10px shadow-[0px_0px_9.4px_0px_#00000040] md:p-8 p-4 mb-6">
            <div className="flex items-center gap-6 mb-16">
              <div className="size-20 rounded-full bg-primary center_flex">
                <span className="icon-[mdi--location] text-white size-10"></span>
              </div>
              <div>
                <h2 className="font-semibold text-28px mb-2">
                  Visit Our Office
                </h2>
                <p className="font-normal text-base text-secondary-dark">
                  Come visit us at our Dubai headquarters for in-person
                  consultations.
                </p>
              </div>
            </div>

            <div className="flex  gap-4 mb-4">
              <div>
                <span className="icon-[mdi--location] text-25px text-primary"></span>
              </div>

              <div>
                <p className="font-semibold text-base mb-1">
                  Business Bay, Dubai
                </p>
                <p className="fpnt-semibold text-12px text-muted-dark">
                  United Arab Emirates
                </p>
              </div>
            </div>

            <div className="flex  gap-4 mb-4">
              <div>
                <span className="icon-[mingcute--time-line] text-25px text-primary"></span>
              </div>

              <div>
                <p className="font-semibold text-base mb-1">Working Hours</p>
                <p className="fpnt-semibold text-12px text-muted-dark">
                  Mon-Fri: 8AM-8PM | Sat: 9AM-6PM
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl h-full">
            <div className="w-full !h-full !max-h-[346px]  !rounded-2xl mb-8 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.310132671646!2d55.25359281442909!3d25.185047260299033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1758309940387!5m2!1sen!2seg"
                className="w-full !h-full border-0 rounded-2xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
