import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  const handleRegisterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="relative w-full min-h-screen flex justify-center items-center"
      aria-labelledby="hero-heading"
    >
      <svg
        data-v-6b2490ed=""
        xmlns="http://www.w3.org/2000/svg"
        className="svg-primary blur-[150px] absolute -top-1/2  !z-10 !block !opacity-50 max-w-[200px] lg:max-w-full"
        width="600"
        height="300"
        viewBox="0 0 600 300"
        fill="none"
      >
        <ellipse
          cx="300"
          cy="150"
          rx="300"
          ry="150"
          className="fill-[rgb(0_174_239/.8);]"
        ></ellipse>
      </svg>
      <img
        // src="/hero-1.jpeg"
        src="/mama.webp"
        alt="TechConf 2024"
        className="object-cover object-center w-full h-full absolute"
      />
      <div className="absolute inset-0 shadow-[inset_0_0_40rem_25rem_rgba(0,0,0,.90)] flex flex-col justify-center items-center text-white">
        <h1
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-out-back"
          data-aos-duration="3000"
          id="hero-heading"
          className="font-semibold -tracking-4 heading-primary"
        >
          TechConf 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Shaping the Future of Frontend
        </p>
        <button
          type="button"
          onClick={handleRegisterClick}
          className="bg-blue-700 text-2xl flex items-center hover:bg-blue-600 text-white hover:text-white font-bold py-2 px-4 rounded-full"
          aria-label="Register for TechConf 2024"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}
