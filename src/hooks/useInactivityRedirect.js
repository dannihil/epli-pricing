import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const INACTIVITY_TIME = 2 * 60 * 1000; // 20 seconds (testing)

export default function useInactivityRedirect() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        window.location.reload();
      }, INACTIVITY_TIME);
    };

    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timerRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [navigate]);
}
