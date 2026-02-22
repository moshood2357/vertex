
"use client";
import { useEffect } from "react";

export default function TawkWidget() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/698443eeb35c9b1c2f681075/1jgmaint8";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null;
}
