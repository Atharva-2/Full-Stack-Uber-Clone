import React from "react";

const ConfirmRidePanel = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold w-full text-center">
        Confirm your Ride{" "}
      </h3>
      <div className="flex items-center justify-center">
        <img
          className=" h-24"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-xl ri-map-pin-3-fill"></i>
          <div>
            <h3 className="font-semibold text-lg">A2/103</h3>
            <p className="text-base -mt-1 text-gray-500">
              Silver Park, Mira Road(E)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="font-semibold text-lg">
              Thakur College of Engineering
            </h3>
            <p className="text-base -mt-1 text-gray-500">Kandivali(East)</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
          <i className="ri-bank-card-line"></i>
          <div>
            <h3 className="font-semibold text-lg">$193.20</h3>
            <p className="text-base -mt-1 text-gray-500">Cash Cash</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <Link
          className="w-1/2 bg-green-500 text-white font-semibold p-2 rounded-md"
        >
          Confirm
        </Link>
        <button
          onClick={() => {
            props.setVehiclePanel(true);
            props.setConfirmRidePanel(false)
          }}
          className="w-1/2 bg-red-500 text-white font-semibold p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePanel;
