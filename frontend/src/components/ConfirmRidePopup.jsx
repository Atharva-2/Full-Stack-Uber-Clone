import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold w-full text-center">
        Confirm the Ride
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
        <div className="p-3 border-b-2">
          <h2 className="font-semibold text-lg">Pickup Address</h2>
          <h3 className="font-normal text-lg">
            A2/103 Silver Park, Mira Road(E)
          </h3>
        </div>
        <div className="p-3 border-b-2">
          <h2 className="font-semibold text-lg">Drop Address</h2>
          <h3 className="font-normal text-lg">
            Thakur College of Engineering and Technology, Kandivali(East)
          </h3>
        </div>
      </div>
      <div className="p-3 mt-5">
        <div className="flex justify-between ">
          <h3>Actual Price</h3>
          <h3>$192.44</h3>
        </div>
        <div className="flex justify-between">
          <h3>Discount</h3>
          <h3>$00.00</h3>
        </div>
        <div className="flex justify-between ">
          <h3>Final Price</h3>
          <h3>$192.44</h3>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mt-6 p-5"
      >
        <div class="flex justify-center space-x-2">
          <input
            type="text"
            maxlength="1"
            class="w-16 h-16 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder="0"
          />
          <input
            type="text"
            maxlength="1"
            class="w-16 h-16 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder="0"
          />
          <input
            type="text"
            maxlength="1"
            class="w-16 h-16 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder="0"
          />
          <input
            type="text"
            maxlength="1"
            class="w-16 h-16 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder="0"
          />
        </div>

        <div className="flex gap-2 mt-5">
          <Link
            to="/captain-riding"
            className="w-1/2 flex justify-center bg-green-500 text-white font-semibold p-2 rounded-md"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-1/2 bg-red-500 text-white font-semibold p-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmRidePopup;
