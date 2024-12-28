import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center top-0 text-gray-300 w-full"
      >
        <i className="text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="w-full border-gray-400 active:border-black rounded-xl p-3 mb-2  flex items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-semibold">
            UberGo{"  "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="text-base">2 mins away</h5>
          <p className="text-gray-600 text-sm">Comfortable rides</p>
        </div>
        <h2 className="font-semibold text-xl">$193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="w-full active:border-black rounded-xl p-3 mb-2  flex items-center justify-between"
      >
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-semibold">
            Moto{"  "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="text-base">1 mins away</h5>
          <p className="text-gray-600 text-sm">Affordable motorcycle rides</p>
        </div>
        <h2 className="font-semibold text-xl">$193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="w-full active:border-black rounded-xl p-3 mb-2 flex items-center justify-between"
      >
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-semibold">
            UberAuto{"  "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="text-base">2 mins away</h5>
          <p className="text-gray-600 text-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-semibold text-xl">$193.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
