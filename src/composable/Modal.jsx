import { useBookingStore } from "../store/bookingStore";

const Modal = () => {
  const { bookingData, isBookingModalOpen, closeBookingModal } =
    useBookingStore();

  if (!isBookingModalOpen) return null; // don't render if closed

  return (
    <div
      className="overlay modal overlay-open:opacity-100 overlay-open:duration-300"
      role="dialog"
      data-overlay-keyboard="false"
    >
      <div className="modal-dialog max-w-lg">
        <div className="modal-content">
          <div className="modal-header relative">
            <h3 className="modal-title">Book Your Service</h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              onClick={closeBookingModal}
            >
              <span className="icon-[tabler--x] size-4"></span>
            </button>
          </div>

          {/* modal body */}
          <div className="modal-body">
            {/* your form content */}
            <p>Total: AED {bookingData?.total}</p>
          </div>

          <div className="modal-footer flex justify-between">
            <button
              type="button"
              className="btn btn-outline"
              onClick={closeBookingModal}
            >
              Back
            </button>
            <button type="button" className="btn btn-primary">
              Continue to Payment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
