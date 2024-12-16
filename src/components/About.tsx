export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center">About TechConf 2025</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0  custom-shadow relative">
            <img
              src="/hall.jpeg"
              className="relative rounded-lg"
              alt="Conference Hall"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Join us for the most innovative tech conference of the year, where
              industry leaders and visionaries come together to shape the future
              of technology.
            </p>
            <p className="text-lg mb-4">
              <strong>Location:</strong> Tech Center, Silicon Valley
            </p>
            <p className="text-lg mb-4">
              <strong>Date:</strong> October 15-17, 2024
            </p>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.847959184366!2d25.221457076893135!3d54.67710437432707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94055529fabf%3A0xeeb29a2789fb0350!2sLITEXPO!5e0!3m2!1slt!2slt!4v1734248514448!5m2!1slt!2slt"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(180%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
