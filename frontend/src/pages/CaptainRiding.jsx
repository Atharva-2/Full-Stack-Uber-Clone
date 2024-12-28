import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRiding from "../components/FinishRiding";

const CaptainRiding = () => {
  const [finishRidingPanel, setFinishRidingPanel] = useState(false);
  const FinishRidingPanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidingPanel) {
        gsap.to(FinishRidingPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(FinishRidingPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidingPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 w-screen flex items-center justify-between">
        <img
          className=" w-20"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className=" h-10 w-10 rounded-full flex items-center justify-center bg-white"
        >
          <i className="text-xl font-semibold ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-5/6">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setFinishRidingPanel(true);
        }}
        className="h-1/6 p-6 flex items-center justify-center relative bg-yellow-400 pt-10 gap-5"
      >
        <h5 className="absolute p-1 text-center top-0 text-black w-full">
          <i className="text-3xl font-bold ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>

        <div
          ref={FinishRidingPanelRef}
          className="bg-gray-100 fixed translate-y-full z-10 w-full  bottom-0 px-3 py-8"
        >
          <FinishRiding setFinishRidingPanel={setFinishRidingPanel} />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
