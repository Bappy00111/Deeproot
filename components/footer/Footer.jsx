
import Link from "next/link";

const Footer = () => {


  return (
    <footer className="bg-[#232428] text-gray-300">
      <div className="">
        {/* top */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 app-container">
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg xl:text-xl font-bold mb-5 font-sora tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm font-montserrat ">
              <li>
                <Link
                  href="/services/software-development"
                  className="hover:text-white transition"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-white transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="hover:text-white transition"
                >
                  Ecommerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Keep in touch */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg xl:text-xl font-bold mb-5  font-sora tracking-wide">
              Keep in touch
            </h3>
            <address className="not-italic space-y-2 text-sm leading-6 font-montserrat">
              <p>
                Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia
              </p>
              <p>Monday – Friday: 9am – 5pm</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+61405782992"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  +61 405782992
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:office@deeproot.com.au"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  office@deeproot.com.au
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* divider */}
        <hr className="border-t border-white/30" />

        {/* bottom */}
        <div className="py-6 lg:py-12 flex flex-col gap-3 md:flex-row text-center  md:text-left md:items-center md:justify-between text-[13px] app-container font-montserrat">
          <p className="text-gray-400">
            © 2025 Deeproot.com.au. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            Made by Deeproot Australia PTY LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
