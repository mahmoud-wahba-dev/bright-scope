import AddsOn from "./Components/AddsOn";
import ChoosePackage from "./Components/ChoosePackage";
import GlobalFaq from "./Components/GlobalFaq";
import SelectedPackage from "./Components/SelectedPackage";
import ServiceFaq from "./Components/ServiceFaq";
import ServiceFeature from "./Components/ServiceFeature";
import WhyChooseBright from "./Components/WhyChooseBright";

const ServiceDetails = () => {
  return (
    <div className="container">
      <ServiceFeature />
      <ChoosePackage />
      <AddsOn />
      <SelectedPackage />
      <ServiceFaq />
      <WhyChooseBright />
      <GlobalFaq />
    </div>
  );
};

export default ServiceDetails;
