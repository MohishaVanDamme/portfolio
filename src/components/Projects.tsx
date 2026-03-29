import { Link, Accordion, cn } from '@heroui/react';
import { ChevronDown, Earth, Pin, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect mobile
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);
    if (media.addEventListener) media.addEventListener("change", updateMobile);
    else media.addListener(updateMobile);
    updateMobile();

    // Detect dark mode
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

  // Colors for dark/light mode
  const bgColor = isDark ? "bg-gray-900" : "bg-[#ebdcff]";
  const borderColor = isDark ? "border-gray-700" : "border-border";
  const textColor = isDark ? "text-gray-200" : "text-gray-900";
  const mutedText = isDark ? "text-gray-400" : "text-muted/80";
  const accent = isDark ? "text-purple-400" : "text-accent";

  return (
    <div
      className={`flex w-full ${textColor}`}
      style={isMobile ? styles.gsm : styles.section}
    >
      <div className='flex flex-col justify-evenly gap-6 w-full px-6'>
        <h1 className={`text-center font-heading ${textColor}`}>Projecten</h1>
        <Accordion hideSeparator className="flex flex-col gap-4">
          {[
            {
              icon: <Rocket size={30} />,
              title: "b.ignited – b.achieved",
              type: "Stage",
              year: "2026",
              info: [
                "Ontwikkeling van een interne applicatie voor carrièreontwikkeling",
                "Gamified platform met skill tree en badgesysteem",
                "Zowel frontend als backend ontwikkeld",
                "Sterke focus op UI/UX met interactieve en visuele elementen",
                "Implementatie van test automation en kwaliteitscontrole"
              ],
              learnings: [
                "Full stack development in een professionele omgeving",
                "Werken met complexe logica en datastructuren",
                "UI/UX ontwerpen met focus op gebruikerservaring",
                "Werken met code reviews en professionele standaarden",
                "Zelfstandig werken binnen een development team",
                "Feedback verwerken en iteratief verbeteren"
              ]
            },
            {
              icon: <Earth size={30} />,
              title: <><Link href='https://loookhere.com/' className={accent}>Loookhere</Link> – Website Herwerking</>,
              type: "Opdracht",
              year: "2025",
              info: [
                "Aanpassingen aan bestaande website",
                "Website tweetalig gemaakt",
                "Layout verbeterd",
                "Werken met WordPress"
              ],
              learnings: [
                "Werken met bestaande code",
                "UX/UI verbeteren",
                "Praktische web development ervaring"
              ]
            },
            {
              icon: <Pin size={30} />,
              title: "B2B Portal",
              type: "Schoolproject",
              year: "2024",
              info: [
                "Ontwikkeling van een B2B portal",
                "Zowel frontend als backend ontwikkeld, inclusief een mobiele app",
                "Gebruikte technologieën: C# & Android"
              ],
              learnings: [
                "Full stack development",
                "Samenwerken in een project",
                "Structuur en logica in grotere applicaties",
                "Werken volgens de Agile-methodiek",
                "Feedback verwerken van een klant"
              ]
            },
            {
              icon: <Pin size={30} />,
              title: "Delawer – B2B Portal",
              type: "Schoolproject",
              year: "2023",
              info: [
                "Ontwikkeling van een B2B portal",
                "Zowel frontend als backend ontwikkeld",
                "Gebruikte technologieën: Java & React"
              ],
              learnings: [
                "Full stack development",
                "Samenwerken in een project",
                "Structuur en logica in grotere applicaties"
              ]
            },
          ].map((project, i) => (
            <Accordion.Item
              key={i}
              className={cn(
                "group/item rounded-2xl overflow-hidden border-b",
                borderColor,
                bgColor,
                "first:[&_[data-slot=accordion-trigger]]:rounded-t-2xl",
                "last:border-b-0" // verwijdert witte lijn onder het laatste item
              )}
            >
              <Accordion.Heading>
                <Accordion.Trigger
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bgsurface transition-none"
                >
                  <div className="flex items-center gap-4">
                    {project.icon && (
                      <span className="h-12 w-12 flex items-center justify-center p-2 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg">
                        {project.icon}
                      </span>
                    )}
                    <div className="flex flex-col leading-tight">
                      <span className={`font-medium ${isMobile ? "flex flex-col gap-1" : "flex flex-row gap-1"}`}>
                        {project.title}
                      </span>
                      <span className={`text-sm ${mutedText}`}>
                        {project.type} • {project.year}
                      </span>
                    </div>
                  </div>
                  <Accordion.Indicator className={`text-muted/50 [&>svg]:size-4 ${mutedText}`}>
                    <ChevronDown />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className={`${textColor} px-5 pb-5`}>
                  <div className="flex flex-col gap-5">
                    <ul className="space-y-3">
                      {project.info.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className={`${accent} leading-none mt-[2px]`}>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      <p className={`font-medium text-sm ${mutedText}`}>Wat ik geleerd heb:</p>
                      <ul className="space-y-3">
                        {project.learnings.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className={`${accent} leading-none mt-[2px]`}>●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const styles = {
  section: { padding: "0rem 2rem" },
  gsm: { padding: "2.5rem 1rem" }
};

export default Projects;