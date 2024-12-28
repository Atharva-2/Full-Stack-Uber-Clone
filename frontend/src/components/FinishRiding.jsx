import React from "react";

const FinishRiding = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidingPanel(false);
        }}
        className="p-1 text-center -mt-5 text-gray-300 w-full"
      >
        <i className="text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold w-full text-center">
        Reached the destination!
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
      <button className="mt-10 w-full rounded-md text-center text-2xl  font-semibold p-3 bg-green-500">
        Complete the Trip →
      </button>
    </div>
  );
};

export default FinishRiding;
