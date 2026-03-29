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
  
    useEffect(() => {
      const media = window.matchMedia("(max-width: 768px)");
  
      const update = () => setIsMobile(media.matches);
  
      update(); // initial check
      media.addEventListener("change", update);
  
      return () => media.removeEventListener("change", update);
    }, []);

  
  return (
    <div className="flex items-center h-full w-full" 
      style={isMobile ? styles.gsm : styles.section}
    >
      <div className='flex flex-col justify-evenly gap-6 w-full px-6'>
        <h1 className="text-center">Vaardigheden</h1>
        <div>
          <h2 className="flex items-center gap-2"><Settings size={20} /> Technische vaardigheden</h2>
          <ul className="space-y-3">
              {technicalSkills.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-accent group-hover:scale-110 transition">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
        </div>
        <div>
          <h2 className="flex items-center gap-2"><Globe size={20} /> Talen</h2>
          <ul className="space-y-3">
              {[
                "Nederlands (moedertaal)",
                "Frans (goed)",
                "Engels (goed)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-accent group-hover:scale-110 transition">
                    ●
                  </span>
                  {item}
                </li>
              ))}
            </ul>
        </div>
        <div>
          <h2 className="flex items-center gap-2"><User size={20} /> Soft skills</h2>
          <ul className="space-y-3">
              {[
                "Nauwkeurig",
                "Empathisch",
                "Diplomatiek",
                "Sterk observerend vermogen"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <span className="text-accent group-hover:scale-110 transition">
                    ●
                  </span>
                  {item}
                </li>
              ))}
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
    padding: "2.5rem 1rem"
  }
};

export default Skills;