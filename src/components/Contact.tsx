import { Mail, Smartphone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);

    // compatibele listener
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }

    update(); // initial check

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  const iconStyle = { color: "var(--text-h)" }; // gebruikt CSS variabele

  return (
    <div
      className="flex flex-col gap-4 w-full"
      style={isMobile ? styles.gsm : styles.section}
    >
      <h1 className="text-center font-heading">
        Contacteer mij
      </h1>

      <p>
        Ik sta open voor werkplaatsen, projecten of samenwerkingen.
      </p>

      {/* CONTACT INFO */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-3 items-center">
          <Smartphone size={20} style={iconStyle} />
          <p>+32493070787</p>
        </div>

        <div className="flex gap-3 items-center">
          <Mail size={20} style={iconStyle} />
          <a
            href="mailto:mohisha.vd@outlook.com"
            className="underline hover:text-accent"
          >
            mohisha.vd@outlook.com
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <FaLinkedin size={20} style={iconStyle} />
          <a
            href="https://www.linkedin.com/in/mohisha-van-damme/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            LinkedIn profiel
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <FaGithub size={20} style={iconStyle} />
          <a
            href="https://github.com/MohishaVanDamme"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            GitHub profiel
          </a>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-3 items-center">
          <MapPin size={20} style={iconStyle} />
          <p>Muydt 14, 1547 Bever</p>
        </div>

        <div className="w-full h-85 rounded-xl overflow-hidden shadow-lg mt-2">
          <iframe
            title="Map - Muydt 14 Bever"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.022405073239!2d3.916408776783288!3d50.70096877164115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3ae9ec731e80b%3A0x37497a12aa768b41!2sMuydt%2014%2C%201547%20Bever!5e0!3m2!1snl!2sbe!4v1774703582571!5m2!1snl!2sbe"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          />
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

export default Contact;