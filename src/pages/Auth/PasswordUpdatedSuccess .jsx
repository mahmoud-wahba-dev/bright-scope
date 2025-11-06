import { Link } from "react-router-dom";

const PasswordUpdatedSuccess = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="text-center bg-surface-light p-10 rounded-30px shadow-[0_0_20px_0_#00000040] max-w-lg">
        <div className="flex justify-center mb-4 size-28 rounded-full bg-primary text-white center_flex m-auto shadow-[0_4px_4px_#00000040]">
          <span className="icon-[mdi--check-circle-outline] size-16"></span>
        </div>
        <h2 className="font-semibold text-32px text-primary-dark mb-3">
          Password Updated Successfully!
        </h2>
        <p className="font-normal text-16px mb-6 text-secondary-dark">
          You can now log in using your new password.
        </p>
        <Link
          to="/login"
          className="btn btn-primary btn-gradient h-14 rounded-55px font-semibold text-base uppercase"
        >
          Go to Login
          <span className="icon-[mdi--arrow-right] ms-2"></span>
        </Link>
      </div>
    </section>
  );
};

export default PasswordUpdatedSuccess;
