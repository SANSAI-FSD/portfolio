import React from "react";
import bannerImg from "../../assets/images/sansai999.png";

const RightBanner = () => {
  return (
    <div className="hidden lgl:flex w-full lgl:w-1/2 justify-center items-center relative">
      <img
        src={bannerImg}
        alt="banner"
        className="w-[300px] lgl:w-[500px] lgl:h-[680px] z-10"
      />
      {/* Optional background */}
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
