import { useParams, useNavigate } from "react-router-dom";
import AddsOn from "./Components/AddsOn";
import ChoosePackage from "./Components/ChoosePackage";
import GlobalFaq from "./Components/GlobalFaq";
import SelectedPackage from "./Components/SelectedPackage";
import ServiceFaq from "./Components/ServiceFaq";
import ServiceFeature from "./Components/ServiceFeature";
import WhyChooseBright from "./Components/WhyChooseBright";
import { useEffect, useState, useRef } from "react";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import Modal from "../../composable/Modal";
import BookingPreview from "./Components/BookingPreview"; // added import

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [total, setTotal] = useState(0);

  // add: modal ref and booking preview
  const modalRef = useRef(null);
  const [bookingPreview, setBookingPreview] = useState(null);

  // Fetch service details using the id
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await apiHelper.get(`services/services/${id}`);
        const data = response.data;
        setServiceDetails(data);
      } catch (error) {
        console.log(error);
        notyf.error("Failed to load service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);
  // Update total whenever selections change

  useEffect(() => {
    let totalPrice = 0;
    if (selectedPackage) {
      totalPrice += Number(selectedPackage.price);
    }
    if (selectedAddons.length > 0) {
      totalPrice += selectedAddons.reduce(
        (acc, addon) => acc + Number(addon.price),
        0
      );
    }

    setTotal(totalPrice);
  }, [selectedPackage, selectedAddons]);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Loading service details...</p>
      </div>
    );
  }
  // helper: persist booking and navigate so Checkout can recover on refresh
  const goToCheckout = (data) => {
    try {
      sessionStorage.setItem("booking_preview", JSON.stringify(data));
    } catch (e) {
      console.warn("Failed to persist booking preview:", e);
    }
    navigate("/checkout", { state: { booking: data } });
  };

  const handleBookNow = () => {
    if (!selectedPackage) {
      notyf.error("Please select a package before booking.");
      return;
    }

    const bookingData = {
      serviceId: serviceDetails.id,
      serviceName: serviceDetails.name,
      package: selectedPackage,
      addons: selectedAddons,
      total,
    };

    setBookingPreview(bookingData);
    modalRef.current?.open?.();
  };

  if (!serviceDetails) {
    return <p className="text-center text-red-500">Service not found.</p>;
  }
  return (
    <div className="container">
      <ServiceFeature serviceDetails={serviceDetails} />
      <ChoosePackage
        packages={serviceDetails.packages}
        selectedPackage={selectedPackage}
        onSelectPackage={setSelectedPackage}
        onBookNow={handleBookNow}
      />
      <AddsOn
        addOns={serviceDetails.addons}
        selectedAddons={selectedAddons}
        onToggleAddon={(addon) => {
          setSelectedAddons((prev) =>
            prev.some((a) => a.id === addon.id)
              ? prev.filter((a) => a.id !== addon.id)
              : [...prev, addon]
          );
        }}
      />
      <SelectedPackage
        selectedPackage={selectedPackage}
        selectedAddons={selectedAddons}
        total={total}
        onBookNow={handleBookNow}
      />

      {/* modal instance used for booking confirmation */}
      <Modal
        ref={modalRef}
        title="Book Your Service"
        onConfirm={() => {
          if (!bookingPreview) return;
          // persist + navigate
          goToCheckout(bookingPreview);
        }}
      >
        {/* Use the dedicated BookingPreview component */}
        <BookingPreview
          data={bookingPreview}
          onContinue={(data) => {
            if (!data) return;
            goToCheckout(data);
          }}
        />
      </Modal>

      <ServiceFaq />
      <WhyChooseBright />
      <GlobalFaq />
    </div>
  );
};

export default ServiceDetails;
