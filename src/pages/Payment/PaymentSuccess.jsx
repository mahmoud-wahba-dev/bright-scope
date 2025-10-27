import { useNavigate, useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const tranRef = searchParams.get("tranRef");
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center min-h-[88vh] bg-base-200 px-4">
      <div className="bg-base-100 shadow-lg rounded-3xl p-8 w-full max-w-md text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="bg-success/10 text-success p-4 rounded-full animate-bounce">
            <span className="icon-[mdi--check-circle] text-6xl"></span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-base-content mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-base-content/70">
          Your payment has been processed successfully.
          <br />
          <span className="text-sm block mt-1">
            Transaction Ref: <strong>{tranRef || "N/A"}</strong>
          </span>
        </p>

        <div className="bg-success/10 border border-success/20 rounded-xl p-4 mt-6 text-sm text-success text-left space-y-1">
          <p>✅ Your booking is confirmed.</p>
          {/* <p>📩 A confirmation email will be sent shortly.</p> */}
          <p>🗓 You can view your booking anytime from your account.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={() => navigate("/")}
            className="btn btn-success w-full sm:w-1/2 rounded-full h-10"
          >
            <span className="icon-[mdi--home] text-lg mr-1"></span>
            Go Home
          </button>
          <button
            onClick={() => window.open('https://wa.me/971500000000', '_blank')}
            className="btn btn-outline btn-success w-full sm:w-1/2 rounded-full whitespace-nowrap h-10"
          >
            <span className="icon-[mdi--whatsapp] text-lg whitespace-nowrap mr-1 "></span>
            WhatsApp Support
          </button>
        </div>
      </div>
    </section>
  );
}
