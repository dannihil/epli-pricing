import { useEffect, useRef } from "react";

const IDLE_THRESHOLD = 30 * 1000; // only reload if idle for 30+ seconds

export default function useVersionCheck(interval = 5 * 60 * 1000) {
  const lastActivity = useRef(Date.now());

  useEffect(() => {
    const onActivity = () => {
      lastActivity.current = Date.now();
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, onActivity));

    const getLoadedHash = () => {
      const script = document.querySelector('script[src*="/assets/index-"]');
      if (!script) return null;
      const match = script.src.match(/index-([^.]+)\.js/);
      return match ? match[1] : null;
    };

    const check = async () => {
      const idle = Date.now() - lastActivity.current;
      if (idle < IDLE_THRESHOLD) return; // user is active, skip

      try {
        const res = await fetch("/", { cache: "no-store" });
        const html = await res.text();
        const match = html.match(/src="\/assets\/index-([^"]+)\.js"/);
        if (!match) return;
        const deployedHash = match[1];
        const loadedHash = getLoadedHash();
        if (loadedHash && deployedHash !== loadedHash) {
          window.location.reload();
        }
      } catch {
        // network error — try again next interval
      }
    };

    const timer = setInterval(check, interval);

    return () => {
      clearInterval(timer);
      events.forEach((e) => window.removeEventListener(e, onActivity));
    };
  }, [interval]);
}
