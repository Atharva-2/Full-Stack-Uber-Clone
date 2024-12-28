import React from "react";
import {Link} from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 rounded-full flex items-center justify-center bg-white"
      >
        <i className=" text-xl font-semibold ri-home-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-5">
        <div className="flex justify-between items-center mt-4 pb-6 border-b-2">
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
          <div className="flex items-center gap-5 p-3 ">
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
          <button className="w-full bg-green-500 text-white font-semibold p-2 rounded-md">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
