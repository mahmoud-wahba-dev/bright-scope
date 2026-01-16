import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const bookingConfig = {
  home_cleaning: {
    id: "home_cleaning",
    nameAr: "تنظيف منازل",
    nameEn: "Home Cleaning",
    baseRatePerHourPerWorker: 33.5,
    materialsPrice: 8,
    serviceFee: 5,
    taxRate: 0.05,
    workersOptions: [
      { id: "w1", value: 1, labelAr: "١ أخصائية تنظيف", fromPrice: 67 },
      { id: "w2", value: 2, labelAr: "٢ أخصائية تنظيف", fromPrice: 133 },
      { id: "w3", value: 3, labelAr: "٣ أخصائيات تنظيف", fromPrice: 199.5 },
    ],
    hoursOptions: [
      { id: "h2", value: 2, labelAr: "٢ ساعة" },
      { id: "h3", value: 3, labelAr: "٣ ساعات" },
      { id: "h4", value: 4, labelAr: "٤ ساعات" },
      { id: "h5", value: 5, labelAr: "٥ ساعات" },
    ],
    visitPlans: [
      { id: "p1", visits: 1, labelAr: "زيارة واحدة", payFor: 1 },
      {
        id: "p4",
        visits: 4,
        labelAr: "٣ زيارات + ١ مجاناً",
        payFor: 3,
      },
      {
        id: "p8",
        visits: 8,
        labelAr: "٦ زيارات + ٢ مجاناً",
        payFor: 6,
      },
      {
        id: "p12",
        visits: 12,
        labelAr: "٩ زيارات + ٣ مجاناً",
        payFor: 9,
      },
    ],
  },
};

const defaultServiceKey = "home_cleaning";

const dayOptions = [
  "الجمعة",
  "السبت",
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
];

