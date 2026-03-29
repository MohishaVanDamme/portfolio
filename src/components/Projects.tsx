import { Link, Accordion, cn } from '@heroui/react';
import { ChevronDown, Earth, Pin, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
function Projects() {
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
        <h1 className="text-center">Projecten</h1>
        <Accordion className="flex flex-col gap-4">
          <Accordion.Item
            className={cn(
              "group/item rounded-2xl overflow-hidden border border-border",
              "bg-[#ebdcff]",
              "first:[&_[data-slot=accordion-trigger]]:rounded-t-2xl",
              "last:[&:not(:has([data-slot=accordion-trigger][aria-expanded='true']))_[data-slot=accordion-trigger]]:rounded-b-2xl",
            )}
          >
            <Accordion.Heading>
              <Accordion.Trigger
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bgsurface transition-none"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <Rocket
                    size={20}
                    className="h-10 w-10 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium">
                      b.ignited – b.achieved
                    </span>
                    <span className="text-sm text-muted/80">
                      Stage • 2026
                    </span>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <Accordion.Indicator className="text-muted/50 [&>svg]:size-4">
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-black px-5 pb-5">
                <div className="flex flex-col gap-5">
                  {/* PROJECT INFO */}
                  <ul className="space-y-3">
                    {[
                      "Ontwikkeling van een interne applicatie voor carrièreontwikkeling",
                      "Gamified platform met skill tree en badgesysteem",
                      "Zowel frontend als backend ontwikkeld",
                      "Sterke focus op UI/UX met interactieve en visuele elementen",
                      "Implementatie van test automation en kwaliteitscontrole"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent leading-none mt-[2px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* LEARNINGS */}
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-sm text-muted">
                      Wat ik geleerd heb:
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Full stack development in een professionele omgeving",
                        "Werken met complexe logica en datastructuren",
                        "UI/UX ontwerpen met focus op gebruikerservaring",
                        "Werken met code reviews en professionele standaarden",
                        "Zelfstandig werken binnen een development team",
                        "Feedback verwerken en iteratief verbeteren"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent leading-none mt-[2px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            className={cn(
              "group/item rounded-2xl overflow-hidden border border-border",
              "bg-[#ebdcff]",
              "first:[&_[data-slot=accordion-trigger]]:rounded-t-2xl",
              "last:[&:not(:has([data-slot=accordion-trigger][aria-expanded='true']))_[data-slot=accordion-trigger]]:rounded-b-2xl",
            )}
          >
            <Accordion.Heading>
              <Accordion.Trigger
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bgsurface transition-none"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <Earth
                    size={20}
                    className="h-10 w-10 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className={`flex ${isMobile? 'flex-col' : 'flex-row'} gap-1`}>
                      <Link href='https://loookhere.com/'>
                        <p className='font-medium text-accent'>Loookhere</p>
                      </Link>
                      <p className='font-medium'>– Website Herwerking</p>
                    </span>
                    <span className="text-sm text-muted/80">
                      Opdracht • 2025
                    </span>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <Accordion.Indicator className="text-muted/50 [&>svg]:size-4">
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-black px-5 pb-5">
                <div className="flex flex-col gap-5">
                  {/* PROJECT INFO */}
                  <ul className="space-y-3">
                    {[
                      "Aanpassingen aan bestaande website",
                      "Website tweetalig gemaakt",
                      "Layout verbeterd",
                      "Werken met WordPress"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent leading-none mt-[2px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* LEARNINGS */}
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-sm text-muted">
                      Wat ik geleerd heb:
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Werken met bestaande code",
                        "UX/UI verbeteren",
                        "Praktische web development ervaring"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent leading-none mt-[2px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            className={cn(
              "group/item rounded-2xl overflow-hidden border border-border",
              "bg-[#ebdcff]",
              "first:[&_[data-slot=accordion-trigger]]:rounded-t-2xl",
              "last:[&:not(:has([data-slot=accordion-trigger][aria-expanded='true']))_[data-slot=accordion-trigger]]:rounded-b-2xl",
            )}
          >
            <Accordion.Heading>
              <Accordion.Trigger
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bgsurface transition-none"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <Pin
                    size={20}
                    className="h-10 w-10 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium">
                      B2B Portal
                    </span>
                    <span className="text-sm text-muted/80">
                      Schoolproject • 2024
                    </span>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <Accordion.Indicator className="text-muted/50 [&>svg]:size-4">
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-black px-5 pb-5">
                <div className="flex flex-col gap-5">
                  {/* PROJECT INFO */}
                  <ul className="space-y-3">
                    {[
                      "Ontwikkeling van een B2B portal",
                      "Zowel frontend als backend ontwikkeld, inclusief een mobiele app",
                      "Gebruikte technologieën: C# & Android"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent leading-none mt-[2px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* LEARNINGS */}
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-sm text-muted">
                      Wat ik geleerd heb:
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Full stack development",
                        "Samenwerken in een project",
                        "Structuur en logica in grotere applicaties",
                        "Werken volgens de Agile-methodiek",
                        "Feedback verwerken van een klant"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent leading-none mt-[2px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            className={cn(
              "group/item rounded-2xl overflow-hidden border border-border",
              "bg-[#ebdcff]",
              "first:[&_[data-slot=accordion-trigger]]:rounded-t-2xl",
              "last:[&:not(:has([data-slot=accordion-trigger][aria-expanded='true']))_[data-slot=accordion-trigger]]:rounded-b-2xl",
            )}
          >
            <Accordion.Heading>
              <Accordion.Trigger
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bgsurface transition-none"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <Pin
                    size={20}
                    className="h-10 w-10 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium">
                      Delawer – B2B Portal
                    </span>
                    <span className="text-sm text-muted/80">
                      Schoolproject • 2023
                    </span>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <Accordion.Indicator className="text-muted/50 [&>svg]:size-4">
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-black px-5 pb-5">
                <div className="flex flex-col gap-5">
                  {/* PROJECT INFO */}
                  <ul className="space-y-3">
                    {[
                      "Ontwikkeling van een B2B portal",
                      "Zowel frontend als backend ontwikkeld",
                      "Gebruikte technologieën: Java & React"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent leading-none mt-[2px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* LEARNINGS */}
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-sm text-muted">
                      Wat ik geleerd heb:
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Full stack development",
                        "Samenwerken in een project",
                        "Structuur en logica in grotere applicaties"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent leading-none mt-[2px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: "1rem 2rem",
  },
  gsm: {
    padding: "2.5rem 1rem"
  }
};

export default Projects;