import AboutMeBanner from "@/components/AboutMeBanner";
import Head from "next/head";

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>O mnie</title>
      </Head>
      <AboutMeBanner />
      <div className="container mx-auto -mt-20 xs:mt-4">
        <div className="flex flex-wrap-reverse">
          <div className="w-full px-8 mt-4 xl:w-1/2 xl:mt-0">
            <img src="/assets/desk.webp" alt="" />
          </div>
          <div className="w-full px-8 xl:w-1/2">
            <h2 className="mb-10 text-6xl font-semibold uppercase xs:text-2xl font-helvetica line">
              O mnie
            </h2>
            <p className="text-2xl font-light xs:text-lg">
              Od 2018 roku spełniam się zawodowo jako Frontend Developer. Lubię
              pisać w Javascript, a moim ulubionym frameworkiem do budowania UI
              jest React.js.
            </p>
            <br />
            <p className="text-2xl font-light xs:text-lg">
              Założyłem bloga by dzielić się swoimi doświadczeniami z osobami
              pragnącymi zgłębiać wiedzę programowania w Javascript oraz dla
              siebie, by z łatwością powracać do już posiadanej wiedzy.
            </p>
            <br />
            <p className="text-2xl font-light xs:text-lg">
              Obiecuję, że na moim blogu znajdziesz dużo wartościowych
              informacji, które będziesz mógł sprawnie wykorzystać w praktyce.
            </p>
            <br />
            <p className="text-2xl font-light xs:text-lg">
              Jeżeli chciałbyś się zemną skontaktować, lub interesuje Ciebie
              współpraca to napisz do mnie na adres{" "}
              <span
                className="font-semibold cursor-pointer"
                onClick={(e) => {
                  window.location = "mailto:m.bednarczyk.1991@gmail.com";
                  e.preventDefault();
                }}
              >
                m.bednarczyk.1991@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
