import ContactHint from "./components/ContactHint";
import GetInTouch from "./components/GetInTouch";
import QuickContact from "./components/QuickContact";
import SocialMedia from "./components/SocialMedia";

const Contact = () => {
  return (
    <div className="container">
      <GetInTouch />
      <QuickContact />
      <SocialMedia />
        <ContactHint />
    </div>
  );
};

export default Contact;
