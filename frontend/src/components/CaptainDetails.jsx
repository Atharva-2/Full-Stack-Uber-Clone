import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-start gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP5zVy9oPoJq-c5e6EuyDiunfoTyjNj4mMA&s"
            alt=" "
          />
          <h4 className="text-lg font-medium">Atharva Rasal</h4>
        </div>
        <div className="text-center">
          <h5 className="text-lg font-semibold">$300</h5>
          <p className="text-gray-500"> Earned</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl flex p-3 pb-5 pt-5 justify-center gap-10 items-start">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hourss Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hourss Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hourss Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
