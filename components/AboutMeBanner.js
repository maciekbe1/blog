export default function AboutMeBanner() {
  return (
    <div
      style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 64%, 66% 78%, 0 64%)",
        height: "900px",
      }}
    >
      <div
        className="absolute w-full about-me__gradient"
        style={{ filter: "blur(60px)", height: "700px" }}
      ></div>
      <div className="container px-8 mx-auto">
        <div className="flex items-center">
          <div className="relative w-1/2">
            <h1 className="-mx-3 text-white font-helvetica about-me__title">
              <span className="font-light ">Maciej </span>
              <span className="font-bold">Bednarczyk</span>
            </h1>
            <h3 className="mt-4 text-6xl font-helvetica line">
              Frontend Developer
            </h3>
          </div>
          <div className="relative w-1/2" style={{ height: "650px" }}>
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
