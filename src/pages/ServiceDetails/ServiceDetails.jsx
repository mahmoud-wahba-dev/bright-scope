import { useParams } from "react-router-dom";
import AddsOn from "./Components/AddsOn";
import ChoosePackage from "./Components/ChoosePackage";
import GlobalFaq from "./Components/GlobalFaq";
import SelectedPackage from "./Components/SelectedPackage";
import ServiceFaq from "./Components/ServiceFaq";
import ServiceFeature from "./Components/ServiceFeature";
import WhyChooseBright from "./Components/WhyChooseBright";
import { useEffect, useState } from "react";
import apiHelper from "../../api/apiHelper";
import { notyf } from "../../utils/toast";
import { useBookingStore } from "../../store/bookingStore";
import Modal from "../../composable/Modal";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [total, setTotal] = useState(0);
  const { setBookingData, openBookingModal } = useBookingStore();

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
  const handleBookNow = () => {
    console.log(selectedPackage, "from booknow");

    if (!selectedPackage) {
      notyf.error("Please select a package before booking.");

      return;
    }

    const bookingData = {
      serviceId: serviceDetails.id,
      package: selectedPackage,
      addons: selectedAddons,
      total,
    };

    setBookingData(bookingData);
    openBookingModal(); // instead of document.querySelector

    // You can save it in localStorage or global state (e.g. Redux, Zustand)
    // localStorage.setItem("bookingData", JSON.stringify(bookingData));

    console.log("Booking Data:", bookingData);
    // navigate("/checkout") or proceed to payment
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
      <ServiceFaq />
      <WhyChooseBright />
      <GlobalFaq />

      <Modal />
    </div>
  );
};

export default ServiceDetails;
