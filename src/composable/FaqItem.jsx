import { useState } from "react";

const FaqItem = ({ title, children, icon }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className="accordion-item border-0">
      <button
        onClick={() => setOpen(!open)}
        className="accordion-toggle inline-flex items-center justify-between w-full text-start bg-surface-light"
      >
        <span className="inline-flex items-center gap-x-4">
          <span className={`icon-[${icon}] text-base-content size-6`}></span>
          {title}
        </span>
        <span
          className={`icon-[tabler--chevron-left] text-base size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180 ${
            open ? "-rotate-90" : ""
          }`}
        ></span>
      </button>
      <div
        className={`accordion-content overflow-hidden transition-all transition-[height] duration-400 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-4">{children}</div>
      </div>
    </div>
  );
};
export default FaqItem;