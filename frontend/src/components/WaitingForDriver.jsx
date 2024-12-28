import React from "react";

const WaitingForDriver = () => {
  return (
    <div>
      <div className="flex w-full justify-end items-center border-b-2 pb-3">
        <h3 className="text-2xl font-semibold w-full">Driver reaching in...</h3>
        <div className="bg-black text-white h-12 w-12 text-sm text-center">
          <h3 className="mt-1 -mb-1">2</h3>
          <h3 className="">mins</h3>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pb-4">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="text-right">
          <h3 className="text-lg font-medium -mb-1">Atharva Rasal</h3>
          <h2 className="text-xl font-semibold">MH 04 DH 6946</h2>
          <p className="text-sm text-gray-500 -mt-1">Maruti suzuki Wagonr</p>
        </div>
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
    </div>
  );
};

export default WaitingForDriver;
