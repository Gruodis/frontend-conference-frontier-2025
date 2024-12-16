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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
