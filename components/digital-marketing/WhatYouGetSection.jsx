// components/WhatYouGetSection.tsx

const items = [
  {
    title: "Project Management",
    points: [
      "A Marketing Team provide campaign development, project management and marketing execution, which can help your business over the term of the contract.",
      "The whole team helps you to generate new initiatives, run researches and support you all the way.",
    ],
  },
  {
    title: "Team Management",
    points: [
      "A dedicated Digital Marketing Account Manager to manage all projects smoothly.",
    ],
  },
  {
    title: "Sales Management",
    points: [
      "Generate leads and grow sales.",
      "Work with your sales team and provide devise solutions.",
    ],
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="bg-white">
      <div className="app-container py-10 font-montserrat">
        {/* Top intro */}
        <p className="text-sm sm:text-base xl:text-[18px] font-bold text-[#3a3a3a] font-playfair">
          Your Success Is Rooted In Our Expertise
        </p>
        <h2 className="mt-2 lg:mt-5 text-3xl sm:text-4xl md:text-[40px] font-medium text-gray-900">
          Here’s What You Get:
        </h2>

        {/* Items */}
        <div className="mt-10 lg:mt-20 space-y-10">
          {items.map((item, index) => (
            <div key={item.title}>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {item.title}
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Divider except after last */}
              {index !== items.length - 1 && (
                <hr className="mt-8 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
