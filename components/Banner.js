import Emoji from "@/components/Emoji";

export default function HomepageHeader() {
  return (
    <div className="flex wrapper">
      <div className="z-10 w-4/12 bg-blue-500 rounded-full -top-10 -left-60 h-4/6 base"></div>
      <div className="z-10 w-4/12 bg-blue-500 rounded-full -top-20 -right-40 h-4/6 base"></div>
      <div className="w-full h-full bg-indigo-600 rounded -top-10 -left-40 base"></div>
      <div className="w-8/12 h-full bg-pink-400 rounded-full base -bottom-20 -right-40"></div>
      <div className="w-8/12 bg-yellow-400 rounded-full h-3/6 base -bottom-20 -left-60"></div>

      <div className="container flex justify-center w-full mx-auto">
        <div className="z-10 flex flex-col justify-center w-full font-semibold text-white uppercase lg:w-1/2 font-helvetica">
          <p className="text-2xl">Witaj na Frontreview!</p>
          <h1 className="-mx-2 lg:text-9xl text-7xl">Miejsce informacji</h1>
          <p className="text-5xl">Na temat Javascript</p>
        </div>

        <div className="relative z-10 justify-center hidden w-1/2 lg:flex">
          <div className="absolute flex items-center justify-center w-16 h-16 rounded-full left-40 glass -top-2">
            <Emoji symbol="💻" label="laptop" />
          </div>
          <div className="absolute flex items-center justify-center w-16 h-16 rounded-full right-20 glass top-10">
            <Emoji symbol="🔥" label="fire" />
          </div>
          <div className="absolute flex items-center justify-center w-16 h-16 rounded-full left-16 glass bottom-10">
            <Emoji symbol="⚛️" label="atom" />
          </div>
          <div className="absolute flex items-center justify-center h-24 rounded-lg -left-10 w-52 glass top-20">
            <p className="text-4xl font-semibold colorized font-satisfy right-to-center">
              Frontend
            </p>
          </div>
          <div className="absolute flex items-center justify-center h-24 rounded-lg bottom-5 right-10 w-52 glass">
            <p className="text-4xl font-semibold colorized left-to-center font-satisfy">
              Development
            </p>
          </div>
          <img
            src="/assets/macbook.webp"
            alt="macbook"
            className="object-contain p-6"
          />
        </div>
      </div>
    </div>
  );
}
