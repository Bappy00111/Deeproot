

const ContactInfo = () => {
  return (
    <section className="bg-white py-10 xl:py-14">
      <div className="app-container grid grid-cols-1 md:grid-cols-2 gap-10 text-left font-montserrat text-[#3a3a3a]">

        {/* Office Location */}
        <div className="">
          <h3 className="text-2xl font-extrabold  mb-2">
            Office Location
          </h3>
          <p className=" text-base leading-relaxed">
            Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia
          </p>
        </div>

        {/* Email Address */}
        <div>
          <h3 className="text-2xl font-extrabold  mb-2">
            Email Address
          </h3>
          <a
            href="mailto:office@deeproot.com.au"
            className="text-base hover:underline"
          >
            office@deeproot.com.au
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
