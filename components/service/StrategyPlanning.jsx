// components/StrategyPlanning.tsx

const strategySections = [
  {
    title: "WEBSITES",
    items: [
      "WordPress",
      "Online Stores",
      "Blogging",
      "eCommerce",
      "G Suite",
      "Web Hosting",
      "Security",
      "Maintenance",
      "Emails",
    ],
  },
  {
    title: "MARKETING",
    items: [
      "Marketing Strategy",
      "Branding",
      "Integrated Campaigns",
      "Logo and Identity",
      "Content Marketing",
      "Videography",
      "Photography",
    ],
  },
  {
    title: "DESIGN",
    items: [
      "Logo",
      "Brand Identity",
      "Posters",
      "Brochures",
      "Packaging",
      "Signage",
      "Publications",
    ],
  },
  {
    title: "SOCIAL",
    items: [
      "Social Media Growth",
      "Profile Design",
      "Influencer Outreach",
      "Content Strategy",
      "Newsletters",
      "Fanpages Management",
    ],
  },
];

export default function StrategyPlanning() {
  return (
    <section className=" min-h-screen flex items-center justify-center bg-[#f5f6f8] px-6 py-5 md:py-0">
      <div className="w-full  max-w-6xl mx-auto">
        <h1 className="text-center text-4xl sm:text-[40px]  font-extrabold font-playfair text-gray-900 mb-14">
          Strategy Planning
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {strategySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs text-[18px] font-semibold  font-sora tracking-[0.25em] text-purple-700 mb-6">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-base  font-light font-montserrat text-[#54595f]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
