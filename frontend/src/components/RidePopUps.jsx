import React from "react";

const RidePopUps = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold w-full text-center">
        New Ride Available!
      </h3>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-3">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP5zVy9oPoJq-c5e6EuyDiunfoTyjNj4mMA&s"
            alt=""
          />
          <h4 className="text-lg font-semibold">Atharva Rasal</h4>
        </div>
        <h5 className="text-xl font-bold">$192.44</h5>
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
        <div className="flex items-center gap-5 p-3 ">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="font-semibold text-lg">
              Thakur College of Engineering
            </h3>
            <p className="text-base -mt-1 text-gray-500">Kandivali(East)</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className="w-1/2 bg-green-500 text-white font-semibold p-2 rounded-md"
        >
          Accept
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-1/2 bg-gray-300 text-gray-600 font-semibold p-2 rounded-md"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUps;