const BookingWizard = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const config = useMemo(() => {
    const key = serviceType || defaultServiceKey;
    return bookingConfig[key] || bookingConfig[defaultServiceKey];
  }, [serviceType]);

  const [step, setStep] = useState(0);
  const [workers, setWorkers] = useState(null);
  const [hours, setHours] = useState(null);
  const [materials, setMaterials] = useState(false);
  const [notes, setNotes] = useState("");
  const [planId, setPlanId] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [addressType, setAddressType] = useState("home");
  const [addressLabel, setAddressLabel] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [street, setStreet] = useState("");
  const [direction, setDirection] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedPlan = config.visitPlans.find((p) => p.id === planId) || null;

  const priceSummary = useMemo(() => {
    const workersCount = workers || 0;
    // Default to 2 hours (minimum) if workers selected but hours not yet, to show estimated price
    const hoursCount = hours || (workersCount ? 2 : 0);
    
    const hourlyRate = workersCount * hoursCount * config.baseRatePerHourPerWorker;
    const materialRate = materials ? config.materialsPrice : 0;
    const singleVisitCost = hourlyRate + materialRate;
    
    const payFor = selectedPlan ? selectedPlan.payFor : 1;
    
    const subTotal = hourlyRate * payFor;
    const materialsCost = materialRate * payFor;
    const serviceFee = config.serviceFee;
    
    const saving = selectedPlan ? (singleVisitCost * (selectedPlan.visits - selectedPlan.payFor)) : 0;
    
    // Discount in breakdown is usually what is subtracted from the total.
    // Here we calculated subTotal based on payFor, so the discount is already applied to the price.
    // But if we want to show "Saving" in green, we can pass it.
    // The previous logic had: beforeTax = subTotal + materialsCost + serviceFee - discount;
    // But that assumed subTotal was the full price.
    // Let's stick to: Total Price = What you pay. Saving is informational.
    
    const beforeTax = subTotal + materialsCost + serviceFee;
    const tax = Math.round(beforeTax * config.taxRate * 100) / 100;
    const total = Math.round((beforeTax + tax) * 100) / 100;

    return {
      subTotal,
      materialsCost,
      serviceFee,
      discount: saving,
      tax,
      total,
    };
  }, [workers, hours, materials, selectedPlan, config]);

  const canGoNext =
    (step === 0 && workers) ||
    (step === 1 && hours) ||
    (step === 2 && typeof materials === "boolean") ||
    (step === 3 && selectedPlan) ||
    (step === 4 && selectedDays.length > 0 && building && street) ||
    (step === 5 && paymentMethod);

  const handleToggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleNext = () => {
    if (!canGoNext) {
      return;
    }
    if (step < 5) {
      setStep((s) => s + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (step === 0) {
      navigate("/services");
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  const serviceName =
    i18n.language === "ar" ? config.nameAr || config.nameEn : config.nameEn;

  const progressPercent = ((step + 1) / 6) * 100;

  return (
    <section className="my-7 md:my-14">
      <div className="container max-w-3xl">
        <div className="bg-surface-light rounded-10px shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handlePrev}
              className="text-primary text-sm flex items-center gap-1"
            >
              <span className="icon-[mdi--arrow-right] rtl-flip" />
              <span>{t("back_to_services", { defaultValue: "Back" })}</span>
            </button>
            <div className="text-sm text-secondary-dark">
              {t("booking_step_label", {
                defaultValue: "Step {{current}} of {{total}}",
                current: step + 1,
                total: 6,
              })}
            </div>
          </div>

          <h2 className="font-semibold text-24px mb-1">
            {t("booking_specialist_title", {
              defaultValue: "حجز أخصائي تنظيف",
            })}
          </h2>
          <p className="text-secondary-dark text-sm mb-4">{serviceName}</p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {!isSubmitted ? (
            <>
              {step === 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("booking_choose_workers", {
                      defaultValue: "كم عدد متخصصي التنظيف الذين تحتاجهم؟",
                    })}
                  </h3>
                  <div className="space-y-3">
                    {config.workersOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setWorkers(opt.value)}
                        className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                          workers === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span>{opt.labelAr}</span>
                        <span className="font-semibold text-primary">
                          {t("currency_aed_from", {
                            defaultValue: "من {{price}} د.إ",
                            price: opt.fromPrice,
                          })}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("booking_choose_hours", {
                      defaultValue: "كم ساعة تريد أن تحجز؟",
                    })}
                  </h3>
                  <div className="space-y-3">
                    {config.hoursOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setHours(opt.value)}
                        className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                          hours === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span>{opt.labelAr}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("booking_materials_question", {
                      defaultValue: "هل نحتاج إلى إحضار مواد للتنظيف؟",
                    })}
                  </h3>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setMaterials(true)}
                      className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                        materials
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <span>
                        {t("yes_with_price", {
                          defaultValue: "نعم (+{{price}} د.إ)",
                          price: config.materialsPrice,
                        })}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMaterials(false)}
                      className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                        materials === false
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <span>{t("no_label", { defaultValue: "لا" })}</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      {t("booking_notes_optional", {
                        defaultValue:
                          "أي ملاحظات تترك للاخصائيين؟ (اختياري)",
                      })}
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="textarea textarea-bordered w-full"
                      placeholder={t("booking_notes_placeholder", {
                        defaultValue: "اكتب مذكّرة...",
                      })}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("booking_choose_plan", {
                      defaultValue: "اختيار الباقة المفضلة",
                    })}
                  </h3>
                  <div className="space-y-3">
                    {config.visitPlans.map((plan) => {
                      const workersCount = workers || 0;
                      const hoursCount = hours || (workersCount ? 2 : 0);
                      const hourlyRate =
                        workersCount * hoursCount * config.baseRatePerHourPerWorker;
                      const materialRate = materials ? config.materialsPrice : 0;
                      const singleVisitCost = hourlyRate + materialRate;

                      const planPrice = singleVisitCost * plan.payFor;
                      const planSaving =
                        singleVisitCost * (plan.visits - plan.payFor);

                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setPlanId(plan.id)}
                          className={`w-full flex flex-col items-start rounded-10px border px-4 py-3 text-right ${
                            planId === plan.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span>{plan.labelAr}</span>
                            <span className="font-semibold text-primary">
                              {planPrice.toFixed(2)} د.إ
                            </span>
                          </div>
                          {planSaving > 0 && (
                            <span className="text-xs text-green-600">
                              {t("booking_saving_label", {
                                defaultValue: "وفّر {{amount}} د.إ",
                                amount: planSaving.toFixed(2),
                              })}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                      {t("booking_choose_days", {
                        defaultValue: "اختر أيام المفضلة",
                      })}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {dayOptions.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleToggleDay(day)}
                          className={`flex items-center justify-center rounded-10px border px-3 py-2 text-sm ${
                            selectedDays.includes(day)
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                      {t("booking_where_question", {
                        defaultValue: "أين تريد هذا؟",
                      })}
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => setAddressType("home")}
                        className={`flex-1 rounded-10px border px-3 py-2 text-sm ${
                          addressType === "home"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {t("booking_address_home", { defaultValue: "المنزل" })}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAddressType("hotel")}
                        className={`flex-1 rounded-10px border px-3 py-2 text-sm ${
                          addressType === "hotel"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {t("booking_address_hotel", { defaultValue: "الفندق" })}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAddressType("work")}
                        className={`flex-1 rounded-10px border px-3 py-2 text-sm ${
                          addressType === "work"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {t("booking_address_work", { defaultValue: "العمل" })}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        className="input input-bordered w-full"
                        placeholder={t("booking_building_label", {
                          defaultValue: "المبنى",
                        })}
                        value={building}
                        onChange={(e) => setBuilding(e.target.value)}
                      />
                      <input
                        className="input input-bordered w-full"
                        placeholder={t("booking_floor_label", {
                          defaultValue: "الطابق (اختياري)",
                        })}
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                      />
                      <input
                        className="input input-bordered w-full"
                        placeholder={t("booking_apartment_label", {
                          defaultValue: "الشقة (اختياري)",
                        })}
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                      />
                      <input
                        className="input input-bordered w-full"
                        placeholder={t("booking_street_label", {
                          defaultValue: "الشارع",
                        })}
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <input
                        className="input input-bordered w-full md:col-span-2"
                        placeholder={t("booking_direction_label", {
                          defaultValue: "اتجاه إضافي (اختياري)",
                        })}
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                      />
                      <input
                        className="input input-bordered w-full md:col-span-2"
                        placeholder={t("booking_address_name_label", {
                          defaultValue: "أو ادخل اسم آخر للعنوان",
                        })}
                        value={addressLabel}
                        onChange={(e) => setAddressLabel(e.target.value)}
                      />
                    </div>

                    <div className="mt-4 space-y-3">
                      <h4 className="font-semibold text-base">
                        {t("booking_contact_info_optional", {
                          defaultValue: "معلومات الاتصال (اختياري)",
                        })}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          className="input input-bordered w-full"
                          placeholder={t("booking_first_name", {
                            defaultValue: "الاسم الأول",
                          })}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                          className="input input-bordered w-full"
                          placeholder={t("booking_last_name", {
                            defaultValue: "اسم العائلة",
                          })}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <div className="flex gap-2 col-span-1 md:col-span-2">
                          <input
                            className="input input-bordered w-24"
                            value={phoneCode}
                            onChange={(e) => setPhoneCode(e.target.value)}
                          />
                          <input
                            className="input input-bordered flex-1"
                            placeholder={t("booking_phone_number", {
                              defaultValue: "رقم الهاتف",
                            })}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                      {t("booking_finish_title", {
                        defaultValue: "إنهاء الحجز",
                      })}
                    </h3>
                    <p className="text-sm text-secondary-dark">
                      {t("booking_finish_question", {
                        defaultValue: "كيف تريد الدفع؟",
                      })}
                    </p>
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                          paymentMethod === "card"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span>
                          {t("booking_payment_card", {
                            defaultValue: "بطاقة بنكية",
                          })}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cash")}
                        className={`w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right ${
                          paymentMethod === "cash"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span>
                          {t("booking_payment_cash", {
                            defaultValue: "دفع عند الاستلام",
                          })}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between rounded-10px border px-4 py-3 text-right"
                    >
                      <span>
                        {t("booking_add_promo", {
                          defaultValue: "أضف رمز ترويجي",
                        })}
                      </span>
                    </button>
                    <input
                      className="input input-bordered w-full"
                      placeholder={t("booking_promo_placeholder", {
                        defaultValue: "أدخل الكود إن وجد",
                      })}
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <input
                      className="input input-bordered w-full"
                      placeholder={t("booking_referral_placeholder", {
                        defaultValue: "كود دعوة من صديقك (اختياري)",
                      })}
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                    />
                  </div>

                  <div className="border rounded-10px p-4 space-y-2">
                    <h4 className="font-semibold text-base mb-2">
                      {t("booking_overview_title", {
                        defaultValue: "نظرة عامة على الحجز الخاص بك",
                      })}
                    </h4>
                    <div className="flex justify-between text-sm">
                      <span>{t("booking_overview_subtotal", { defaultValue: "المجموع الفرعي" })}</span>
                      <span>{priceSummary.subTotal.toFixed(2)} د.إ</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t("booking_overview_service_fee", { defaultValue: "رسوم الخدمة" })}</span>
                      <span>{priceSummary.serviceFee.toFixed(2)} د.إ</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t("booking_overview_materials", { defaultValue: "مواد للتنظيف" })}</span>
                      <span>{priceSummary.materialsCost.toFixed(2)} د.إ</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t("booking_overview_tax", { defaultValue: "ضريبة" })}</span>
                      <span>{priceSummary.tax.toFixed(2)} د.إ</span>
                    </div>
                    {priceSummary.discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>{t("booking_overview_free_visits", { defaultValue: "زيارات مجانية" })}</span>
                        <span>-{priceSummary.discount.toFixed(2)} د.إ</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-semibold mt-2">
                      <span>{t("booking_overview_total", { defaultValue: "المجموع" })}</span>
                      <span>{priceSummary.total.toFixed(2)} د.إ</span>
                    </div>
                  </div>

                  <p className="text-xs text-secondary-dark">
                    {t("booking_terms_hint", {
                      defaultValue:
                        "من خلال المتابعة، فإنك توافق على الشروط والأحكام وسياسة الاسترداد.",
                    })}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col md:flex-row gap-3 justify-between items-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="btn btn-outline btn-primary min-w-[140px]"
                >
                  {t("previous_step", { defaultValue: "السابق" })}
                </button>
                <div className="flex-1 text-right text-sm text-secondary-dark">
                  {workers && hours && (
                    <div>
                      <span>
                        {workers}{" "}
                        {t("booking_worker_label", {
                          defaultValue: "أخصائية تنظيف",
                        })}
                      </span>
                      {" | "}
                      <span>
                        {hours}{" "}
                        {t("booking_hours_label", { defaultValue: "ساعة" })}
                      </span>
                      {materials && (
                        <>
                          {" | "}
                          <span>
                            {t("booking_materials_short", {
                              defaultValue: "مواد التنظيف",
                            })}
                          </span>
                        </>
                      )}
                      {selectedPlan && (
                        <>
                          {" | "}
                          <span>
                            {selectedPlan.visits}{" "}
                            {t("booking_visits_label", {
                              defaultValue: "زيارة",
                            })}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                  <div className="font-semibold text-primary mt-1">
                    {priceSummary.total.toFixed(2)} د.إ
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canGoNext}
                  className="btn btn-primary min-w-[180px] disabled:opacity-60"
                >
                  {step < 5
                    ? t("next_step", { defaultValue: "التالي" })
                    : t("confirm_and_pay", { defaultValue: "دفع وتأكيد الحجز" })}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-4xl text-success">✓</div>
              <h3 className="text-xl font-semibold">
                {t("booking_submitted_title", {
                  defaultValue: "تم إنشاء الحجز ).",
                })}
              </h3>
              <p className="text-secondary-dark text-sm">
                {t("booking_submitted_message", {
                  defaultValue:
                    "تم التسجيل",
                })}
              </p>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-primary mt-2"
              >
                {t("back_to_home", { defaultValue: "العودة للرئيسية" })}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;

