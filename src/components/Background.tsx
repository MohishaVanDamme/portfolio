import { useEffect, useState } from "react";

function Background() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect mobile
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);

    if (media.addEventListener) media.addEventListener("change", updateMobile);
    else media.addListener(updateMobile);

    updateMobile(); // initial check

    // Detect dark mode
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDark = () => setIsDark(darkMedia.matches);

    if (darkMedia.addEventListener) darkMedia.addEventListener("change", updateDark);
    else darkMedia.addListener(updateDark);

    updateDark(); // initial check

    return () => {
      if (media.removeEventListener) media.removeEventListener("change", updateMobile);
      else media.removeListener(updateMobile);

      if (darkMedia.removeEventListener) darkMedia.removeEventListener("change", updateDark);
      else darkMedia.removeListener(updateDark);
    };
  }, []);

  // Background colors for light/dark mode
  const baseGradient = isDark
    ? "linear-gradient(135deg, #16171d 0%, #2e303a 50%, #1f2028 100%)"
    : "linear-gradient(135deg, #faf7ff 0%, #ebdcff 50%, #d4b8ff 100%)";

  const nebula1 = isDark
    ? `
      radial-gradient(circle at 20% 30%, rgba(120,81,220,0.3), transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(160,120,255,0.2), transparent 50%)
    `
    : `
      radial-gradient(circle at 20% 30%, rgba(179,136,235,0.45), transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(200,160,255,0.4), transparent 50%)
    `;

  const nebula2 = isDark
    ? `
      radial-gradient(circle at 60% 20%, rgba(100, 50, 200,0.35), transparent 60%),
      radial-gradient(circle at 30% 80%, rgba(150, 80, 240,0.25), transparent 60%)
    `
    : `
      radial-gradient(circle at 60% 20%, rgba(147, 51, 234, 0.45), transparent 60%),
      radial-gradient(circle at 30% 80%, rgba(168, 85, 247, 0.4), transparent 60%)
    `;

  return (
    <div
      className={`-z-10 overflow-hidden`}
      style={{
        position: isMobile ? "absolute" : "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: isMobile ? "auto" : "100vh",
        minHeight: "100%",
        background: baseGradient,
      }}
    >
      {/* Nebula layer 1 */}
      <div
        className="absolute inset-0 animate-float-slow"
        style={{
          background: nebula1,
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />

      {/* Nebula layer 2 */}
      <div
        className="absolute inset-0 animate-float-fast"
        style={{
          background: nebula2,
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default Background;