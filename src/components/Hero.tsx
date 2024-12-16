import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  const handleRegisterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="relative w-full min-h-screen"
      aria-labelledby="hero-heading"
    >
      <img
        // src="/hero-1.jpeg"
        src="/mama.webp"
        alt="TechConf 2024"
        className="object-cover object-center w-full h-full absolute"
      />
      <div className="absolute inset-0 shadow-[inset_0_0_30px_200rem_rgba(0,0,0,0.75)] flex flex-col justify-center items-center text-white">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          id="hero-heading"
          className="font-semibold -tracking-4 heading-primary"
        >
          TechConf 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Shaping the Future of Frontend
        </p>
        <a
          onClick={handleRegisterClick}
          href="#register"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          aria-label="Register for TechConf 2024"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
