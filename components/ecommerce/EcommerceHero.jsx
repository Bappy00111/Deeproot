// app/components/EcommerceHero.tsx
// Use the public URL for background images (don't import from /public)

export default function EcommerceHero() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section
        className="
    relative w-full
    app-container
    bg-fixed
    bg-gradient-to-b from-[#f5f5f5] to-[#e9eaec]
    bg-no-repeat
    bg-center
    bg-[length:180%_auto]         /* base (xs): বড়, center */
    sm:bg-[length:160%_auto]      /* sm */
    md:bg-right md:bg-[length:80%_auto]  /* md: ডানে, একটু ছোট */
    lg:bg-[length:65%_auto]       /* lg */
    xl:bg-[length:55%_auto]       /* xl */
  "
        style={{
          // ফাইল থাকলে: public/image/asset 4.png
          backgroundImage: "url('/image/asset%204.png')",
        }}
      >
        {/* চাইলে overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/0" />

        {/* content wrapper */}
        <div
          className="
      app-container
      relative
      flex
      items-start
      md:items-center
      md:min-h-[60vh]
      py-20
      md:py-16
    "
        >
          <div
            className="
        w-full
        md:w-1/2
        flex
        flex-col
        justify-start md:justify-center
        items-center md:items-start
        font-roboto
      "
          >
            <h1
              className="
          font-semibold leading-none text-[#22252f]
          text-[32px]
          sm:text-[40px]
          md:text-[52px]
          lg:text-[60px]
          xl:text-[64px]
          text-center md:text-left
        "
            >
              Ecommerce
              <br />
              Operations
              <br />
              Management
              <br />
              Service
            </h1>
          </div>
        </div>
      </section>



      {/* <Image height={500} width={500} src={heroImg} alt="" /> */}

      {/* BOTTOM TEXT BAR */}
      <section className="w-full font-montserrat">
        <div
          className="
            app-container
            py-10
            text-[15px]
            sm:text-base
            leading-relaxed
            text-[#8b8f99]
            font-normal
          "
        >
          Our team of ecommerce experts will manage all aspects of your
          business operations, provide 24/7 support with direct access via
          email/live chat, daily &amp; weekly scrum meetings to synchronize
          activities and create a plan for the following days.
        </div>
      </section>
    </div>
  );
}
