"use client";

import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("Zgoda", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="relative w-full z-50 flex justify-start">
      <div className="fixed   bottom-48 px-10 py-10 tablet:bottom-5 rounded-3xl shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35]  bg-main-bg  tablet:w-[450px] mb-30 flex flex-col  items-center gap-y-5 tablet:mx-0 mx-5 justify-between tablet:gap-x-5 tablet:px-4 tablet:py-2 laptop:py-4">
        <CookieOutlinedIcon fontSize="large" sx={{ color: "#36FFB5" }} />
        <span className="text-white text-sm laptop:text-base my-5 laptop:my-5">
          Używam plików cookie na naszej stronie internetowej, aby zapewnić Ci
          najbardziej odpowiednie preferencje. Klikając „Akceptuj”, wyrażasz
          zgodę na użycie plików cookie.
        </span>
        <button
          className="bg-primary py-2 transition ease-in-out duration-300 hover:scale-105 laptop:px-8 px-4 text-sm tablet:text-sm laptop:text-base rounded-3xl text-white font-semibold"
          onClick={() => acceptCookie()}
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
