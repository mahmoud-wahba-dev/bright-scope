import React from "react";

const QuickContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ...existing code: handle form submission
  };

  return (
    <section className="my-7 md:my-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="font-bold text-48px mb-4">
            Quick <span className="text-primary"> Contact</span>
          </h1>
          <p className="font-normal text-18px mb-14 text-secondary-dark">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <div className="form_container">
            <div className="bg-base-100 w-full rounded-lg shadow-base-300/20 shadow-sm">
              <div className="bg-base-300/10 rounded-t-lg p-6">
                <h5 className="text-xl font-bold">Quick Contact</h5>
                <p className="text-sm text-secondary-dark mt-1">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="w-full p-6">
                <form
                  className="grid gap-y-4"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="label-text block mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="input w-full"
                        required
                      />
                      <small className="text-xs text-muted mt-1 block">
                        Enter your full name
                      </small>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="label-text block mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 XXX XXX XXX XXX"
                        className="input w-full"
                        required
                      />
                      <small className="text-xs text-muted mt-1 block">
                        Enter your Phone Number
                      </small>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="label-text block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your.email@Example.com"
                      className="input w-full"
                      required
                    />
                    <small className="text-xs text-muted mt-1 block">
                      Enter your Email Address
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="label-text block mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="select w-full"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Service Type
                      </option>
                      <option>Home Cleaning</option>
                      <option>Pest Control</option>
                      <option>Office Cleaning</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="label-text block mb-2">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here"
                      className="textarea resize-none min-h-[120px] w-full"
                    />
                    <small className="text-xs text-muted mt-1 block">
                      Your message will be copied to the support team.
                    </small>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-success text-white rounded-full py-3 px-6 hover:opacity-95"
                    >
                      <span className="icon-[bi--send-fill]"></span>
                      <span className="font-semibold">SEND MESSAGE</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* right column can hold contact info, map or leave empty */}
        <div aria-hidden="true" className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default QuickContact;
