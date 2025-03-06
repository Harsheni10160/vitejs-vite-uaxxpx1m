import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "./photo/WhatsApp Image 2025-01-14 at 14.48.35_0c69f52c.jpg";
  const name = "DEVA HARSHENI .S";
  const email = "Harsheni10160@gmail.com";
  const phone = "9952222149";
  const address = "42,Pranav Illam,Allamara Thottam,Navavoor Pirivu,Coimbatore-46";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 border border-gray-20">
      <img
        className="w-24 h-24 rounded-2xl mx-auto"
        src={profilePhoto}
        alt="User Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-500 mt-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;

