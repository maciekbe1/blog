export default function AboutMeBanner() {
  return (
    <div className="about-me__wrapper xs:hidden sm:hidden md:block">
      <div className="absolute w-full about-me__gradient"></div>
      <div className="container px-8 mx-auto about-me__container">
        <div className="flex items-center h-inherit">
          <div className="relative w-1/2">
            <h1 className="text-white font-helvetica about-me__title">
              <span className="font-light ">Maciej </span>
              <span className="font-bold">Bednarczyk</span>
            </h1>
            <h3 className="mt-4 lg:text-6xl md:text-3xl font-helvetica line">
              Frontend Developer
            </h3>
          </div>
          <div className="relative self-start w-1/2 about-image__wrapper">
            <img
              src="/assets/light.webp"
              alt=""
              className="w-3/4 mx-auto xs:hidden"
              style={{
                filter: "drop-shadow(28px 8px 30px #000)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
