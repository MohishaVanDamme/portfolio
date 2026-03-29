import { Link } from "react-router-dom";
import { Image } from "@heroui/image";
import { useEffect, useState } from "react";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      {/* MOBILE */}
      {isMobile && (
        <div
          className="flex flex-col justify-evenly gap-6 text-center"
          style={styles.gsm}
        >
          <div>
            <h1>
              Hi, ik ben Mohisha <span className="wave">👋</span>
            </h1>
            <h2>Full Stack Developer in opleiding</h2>
          </div>

          <div className="text-sm">
            <p>
              Gemotiveerde developer met een passie voor webontwikkeling en oog
              voor detail.
              <br />
              Ik werk graag met technologieën zoals React, Node.js en C#, en
              bouw gebruiksvriendelijke en performante webapplicaties.
            </p>
          </div>

          <div className="text-sm">
            <p>
              Momenteel studeer ik Toegepaste Informatica en ben ik op zoek naar
              kansen om mijn skills verder te ontwikkelen in de praktijk.
            </p>
          </div>

          <div className="justify-self-center">
            <span className="flex flex-col gap-4">
              <span className="inline-flex justify-center">
                <Link to="/projects" className="underline hover:text-accent">
                  Bekijk mijn projecten
                </Link>
              </span>
              of
              <span className="inline-flex justify-center">
                <Link to="/contact" className="underline hover:text-accent">
                  Neem contact met mij op!
                </Link>
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            <Image
              src="/portfolio/mezelf.jpg"
              alt="Foto van mezelf"
              width={220}
              height={220}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      )}

      {/* DESKTOP */}
      {!isMobile && (
        <div
          className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
          style={styles.section}
        >
          <div className="relative z-10 flex flex-col justify-evenly gap-6 text-center">
            <Image
              src="/portfolio/mezelf.jpg"
              alt="Foto van mezelf"
              width={220}
              height={220}
              className="rounded-full object-cover fixed top-1/4 right-10 -translate-y-1/2 shadow-lg"
            />

            <div>
              <h1>
                Hi, ik ben Mohisha <span className="wave">👋</span>
              </h1>
              <h2>Full Stack Developer in opleiding</h2>
            </div>

            <div className="text-sm">
              <p>
                Gemotiveerde developer met een passie voor webontwikkeling en
                oog voor detail.
                <br />
                Ik werk graag met technologieën zoals React, Node.js en C#, en
                bouw gebruiksvriendelijke en performante webapplicaties.
              </p>
            </div>

            <div className="text-sm">
              <p>
                Momenteel studeer ik Toegepaste Informatica en ben ik op zoek
                naar kansen om mijn skills verder te ontwikkelen in de praktijk.
              </p>
            </div>

            <div className="justify-self-center">
              <span className="grid grid-cols-[auto_4rem_auto]">
                <span className="inline-flex justify-end">
                  <Link to="/projects" className="underline hover:text-accent">
                    Bekijk mijn projecten
                  </Link>
                </span>
                of
                <span className="inline-flex">
                  <Link to="/contact" className="underline hover:text-accent">
                    Neem contact met mij op!
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
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

export default Hero;