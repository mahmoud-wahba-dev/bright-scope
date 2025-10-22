import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // try booking from navigation state first; fallback to sessionStorage if the page was refreshed
  const sessionBooking = (() => {
    try {
      const raw = sessionStorage.getItem("booking_preview");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  })();

  // resolved booking used throughout the page
  const booking = state?.booking ?? sessionBooking ?? null;

  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError, // added so we can show inline errors programmatically
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
      address: "",
      date: "",
      time: "",
      special_requests: "",
    },
  });

  useEffect(() => {
    // if no booking recovered, inform user and send them back to services
    if (!booking) {
      notyf.error(
        "Booking data missing. Please select a package and addons first."
      );
      navigate("/services");
    }
  }, [booking, navigate]);

  // Date/time validator: construct a local Date(year, monthIndex, day, hour, minute)
const validateDateTime = (date, time) => {
  if (!date || !time) return false;
  const now = new Date();
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const selected = new Date(year, month - 1, day, hour, minute, 0, 0);
  return selected.getTime() > now.getTime() + 5 * 60 * 1000;
};


  const onSubmit = async (data) => {
    // use the resolved booking (state or session)
    const bookingData = booking;
    if (!bookingData) {
      notyf.error(
        "Booking data missing. Please select a package and addons first."
      );
      navigate("/services");
      return;
    }

    // Validate date/time and set inline errors if invalid
    if (!validateDateTime(data.date, data.time)) {
      setError("date", {
        type: "manual",
        message: "Please choose a future date",
      });
      setError("time", {
        type: "manual",
        message: "Please choose a valid time",
      });
      notyf.error(
        "Please select a valid preferred date and time (not in the past)."
      );
      return;
    }

    const payload = {
      service: bookingData.serviceId,
      package: bookingData.package?.id,
      addon_ids: (bookingData.addons ?? []).map((a) => a.id),
      customer_name: data.full_name,
      customer_email: data.email,
      customer_phone: data.phone_number,
      address: data.address,
      booking_date: new Date(`${data.date}T${data.time}`).toISOString(),
      special_requests: data.special_requests || "",
    };

    try {
      const res = await apiHelper.post("services/bookings/", payload);
      console.log(res.data);
      notyf.success("Booking created successfully.");
      // clear persisted preview
      try {
        sessionStorage.removeItem("booking_preview");
      } catch (e) {}
      // navigate to confirmation or home
      navigate("/payment", { replace: true });
    } catch (error) {
      console.error("Booking error:", error);
      const errorData = error.response?.data;
      if (errorData?.errors && typeof errorData.errors === "object") {
        Object.entries(errorData.errors).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => notyf.error(`${field}: ${msg}`));
          } else if (typeof messages === "string") {
            notyf.error(`${field}: ${messages}`);
          }
        });
      } else {
        const msg =
          errorData?.message ||
          errorData?.detail ||
          "Failed to create booking. Please try again.";
        notyf.error(msg);
      }
    }
  };

  return (
    <section className="my-7 md:my-14">
      <div className="container max-w-3xl">
        <div className="bg-surface-light rounded-10px shadow p-6">
          <h2 className="font-semibold text-28px mb-4">
            Checkout & Booking Details
          </h2>

          {/* Booking summary */}
          <div className="mb-6">
            <div className="text-sm text-secondary-dark">Service</div>
            <div className="font-semibold">{booking?.serviceName ?? "-"}</div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm text-secondary-dark">Package</div>
                <div className="font-medium">
                  {booking?.package?.name ?? "-"}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-secondary-dark">Total</div>
                <div className="font-bold text-primary">
                  AED {booking?.total ?? 0}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-sm text-secondary-dark">Addons</div>
              <div className="text-sm">
                {(booking?.addons ?? []).length > 0
                  ? booking.addons.map((a) => a.name).join(", ")
                  : "None"}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input border-[#CBD5E1] h-10"
                  {...register("full_name", {
                    required: "Full name is required",
                  })}
                />
                {errors.full_name && (
                  <p className="text-error text-sm mt-1">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Phone Number
                </label>
                <Controller
                  name="phone_number"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"ae"}
                      enableSearch
                      inputClass="!w-full !h-10"
                      placeholder="+971 5x xxx xxxx"
                      onChange={(value) =>
                        field.onChange("+" + value.replace(/^\+/, ""))
                      }
                    />
                  )}
                />
                {errors.phone_number && (
                  <p className="text-error text-sm mt-1">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="input border-[#CBD5E1] h-10"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Service Address
                </label>
                <input
                  type="text"
                  className="input border-[#CBD5E1] h-10"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-error text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="input h-10"
                  {...register("date", { required: "Date is required" })}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && (
                  <p className="text-error text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label-text font-medium text-14px mb-1.5">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="input h-10"
                  {...register("time", { required: "Time is required" })}
                />
                {errors.time && (
                  <p className="text-error text-sm mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="label-text font-medium text-14px mb-1.5">
                Special Requests (optional)
              </label>
              <textarea
                className="textarea min-h-24"
                {...register("special_requests")}
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                className="btn btn-soft btn-error px-6 py-3 rounded-full"
                onClick={() => navigate(-1)}
                disabled={isSubmitting}
              >
                BACK
              </button>

              <button
                type="submit"
                className="btn btn-primary px-6 py-3 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "CONTINUE TO PAYMENT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
