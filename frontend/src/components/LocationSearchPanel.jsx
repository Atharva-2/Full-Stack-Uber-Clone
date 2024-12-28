import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  const locations = [
    "Silver Park, A2/103, Mira Bhayander Road, Mira Road(East)",
    "Scad Technologies, Malad Industrial Estate, Malad(West)",
    "Thakur College of Engineering and Technology, Kandivali(East)",
    "VJTI, H.R. Mahajani Road, Near Khalsa College Matunga(East)",
  ];

  const handleLocationClick = () => {
    setPanelOpen(false); // Close the location panel
    setVehiclePanel(true); // Open the vehicle panel
  };

  return (
    <div>
      {locations.map((elem, index) => (
        <div
          key={index}
          onClick={handleLocationClick} // Call the handler when clicking a location
          className="flex gap-4 active:bg-gray-100 p-4 items-center justify-start"
        >
          <h2 className="bg-[#eee] flex items-center justify-center h-10 w-10 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4>{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
