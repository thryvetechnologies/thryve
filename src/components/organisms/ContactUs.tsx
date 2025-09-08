import Button from "../atoms/Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Blur from "../atoms/Blur";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true);
    setMessage(null);

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        "service_6xjyj7q",
        "template_vp9r3kq", // Replace with your EmailJS template ID
        form.current,
        "I9-G2Ze2-ww7y01dN" // Replace with your EmailJS public key
      );

      console.log("Email sent successfully:", result.text);
      setMessage({ text: "Message sent successfully!", type: "success" });

      // Reset form
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setMessage({
        text: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialIcons = [
    { src: "/icons/Facebook.svg", alt: "Facebook" },
    { src: "/icons/Github.svg", alt: "Github" },
    { src: "/icons/Instagram.svg", alt: "Instagram" },
    { src: "/icons/Linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <div id="contact-us" className="pb-10 relative">
      <Blur
        mainClassName="hidden lg:block absolute -bottom-[100px] -left-[150px]"
        blurStrength="250"
        blurSize="300"
      />
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

        <form ref={form} onSubmit={sendEmail} className="mt-20 lg:mt-0 flex-1">
          {message && (
            <div
              className={`mb-4 p-3 rounded-lg text-center ${
                message.type === "success"
                  ? "bg-green-900/20 border border-green-500 text-green-400"
                  : "bg-red-900/20 border border-red-500 text-red-400"
              }`}
            >
              {message.text}
            </div>
          )}

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
                required
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
                required
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
              name="title"
              id="subject"
              required
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
              required
              className="bg-black border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 resize-vertical min-h-[120px]"
            ></textarea>
          </div>

          <div className="flex justify-center items-center lg:justify-start">
            <Button
              title={isLoading ? "Sending..." : "Send Message"}
              onClick={() => {}}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
