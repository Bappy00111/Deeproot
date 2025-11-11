
// import Link from "next/link";
// import { NAV } from "./nav";

// function SubMenu({ items }) {
//   return (
//     <ul className="flex flex-col items-stretch py-3 px-3 space-y-2">
//       {items.map((it) => {
//         const hasKids = Array.isArray(it.children) && it.children.length > 0;
//         return (
//           <li key={it.label} className="relative group/sub">
//             <Link
//               href={it.href}
//               className={[
//                 "flex items-center justify-between",
//                 "px-1 py-2 text-sm xl:text-[13px] font-montserrat font-semibold",
//                 "text-[#76787F] hover:text-gray-900 hover:bg-gray-50 uppercase",
//               ].join(" ")}
//             >
//               <span>{it.label}</span>
//               {hasKids && <span aria-hidden className="ml-3 text-xs text-gray-400">▸</span>}
//             </Link>

//             {/* flyout for nested children */}
//             {hasKids && (
//               <div
//                 className={[
//                   "absolute left-full top-0 z-30",
//                   "pointer-events-none invisible opacity-0 translate-x-2",
//                   "group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0",
//                   "group-focus-within/sub:pointer-events-auto group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-focus-within/sub:translate-x-0",
//                   "transition",
//                 ].join(" ")}
//               >
//                 <div className="bg-white w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-200 border-t-blue-400">
//                   <SubMenu items={it.children} />
//                 </div>
//               </div>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default function DesktopNav() {
//   return (
//     <nav
//       className="hidden lg:block text-[#76787F]  font-semibold font-montserrat"
//       aria-label="Primary"
//       itemType="https://schema.org/SiteNavigationElement"
//       itemScope
//     >
//       <ul className="flex items-center space-x-14">
//         {NAV.map((item, idx) => (
//           <li key={item.label} className="relative">
//             {!item.hasCaret ? (
//               <Link
//                 href={item.href}
//                 className={[
//                   "inline-flex items-center gap-2 text-[13px] tracking-wide uppercase   ",
//                   idx === 0 ? "hover:text-gray-900" : " hover:text-gray-900",
//                 ].join(" ")}
//                 aria-current={idx === 0 ? "page" : undefined}
//               >
//                 {item.label}
//               </Link>
//             ) : (
//               <div className="group relative">
//                 <Link
//                   href={item.href}
//                   className="inline-flex items-center gap-2 text-[13px]  tracking-wide uppercase  group-hover:text-gray-900"
//                 >
//                   {item.label} <span aria-hidden className="text-gray-400 -mr-1">▾</span>
//                 </Link>

//                 {/* root dropdown */}
//                 <div
//                   className={[
//                     "absolute left-0 top-full z-20",
//                     "pointer-events-none invisible opacity-0 translate-y-2",
//                     "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:translate-y-0",
//                     "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0",
//                     "transition",
//                   ].join(" ")}
//                 >
//                   <div className="bg-white w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-200  border-t-blue-400">
//                     <SubMenu items={item.children ?? []} />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


// DesktopNav.jsx

import Link from "next/link";
import { NAV } from "./nav";
import { MdKeyboardArrowRight } from "react-icons/md";

function SubMenu({ items, level = 0 }) {
  // flyout base style (সব লেভেলের জন্য same)
  const flyoutBase =
    "absolute left-full top-0 z-30 pointer-events-none invisible opacity-0 translate-x-2 transition";

  // লেভেল অনুযায়ী আলাদা group-hover ক্লাস,
  // এগুলো literal রাখা জরুরি যাতে Tailwind purge না করে
  const hoverClasses =
    level === 0
      ? "group-hover/lv1:pointer-events-auto group-hover/lv1:visible group-hover/lv1:opacity-100 group-hover/lv1:translate-x-0 group-focus-within/lv1:pointer-events-auto group-focus-within/lv1:visible group-focus-within/lv1:opacity-100 group-focus-within/lv1:translate-x-0"
      : level === 1
      ? "group-hover/lv2:pointer-events-auto group-hover/lv2:visible group-hover/lv2:opacity-100 group-hover/lv2:translate-x-0 group-focus-within/lv2:pointer-events-auto group-focus-within/lv2:visible group-focus-within/lv2:opacity-100 group-focus-within/lv2:translate-x-0"
      : "group-hover/lv3:pointer-events-auto group-hover/lv3:visible group-hover/lv3:opacity-100 group-hover/lv3:translate-x-0 group-focus-within/lv3:pointer-events-auto group-focus-within/lv3:visible group-focus-within/lv3:opacity-100 group-focus-within/lv3:translate-x-0";

  return (
    <ul className="flex flex-col items-stretch py-3 px-3 space-y-2">
      {items.map((it) => {
        const hasKids = Array.isArray(it.children) && it.children.length > 0;

        // শুধুমাত্র যাদের children আছে তাদের group বানাই
        const itemGroupClass = hasKids
          ? level === 0
            ? "group/lv1"
            : level === 1
            ? "group/lv2"
            : "group/lv3"
          : "";

        return (
          <li key={it.label} className={`relative ${itemGroupClass}`}>
            <Link
              href={it.href || "#"}
              className={[
                "flex items-center justify-between",
                "px-1 py-2 text-sm xl:text-[13px] font-montserrat font-semibold",
                "text-[#76787F] hover:text-gray-900 hover:bg-gray-50 uppercase",
              ].join(" ")}
            >
              <span>{it.label}</span>
              {hasKids && (
                <span aria-hidden className="ml-3 text-xs text-gray-400">
                  <MdKeyboardArrowRight />
                </span>
              )}
            </Link>

            {hasKids && (
              <div className={`${flyoutBase} ${hoverClasses}`}>
                <div className="bg-white w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-gray-200 border-t-blue-400">
                  <SubMenu items={it.children} level={level + 1} />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function DesktopNav() {
  return (
    <nav
      className="hidden lg:block text-[#76787F] font-semibold font-montserrat"
      aria-label="Primary"
      itemType="https://schema.org/SiteNavigationElement"
      itemScope
    >
      <ul className="flex items-center space-x-14">
        {NAV.map((item, idx) => (
          <li key={item.label} className="relative">
            {!item.hasCaret ? (
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-[13px] tracking-wide uppercase hover:text-gray-900"
                aria-current={idx === 0 ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <div className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[13px] tracking-wide uppercase group-hover:text-gray-900"
                >
                  {item.label}
                  <span aria-hidden className="text-gray-400 -mr-1">▾</span>
                </Link>

                {/* root dropdown */}
                <div
                  className={[
                    "absolute left-0 top-full z-20",
                    "pointer-events-none invisible opacity-0 translate-y-2",
                    "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:translate-y-0",
                    "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0",
                    "transition",
                  ].join(" ")}
                >
                  <div className="bg-white w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-gray-200 border-t-blue-400">
                    <SubMenu items={item.children || []} />
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

