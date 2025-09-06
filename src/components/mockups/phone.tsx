import clsx from "clsx";
import "./phone.css";

export const PhoneMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div
          className={clsx({
            overflow: "hidden",
            borderRadius: "30px",
          })}
        >
          {children}
        </div>
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
    </div>
  );
};
