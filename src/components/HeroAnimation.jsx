import { useEffect, useState } from "react";

// Props:
// - frameCount: total number of PNG frames
// - framePath: path pattern, e.g., "/assets/hero_frames/frame_%04d.png"
// - fps: frames per second
function HeroAnimation({ frameCount, framePath, fps = 30 }) {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev % frameCount) + 1);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frameCount, fps]);

  // Pad the frame number to 4 digits, e.g., 0001
  const paddedFrame = String(currentFrame).padStart(4, "0");
  const src = framePath.replace("%04d", paddedFrame);

  return (
    <div
      className="hero-video"
      style={{
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
        background: "#e0f7ff", // fallback color
      }}
    >
      <img
        src={src}
        alt="Hero Animation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

export default HeroAnimation;
