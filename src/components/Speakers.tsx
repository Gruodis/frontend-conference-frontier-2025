interface Speaker {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const speakers: Speaker[] = [
  {
    name: "Jane Doe",
    role: "AI Research Scientist",
    image: "",
    bio: "Leading expert in artificial intelligence and machine learning.",
  },
  {
    name: "John Smith",
    role: "Blockchain Innovator",
    image: "",
    bio: "Pioneering blockchain solutions for enterprise applications.",
  },
  {
    name: "Emily Chen",
    role: "Quantum Computing Specialist",
    image: "",
    bio: "Pushing the boundaries of quantum computing and its practical applications.",
  },
  {
    name: "Alex Johnson",
    role: "Cybersecurity Analyst",
    image: "",
    bio: "Protecting organizations from cyber threats and data breaches.",
  },
  {
    name: "Grace Lee",
    role: "IoT Solutions Architect",
    image: "",
    bio: "Designing and implementing innovative IoT solutions for smart cities.",
  },
  {
    name: "Michael Brown",
    role: "Data Science Expert",
    image: "",
    bio: "Leveraging data analytics to drive business growth and innovation.",
  },
];
const defaultImage = "/avatar.jpg";
export default function Speakers() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary-alt font-bold mb-8 text-center">
          Featured Speakers
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {speakers.map((speaker: Speaker) => (
            <div
              key={speaker.name}
              className="bg-gray-950 rounded-lg shadow-md overflow-hidden min-w-[calc(50%-.5rem)] max-w-[calc(50%-.5rem)] md:min-w-[200px] md:max-w-[15%]"
            >
              <img
                src={speaker.image ? speaker.image : defaultImage}
                alt={speaker.name}
                className="w-full aspect-square object-cover object-center rounded-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-gray-300 mb-4">{speaker.role}</p>
                <p className="text-gray-500">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
