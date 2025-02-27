import Link from "next/link";

const sections = [
  { title: "About", src: "/about-bg.png", href: "/about" },
  { title: "Portfolio", src: "/portfolio-bg.png", href: "/portfolio" },
  { title: "Resume", src: "/resume-bg.png", href: "/resume" },
  { title: "Contact", src: "/contact-bg.png", href: "/contact" },
];

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-10 h-[600px] bg-slate-600">
      {sections.map((item, index) => (
        <Link key={index} href={item.href}>
          <div
            className="relative group h-full rounded-lg overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default HeroSection;