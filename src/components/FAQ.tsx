import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is TechConf 2024?",
    answer:
      "TechConf 2024 is a cutting-edge technology conference bringing together industry leaders, innovators, and enthusiasts to explore the latest advancements in AI, blockchain, quantum computing, and more.",
  },
  {
    id: 2,
    question: "When and where is TechConf 2024 taking place?",
    answer:
      "TechConf 2024 is scheduled for October 15-17, 2024, at the Tech Center in Silicon Valley.",
  },
  {
    id: 3,
    question: "How can I register for the conference?",
    answer:
      "You can register for TechConf 2024 using the registration form on our website. Early bird discounts are available until July 31, 2024.",
  },
  {
    id: 4,
    question: "Are there opportunities for networking?",
    answer:
      "Yes, TechConf 2024 offers numerous networking opportunities, including dedicated networking sessions, interactive workshops, and social events throughout the conference.",
  },
  {
    id: 5,
    question: "Will the conference sessions be recorded?",
    answer:
      "Yes, all keynote speeches and panel discussions will be recorded and made available to registered attendees after the conference.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq: FAQ) => (
            <div key={faq.id} className="border-b border-gray-200 pb-4">
              <button
                type="button"
                className="flex justify-between gap-8 items-center w-full text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === faq.id ? "-" : "+"}
                </span>
              </button>
              {openIndex === faq.id && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
