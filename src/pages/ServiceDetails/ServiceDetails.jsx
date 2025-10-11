import AddsOn from "./Components/AddsOn";
import ChoosePackage from "./Components/ChoosePackage";
import SelectedPackage from "./Components/SelectedPackage";
import ServiceFeature from "./Components/ServiceFeature";

const ServiceDetails = () => {
  return (
    <div className="container">
      <ServiceFeature />
      <ChoosePackage />
      <AddsOn />
      <SelectedPackage />
      <ServiceFaq />
    </div>
  );
};

export default ServiceDetails;
