// import Link from 'next/link';
// import Image from 'next/image';
// import { NAV } from './nav';
// import HeaderClient from './HeaderClient';

// export default async function HeaderServer() {
//   return (
//     <header
//       className=" z-50 bg-gray-50 border-t border-teal-700/60"
//       itemType="https://schema.org/WPHeader"
//       itemScope
//     >
//       <div className="app-container">
//         {/* এখানে আর justify-between নয়; ভেতরে গ্রুপ করে নিয়েছি */}
//         <div className="flex h-20 items-center">

//           {/* LEFT GROUP: Logo + Nav একসাথে */}
//           <div className="flex flex-1 items-center gap-12">
//             {/* Logo */}
//             <Link href="https://deeproot.com.au/" aria-label="Deeproot home" className="shrink-0">
//               <Image
//                 src="https://deeproot.com.au/wp-content/uploads/2025/02/transparent-logo-deeproot-120x44.png"
//                 alt="Deeproot.com.au"
//                 width={120}
//                 height={44}
//                 priority
//               />
//             </Link>

//             {/* Nav — লোগোর সাথে ইনলাইন */}
//             <nav
//               className="hidden lg:block"
//               aria-label="Primary"
//               itemType="https://schema.org/SiteNavigationElement"
//               itemScope
//             >
//               <ul className="flex items-center gap-8">
//                 {NAV.map((item, idx) => (
//                   <li key={item.label}>
//                     <Link
//                       href={item.href}
//                       className={[
//                         'inline-flex items-center gap-2 text-[13px] lg:text-[15px] tracking-wide uppercase',
//                         idx === 0 ? 'font-semibold text-gray-900' : 'text-gray-600 hover:text-gray-900',
//                       ].join(' ')}
//                       aria-current={idx === 0 ? 'page' : undefined}
//                     >
//                       {item.label}
//                       {item.hasCaret && <span aria-hidden className="text-gray-400 -mr-2">▾</span>}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* RIGHT: CTA */}
//           <div className="hidden lg:block">
//             <Link
//               href="https://deeproot.com.au/contact/"
//               className="uppercase tracking-widest text-[13px] lg:text-[15px] font-semibold text-blue-700
//                          rounded-sm border-2
//                          border-white px-6 py-2 hover:bg-white hover:shadow focus-visible:outline-none
//                          focus-visible:ring-2 focus-visible:ring-blue-500"
//               aria-label="Let's Talk"
//             >
//               LET&apos;S TALK
//             </Link>
//           </div>

//           {/* Mobile control (client) */}
//           <HeaderClient nav={NAV} />
//         </div>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { NAV } from "./nav";
import DesktopNav from "./DesktopNav";
import MobileNavItem from "./MobileNavItem";


export default async function Header() {
  return (
    <header
      className="relative z-50 bg-gray-50 border-b border-gray-200 "
      itemType="https://schema.org/WPHeader"
      itemScope
    >
      {/* এই wrapper-টা relative; নিচের absolute ড্রপডাউন header-এর একদম bottom-এ বসবে */}
      <div className="app-container">
        <div className="flex h-[88px] items-center">
          {/* LEFT GROUP */}
          <div className="flex flex-1 items-center gap-12">
            <Link href="/" aria-label="Deeproot home" className="shrink-0">
              <Image
                src="https://deeproot.com.au/wp-content/uploads/2025/02/transparent-logo-deeproot-120x44.png"
                alt="Deeproot.com.au"
                width={120}
                height={44}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <DesktopNav />
          </div>

          {/* RIGHT CTA */}
          <div className="hidden lg:block">
            <Link
              href="https://deeproot.com.au/contact/"
              className="uppercase tracking-widest text-[13px] lg:text-[16px] font-montserrat font-bold  text-blue-700
                         rounded-sm border-2 border-white px-6 py-2 hover:bg-white hover:shadow
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              LET&apos;S TALK
            </Link>
          </div>

          {/* Mobile controls */}
          <MobileNavItem nav={NAV} />
        </div>
      </div>
    </header>
  );
}

