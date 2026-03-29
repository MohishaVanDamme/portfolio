import { useEffect, useState } from "react";
import { User, Code, File, Mail, Menu, X } from "lucide-react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

type SidebarProps = {
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
};

function Sidebar({ setSidebarWidth }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);

    update(); // initial check
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const expanded = isMobile ? isOpen : isHovered;

  // Sync sidebar width with layout (desktop only)
  useEffect(() => {
    if (!isMobile) {
      setSidebarWidth(expanded ? 140 : 60);
    } else {
      setSidebarWidth(0);
    }
  }, [expanded, isMobile]);

  const linkClasses = () =>
    `flex items-center h-10 gap-3 rounded-md transition-all duration-300 hover:bg-accent-hover w-full ${
      expanded ? "justify-start px-3" : "justify-center"
    }`;

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <Button
          isIconOnly
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 p-2 rounded-md"
        >
          <Menu className="text-white" />
        </Button>
      )}

      {/* MOBILE FULLSCREEN DRAWER */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-accent z-50 flex flex-col items-center justify-center gap-6">
          <Button
            isIconOnly
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="text-white" />
          </Button>

          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className="text-white text-2xl">Over mij</p>
          </Link>

          <Link to="/skills" onClick={() => setIsOpen(false)}>
            <p className="text-white text-2xl">Vaardigheden</p>
          </Link>

          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <p className="text-white text-2xl">Projecten</p>
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <p className="text-white text-2xl">Contact</p>
          </Link>
        </div>
      )}

      {/* DESKTOP SIDEBAR ONLY */}
      {!isMobile && (
        <nav
          className="bg-accent shadow-lg h-screen fixed top-0 left-0 z-40 transition-all duration-300"
          style={{
            width: expanded ? "200px" : "60px",
            padding: "10px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex flex-col gap-3 w-full h-full ${
              expanded ? "items-start" : "items-center"
            }`}
          >
            {/* ABOUT */}
            <Link to="/" className={linkClasses()}>
              <User className="text-white" size={20} />
              {expanded && <p className="text-white">Over mij</p>}
            </Link>

            {/* SKILLS */}
            <Link to="/skills" className={linkClasses()}>
              <Code className="text-white" size={20} />
              {expanded && <p className="text-white">Vaardigheden</p>}
            </Link>

            {/* PROJECTS */}
            <Link to="/projects" className={linkClasses()}>
              <File className="text-white" size={20} />
              {expanded && <p className="text-white">Projecten</p>}
            </Link>

            {/* CONTACT */}
            <Link to="/contact" className={linkClasses()}>
              <Mail className="text-white" size={20} />
              {expanded && <p className="text-white">Contact</p>}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Sidebar;