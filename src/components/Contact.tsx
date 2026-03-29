import { Link } from '@heroui/react';
import { Mail, Smartphone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);

    update(); // initial check
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="flex flex-col gap-4 w-full"
      style={isMobile ? styles.gsm : styles.section}
    >
      <h1 className="text-center">
        Contacteer mij
      </h1>

      <p>
        Ik sta open voor werkplaatsen, projecten of samenwerkingen.
      </p>

      {/* CONTACT INFO */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <Smartphone size={20} />
          <p>+32493070787</p>
        </div>

        <div className="flex gap-3 items-center">
          <Mail size={20} />
          <Link href="mailto:mohisha.vd@outlook.com">
            mohisha.vd@outlook.com
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <FaLinkedin size={20} />
          <Link href="https://www.linkedin.com/in/mohisha-van-damme/">
            LinkedIn profiel
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <FaGithub size={20} />
          <Link href="https://github.com/MohishaVanDamme">
            GitHub profiel
          </Link>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex gap-3 items-center">
          <MapPin size={20} />
          <p>Muydt 14, 1547 Bever</p>
        </div>

        <div className="w-full h-100 rounded-xl overflow-hidden shadow-lg">
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
    padding: "2.5rem 1rem"
  }
};

export default Contact;