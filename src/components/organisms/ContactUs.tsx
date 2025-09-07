import Button from "../atoms/Button";

const ContactUs = () => {
  const socialIcons = [
    { src: "/icons/Facebook.svg", alt: "Facebook" },
    { src: "/icons/Github.svg", alt: "Github" },
    { src: "/icons/Instagram.svg", alt: "Instagram" },
    { src: "/icons/Linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <div id="contact-us" className="pb-10">
      <h2 className="font-bold text-center mb-20 text-xl sm:text-2xl lg:text-3xl text-white">
        Let's <span className="text-primary">Thryve</span> Together
      </h2>

      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="flex-1 flex flex-col justify-between">
          <img
            src="/icons/ThyrveLogo.svg"
            alt="Logo"
            className="hidden lg:block w-[400px] mb-6 lg:mb-10"
          />

          <p className="text-center lg:text-justify">
            Crafting bespoke software solutions that transform inherent
            complexity into effortless delight, we believe in ensuring every
            interaction is not just functional, but genuinely intuitive and a
            true joy to experience for every user, ultimately fostering deeper
            engagement and driving sustained success for your digital
            initiatives.
          </p>

          <div className="hidden lg:flex gap-4">
            {socialIcons.map((icon) => (
              <a key={icon.alt} href="#" className="flex items-center mb-4">
                <img src={icon.src} alt={icon.alt} className="w-6 h-6 mr-2" />
              </a>
            ))}
          </div>
        </div>

        <form className="mt-20 lg:mt-0 flex-1">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="text-primary mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="bg-black border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="email" className="text-primary mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="bg-black border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="text-primary mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              className="bg-black border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-primary mb-2 font-medium">
              Message
            </label>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              rows={4}
              className="bg-black border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 resize-vertical min-h-[120px]"
            ></textarea>
          </div>

          <div className="flex justify-center items-center lg:justify-start">
            <Button title="Send Message" onClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
