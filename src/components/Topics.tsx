interface Solution {
  title: string;
  description: string;
  image: string;
}

const solutions: Solution[] = [
  {
    title: "AI-Powered Healthcare",
    description:
      "Leveraging artificial intelligence to improve patient outcomes and streamline healthcare processes.",
    image: "",
  },
  {
    title: "Sustainable Smart Cities",
    description:
      "Implementing IoT and data analytics to create more efficient and environmentally friendly urban environments.",
    image: "",
  },
  {
    title: "Quantum-Safe Cryptography",
    description:
      "Developing encryption methods that can withstand attacks from quantum computers to ensure long-term data security.",
    image: "",
  },
];
const defaultImage = "/avatar.jpg";

export default function ProblemSolution() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary-alt font-bold mb-8 text-center">
          Innovative Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
              className="fill-[#9b72cb]/60"
            ></ellipse>
          </svg>
          {solutions.map((solution: Solution) => (
            <div
              key={solution.title}
              className=" rounded-t-full overflow-hidden"
            >
              <img src={solution.image} alt="" />
              <img
                src={solution.image ? solution.image : defaultImage}
                alt={solution.title}
                className="w-full aspect-square object-cover object-center rounded-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-[#9b72cb]">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
