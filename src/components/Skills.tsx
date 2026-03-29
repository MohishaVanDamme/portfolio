import { Globe, User, Settings } from "lucide-react";
import { Code, Server, Database, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const technicalSkills = [
  {
    icon: <Code size={18} />,
    text: "Frontend: HTML, CSS, JavaScript, React, Typescript",
  },
  {
    icon: <Server size={18} />,
    text: "Backend: Node.js, Java, .NET (C#, Blazor)",
  },
  {
    icon: <Database size={18} />,
    text: "Database: SQL, DynamoDB",
  },
  {
    icon: <Wrench size={18} />,
    text: "Andere: Python, Kotlin",
  },
];

function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Mobile detection
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);
    if (media.addEventListener) media.addEventListener("change", updateMobile);
    else media.addListener(updateMobile);
    updateMobile();

    // Dark mode detection
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDark = () => setIsDark(darkMedia.matches);
    if (darkMedia.addEventListener) darkMedia.addEventListener("change", updateDark);
    else darkMedia.addListener(updateDark);
    updateDark();

    return () => {
      if (media.removeEventListener) media.removeEventListener("change", updateMobile);
      else media.removeListener(updateMobile);
      if (darkMedia.removeEventListener) darkMedia.removeEventListener("change", updateDark);
      else darkMedia.removeListener(updateDark);
    };
  }, []);

  // Dynamic colors for light/dark mode
  const textColor = isDark ? "text-gray-200" : "text-gray-900";
  const accentColor = isDark ? "text-purple-400" : "text-accent";
  const headingColor = isDark ? "text-gray-100" : "text-gray-900";

  return (
    <div
      className="flex w-full"
      style={isMobile ? styles.gsm : styles.section}
    >
      <div className="flex flex-col justify-evenly gap-6 w-full px-6">
        <h1 className={`text-center font-heading ${headingColor}`}>Vaardigheden</h1>

        {/* Technische vaardigheden */}
        <div>
          <h2 className={`flex items-center gap-2 font-semibold ${headingColor}`}>
            <Settings size={20} /> Technische vaardigheden
          </h2>
          <ul className="space-y-3 mt-2">
            {technicalSkills.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 group transition-all ${textColor}`}
              >
                <span className={`group-hover:scale-110 transition-transform ${accentColor}`}>
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Talen */}
        <div>
          <h2 className={`flex items-center gap-2 font-semibold ${headingColor}`}>
            <Globe size={20} /> Talen
          </h2>
          <ul className="space-y-3 mt-2">
            {["Nederlands (moedertaal)", "Frans (goed)", "Engels (goed)"].map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 group transition-all ${textColor}`}
              >
                <span className={`group-hover:scale-110 transition-transform ${accentColor}`}>
                  ●
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft skills */}
        <div>
          <h2 className={`flex items-center gap-2 font-semibold ${headingColor}`}>
            <User size={20} /> Soft skills
          </h2>
          <ul className="space-y-3 mt-2">
            {["Nauwkeurig", "Empathisch", "Diplomatiek", "Sterk observerend vermogen"].map(
              (item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 group transition-all ${textColor}`}
                >
                  <span className={`group-hover:scale-110 transition-transform ${accentColor}`}>
                    ●
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: "0rem 2rem",
  },
  gsm: {
    padding: "2.5rem 1rem",
  },
};

export default Skills;