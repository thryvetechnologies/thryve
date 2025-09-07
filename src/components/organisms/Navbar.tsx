const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigationItems = [
    { title: "About Us", sectionId: "about-us" },
    { title: "Projects", sectionId: "projects" },
    { title: "Our Services", sectionId: "services" },
  ];

  return (
    <nav className="flex items-center justify-between">
      <img src="/icons/ThyrveLogo.svg" alt="Logo" />
      <img
        src="/icons/Hamburger.svg"
        alt="Hamburger Icon"
        className="lg:hidden"
      />

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
  );
};

export default Navbar;
