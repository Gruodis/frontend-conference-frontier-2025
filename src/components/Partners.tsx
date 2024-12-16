interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "TechCorp", logo: "/partner-logo.svg" },
  { name: "InnovateTech", logo: "/partner-logo.svg" },
  { name: "FutureSoft", logo: "/partner-logo.svg" },
  { name: "AI Solutions", logo: "/partner-logo.svg" },
];

export default function Partners() {
  return (
    <section className="py-16 w-full px-4">
      <h2 className="container heading-secondary-alt font-bold mb-8 text-center w-full">
        Our Partners
      </h2>
      <div className=" min-h-[40vh] items-center relative flex justify-center">
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
            className="fill-[rgb(0_174_239/.4);]"
          ></ellipse>
        </svg>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner: Partner) => (
            <div
              key={partner.name}
              className="flex justify-center items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
