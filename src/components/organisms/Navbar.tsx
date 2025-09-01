const Navbar = () => {
  const navigationItems = [
    { title: "About Us", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Our Services", href: "#" },
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
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
