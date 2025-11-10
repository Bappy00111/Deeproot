

export const NAV = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  {
    label: "SERVICES",
    href: "/service/",
    hasCaret: true,
    children: [
      {
        label: "system-design & Software Development",
        href: "/system-design-software-development",
      },
      {
        label: "Digital Marketing",
        href: "",
        hasCaret: true,
        children: [
          {
            label: "Website Development",
            href: "/website-development/",
          },
          {
            label: "Social Media Marketing",
            href: "/social-media-marketing/",
          },
          {
            label: "Omnichannel Marketing",
            href: "https://deeproot.com.au/service/digital-marketing/omnichannel-marketing/",
            hasCaret: true,
            children: [
              {
                label: "Digital Marketing Ranking",
                href: "/digital-marketing/",
              },
              {
                label: "Copywriting",
                href: "https://deeproot.com.au/service/digital-marketing/omnichannel-marketing/copywriting/",
              },
            ],
          },
          {
            label: "Google for Nonprofits",
            href: "/google-for-nonprofits/",
          },
        ],
      },
      {
        label: "Ecommerce",
        href: "/ecommerce",
      },
    ],
  },
  { label: "CONTACT", href: "/contact/" },
  { label: "繁體中文", href: "https://deeproot.com.au/zh-hant/" },
];
