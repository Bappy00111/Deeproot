// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function MobileNavItem({ nav }) {
//   const [open, setOpen] = useState(false);
//   const [svcOpen, setSvcOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile button */}
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded  border-gray-300 border"
//         aria-label="Open menu"
//         aria-expanded={open}
//       >
//         {open ? "✕" : "☰"}
//       </button>

//       {/* Fullscreen overlay menu */}
//       {open && (
//         <div className="fixed inset-0  bg-gray-50/95 backdrop-blur-sm ">
//           {/* Close button */}
//           <button
//             onClick={() => setOpen(false)}
//             className="absolute right-10 top-3 text-lg border  p-2"
//             aria-label="Close menu"
//           >
//             ✕
//           </button>

//           <nav className="flex pt-28  flex-col items-center justify-center gap-6">
//             {nav.map((item) =>
//               !item.hasCaret ? (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-[16px] md:text-[18px] text-gray-800"
//                 >
//                   {item.label.replaceAll("_", " ")}
//                 </Link>
//               ) : (
//                 <div key={item.label} className="flex flex-col items-center">
//                   <button
//                     onClick={() => setSvcOpen((v) => !v)}
//                     className="inline-flex items-center gap-2 text-[16px] md:text-[18px] text-gray-800"
//                     aria-expanded={svcOpen}
//                   >
//                     {item.label}
//                     <span
//                       className={`transition ${svcOpen ? "rotate-180" : ""}`}
//                       aria-hidden
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   {/* Services children */}
//                   {svcOpen && (
//                     <ul className="mt-2 space-y-2">
//                       {(item.children ?? []).map((any) => (
//                         <li key={c.label} className="text-center">
//                           <Link
//                             // href={c.href}
//                             className="block px-3 py-1 text-[15px] text-gray-700"
//                           >
//                             {c.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               )
//             )}

//             {/* CTA */}
//             <Link
//               href="https://deeproot.com.au/contact/"
//               className="mt-6 inline-block rounded-sm border px-6 py-2 text-[12px] md:text-[13px] font-semibold tracking-widest text-blue-700"
//             >
//               LET&apos;S TALK
//             </Link>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

// Mobile recursive submenu
function MobileSubMenu({ items, level = 0, closeMenu }) {
  const [openItems, setOpenItems] = useState({});

  const toggle = (label) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <ul
      className={[
        "w-full",
        level === 0 ? "space-y-4" : "mt-2 space-y-2",
      ].join(" ")}
    >
      {items.map((item) => {
        const hasKids =
          Array.isArray(item.children) && item.children.length > 0;
        const isOpen = !!openItems[item.label];

        // simple link (no children)
        if (!hasKids) {
          return (
            <li key={item.label} className="w-full text-center">
              <Link
                href={item.href}
                className="block px-4 py-2 text-[15px] text-gray-800"
                onClick={closeMenu}
              >
                {item.label.replaceAll("_", " ")}
              </Link>
            </li>
          );
        }

        // item with children (accordion)
        return (
          <li key={item.label} className="w-full text-center">
            <button
              type="button"
              onClick={() => toggle(item.label)}
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 text-[15px] text-gray-800"
              aria-expanded={isOpen}
            >
              {item.label}
              <span
                aria-hidden
                className={[
                  "transition-transform text-sm",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
              >
                ▾
              </span>
            </button>

            {isOpen && (
              <div className="mt-1">
                <MobileSubMenu
                  items={item.children}
                  level={level + 1}
                  closeMenu={closeMenu}
                />
              </div>
            )
            }
          </li>
        );
      })}
    </ul>
  );
}

export default function MobileNavItem({ nav }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Toggle button (only mobile) */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-gray-300"
        aria-label="Toggle menu"
        aria-expanded={open}
        type="button"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-gray-50/95 backdrop-blur-sm">
          {/* Close */}
          <button
            onClick={closeMenu}
            className="absolute right-6 top-4 text-lg border p-2 rounded"
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>

          <nav className="mt-20 flex flex-col items-center gap-6 px-4  font-montserrat">
            {/* Full NAV (same as DesktopNav) */}
            <MobileSubMenu items={nav} closeMenu={closeMenu} />

            {/* CTA */}
            <Link
              href="https://deeproot.com.au/contact/"
              className="mt-6 inline-block rounded-sm border px-6 py-2 text-[12px] md:text-[13px] font-semibold tracking-widest text-blue-700"
              onClick={closeMenu}
            >
              LET&apos;S TALK
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}



