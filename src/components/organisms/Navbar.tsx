import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { title: "About Us", sectionId: "about-us" },
    { title: "Projects", sectionId: "projects" },
    { title: "Our Services", sectionId: "services" },
  ];

  return (
    <div className="relative">
      <nav className="flex items-center justify-between">
        <img src="/icons/ThyrveLogo.svg" alt="Logo" />

        <button onClick={toggleMobileMenu} className="lg:hidden z-50 relative">
          {isMobileMenuOpen ? (
            <img src="/icons/Cross.svg" alt="Close Menu" className="w-3 h-3" />
          ) : (
            <img
              src="/icons/Hamburger.svg"
              alt="Hamburger Icon"
              className="w-6 h-6"
            />
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-x-36">
          {navigationItems.map((item) => (
            <li
              key={item.title}
              className="text-white transition-transform duration-200 hover:scale-110 hover:text-primary font-semibold"
            >
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className="cursor-pointer"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-64 mt-2 p-4 z-40">
          <ul className="flex flex-col gap-4 items-end">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-primary font-semibold text-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
