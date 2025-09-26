import React from "react";

import liquidLogo from "../assets/liquidlogo.png";
export default function Preloader() {
  return (
<div className="flex items-center justify-center h-screen bg-white">
<img
        src={liquidLogo}
        alt="Loading..."
        className="h-22 w-60 animate-pulse"
      />
</div>
  );

}

 