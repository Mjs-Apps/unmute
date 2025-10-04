"use client";
import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("serviceWorker" in navigator) {
      (async () => {
        try {
          const reg = await navigator.serviceWorker.register("/sw.js");
          reg.addEventListener("updatefound", () => {
            const nw = reg.installing;
            if (!nw) return;
            nw.addEventListener("statechange", () => {
              if (nw.state === "installed" && navigator.serviceWorker.controller) {
                console.log("New content available; refresh to update.");
              }
            });
          });
        } catch (e) {
          console.error("SW registration failed", e);
        }
      })();
    }
  }, []);
  return null;
}
