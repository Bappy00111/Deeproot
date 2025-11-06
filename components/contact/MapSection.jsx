export default function MapSection({ address, zoom = 10, title }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=${zoom}&output=embed&iwloc=near`;

  return (
    <section className="w-full bg-gray-50">
      <div className=" px-6 md:px-8 py-8 md:scroll-py-14">
        {/* <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-500">
          Have some questions? We love to hear from you.
        </p> */}

        <div className="mt-10 overflow-hidden  shadow">
          <iframe
            loading="lazy"
            src={src}
            title={title || address}
            aria-label={title || address}
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80  border-0 "
          />
        </div>
      </div>
    </section>
  );
}
