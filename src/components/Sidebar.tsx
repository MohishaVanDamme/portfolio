import { useEffect, useState } from "react";
import { User, Code, File, Mail, Menu, X, FileDown } from "lucide-react";
import { Button } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
};

function Sidebar({ setSidebarWidth }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const location = useLocation();

  // Detect mobile screen
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);
    if (media.addEventListener) media.addEventListener("change", updateMobile);
    else media.addListener(updateMobile);
    updateMobile();
    return () => {
      if (media.removeEventListener) media.removeEventListener("change", updateMobile);
      else media.removeListener(updateMobile);
    };
  }, []);

  // Detect dark mode
  useEffect(() => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDark = () => setIsDark(darkMedia.matches);
    if (darkMedia.addEventListener) darkMedia.addEventListener("change", updateDark);
    else darkMedia.addListener(updateDark);
    updateDark();
    return () => {
      if (darkMedia.removeEventListener) darkMedia.removeEventListener("change", updateDark);
      else darkMedia.removeListener(updateDark);
    };
  }, []);

  const expanded = isMobile ? isOpen : isHovered;

  // Sync sidebar width
  useEffect(() => {
    if (!isMobile) setSidebarWidth(expanded ? 200 : 60);
    else setSidebarWidth(0);
  }, [expanded, isMobile, setSidebarWidth]);

  const accentBg = isDark ? "bg-purple-700" : "bg-accent";
  const hoverBg = isDark ? "hover:bg-purple-600" : "hover:bg-accent-hover";
  const textColor = "text-white";

  const linkClasses = (active: boolean) =>
    `flex items-center h-10 gap-3 rounded-md transition-all duration-300 ${hoverBg} w-full ${
      expanded ? "justify-start px-3" : "justify-center"
    } ${active ? "opacity-100 font-semibold" : "opacity-80"} text-white`; // <-- forceer wit

  const navLinks = [
    { to: "/", icon: <User size={20} />, label: "Over mij" },
    { to: "/skills", icon: <Code size={20} />, label: "Vaardigheden" },
    { to: "/projects", icon: <File size={20} />, label: "Projecten" },
    { to: "/contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  const cvLink = { href: `${import.meta.env.BASE_URL}CV_Mohisha_Van_Damme.pdf`, icon: <FileDown size={20} />, label: "Download CV", download: true };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <Button
          isIconOnly
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 p-2 rounded-md"
        >
          <Menu className={textColor} />
        </Button>
      )}

      {/* MOBILE FULLSCREEN DRAWER */}
      {isMobile && isOpen && (
        <div className={`fixed inset-0 ${accentBg} z-50 flex flex-col items-center justify-center gap-6`}>
          <Button
            isIconOnly
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className={textColor} />
          </Button>

          {[...navLinks, cvLink].map((link) => {
            if ("href" in link) {
            return (
              <a
                key={link.href}
                href={link.href}
                download={link.download}
                onClick={() => setIsOpen(false)}
              >
                <p className={`text-white text-2xl`}>{link.label}</p>
              </a>
            );
          } else {
            return(
              <Link key={link.to} to={link.to!} onClick={() => setIsOpen(false)}>
                <p className={`text-white text-2xl`}>{link.label}</p>
              </Link>
            );
          }})}
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      {!isMobile && (
        <nav
          className={`${accentBg} shadow-lg h-screen fixed top-0 left-0 z-40 transition-all duration-300`}
          style={{ width: expanded ? 200 : 60, padding: "10px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`flex flex-col gap-3 w-full h-full ${expanded ? "items-start" : "items-center"}`}>
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link key={link.to} to={link.to!} className={linkClasses(active)}>
                  {link.icon}
                  {expanded && <p className={textColor}>{link.label}</p>}
                </Link>
              );
            })}

            {/* Spacer duwt de download-link naar onder */}
            <div className="flex-1" />

            {/* Download-link onderaan */}
            <a
                key={cvLink.href}
                href={cvLink.href}
                download={cvLink.download}
                className={linkClasses(false)}
              >
                {cvLink.icon}
                {expanded && <p className={textColor}>{cvLink.label}</p>}
              </a>
          </div>
        </nav>
      )}
    </>
  );
}

export default Sidebar;