import { useNavigate, useSearchParams } from "react-router-dom";

export default function PaymentFailed() {
  const [searchParams] = useSearchParams();
  const tranRef = searchParams.get("tranRef");
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center min-h-[88vh] bg-base-200 px-4">
      <div className="bg-base-100 shadow-lg rounded-3xl p-8 w-full max-w-md text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="bg-error/10 text-error p-4 rounded-full animate-pulse size-24">
            <span className="icon-[mdi--close-circle] text-6xl"></span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-base-content mb-2">
          Payment Failed ❌
        </h1>
        <p className="text-base-content/70">
          Unfortunately, your payment could not be processed.
          <br />
          <span className="text-sm block mt-1">
            Transaction Ref: <strong>{tranRef || "N/A"}</strong>
          </span>
        </p>

        <div className="bg-error/10 border border-error/20 rounded-xl p-4 mt-6 text-sm text-error text-left space-y-1">
          <p>⚠️ The transaction was declined by your bank or card provider.</p>
          <p>💳 Please check your payment details and try again.</p>
          <p>📞 Contact support if you believe this is an error.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-error w-full sm:w-1/2 rounded-full h-10"
          >
            <span className="icon-[mdi--refresh] text-lg mr-1"></span>
            Try Again
          </button>
          <button
            onClick={() => window.open('https://wa.me/971500000000', '_blank')}
            className="btn btn-outline btn-error w-full sm:w-1/2 rounded-full whitespace-nowrap h-10"
          >
            <span className="icon-[mdi--whatsapp] text-lg whitespace-nowrap mr-1"></span>
            WhatsApp Support
          </button>
        </div>
      </div>
    </section>
  );
}
