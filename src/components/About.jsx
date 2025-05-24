import React from "react";
function About() {
  return (
    <div className="bg-black">
      <section>
        <img
          className="w-full h-auto"
          src="./imgs/page2.jpg"
          alt="About Banner"
        />
      </section>

      <div className="text-center text-white px-4">
        <div className="text-3xl sm:text-4xl font-bold uppercase border-b border-[#595b5b] pb-8 w-[80%] mx-auto my-8">
          Our Mission
        </div>
        <p className="w-[80%] mx-auto">
          At Activision, we strive to create the most iconic brands in gaming...
        </p>
      </div>

      <div className="text-center text-white px-4">
        <div className="text-3xl sm:text-4xl font-bold uppercase border-b border-[#595b5b] pb-8 w-[80%] mx-auto mt-20">
          Activate Your Future
        </div>

        <p className="pt-5 border-b border-[#595b5b] pb-8 w-[80%] mx-auto">
          We unite our global player community with epic entertainment...
        </p>

        <div className="text-3xl sm:text-4xl font-bold uppercase mt-20">
          Our Values
        </div>
      </div>

      <section className="flex flex-col items-center justify-center px-4">
        <img
          className="w-full max-w-4xl my-6"
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
          alt="Our Values"
        />
        <button
          type="button"
          className="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mb-8"
        >
          Learn More
        </button>
        <div className="text-center text-white text-3xl sm:text-4xl font-bold uppercase border-b border-[#595b5b] pb-8 w-[80%] mx-auto mt-8">
          Our Leadership Team
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 py-12 max-w-6xl mx-auto">
        {[
          {
            name: "Rob Kostich",
            title: "President",
            img: "rob-kostich.jpg",
          },
          {
            name: "Josh Taub",
            title: "Chief Operating Officer",
            img: "josh-taub.jpg",
          },
          {
            name: "Suzie Carr",
            title: "Chief People Officer",
            img: "suzie-carr.jpg",
          },
          {
            name: "Terri Durham",
            title: "SVP & General Counsel",
            img: "terri-durham.jpg",
          },
          {
            name: "David Stohl",
            title: "Head of Development, Call of Duty",
            img: "dave-stohl.jpg",
          },
          {
            name: "Pat Kelly",
            title: "Head of Creative, Call of Duty",
            img: "patt-kelly.jpg",
          },
          {
            name: "Tyler Bahl",
            title: "SVP, Head of Marketing",
            img: "tyler-bahl.jpg",
          },
          {
            name: "Natasha Tatarchuk",
            title: "SVP, Chief Technology Officer",
            img: "natasha.jpg",
          },
          {
            name: "Matt Cox",
            title: "GM, Call of Duty",
            img: "matt-cox.jpg",
          },
        ].map(({ name, title, img }) => (
          <div key={name} className="text-center">
            <img
              className="rounded-full  
                   w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
              src={`https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/${img}`}
              alt={name}
            />
            <div className="text-white font-bold mt-4">{name}</div>
            <div className="text-white">{title}</div>
          </div>
        ))}
      </div>
      <div className="bg-black min-h-screen text-white px-6 py-16">
        <h1 className="text-center text-4xl font-bold uppercase mb-12">
          Our Games
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-lg overflow-hidden shadow-md"
            >
              <img src={game.img} alt={game.title} className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-sm font-bold uppercase">{game.title}</h2>
                <p className="text-gray-400 text-xs mt-1">{game.num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-white text-3xl sm:text-4xl font-bold uppercase border-b border-[#595b5b] pb-3 w-[80%] mx-auto mt-8">
        Our Studios
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-7 justify-items-center w-[90%] mx-auto py-8">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png"
          alt="Treyarch"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png"
          alt="Infinity Ward"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png"
          alt="High Moon"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png"
          alt="Beenox"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png"
          alt="Sledgehammer"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png"
          alt="Raven"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png"
          alt="Toys for Bob"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png"
          alt="Shanghai Studio"
          className="max-w-[120px] object-contain"
        />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png"
          alt="Demonware"
          className="max-w-[120px] object-contain"
        />
      </div>
    </div>
  );
}

const games = [
  {
    title: "CALL OF DUTY BLACK OPS 6",
    num: "MATURE 17+",
    img: "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
  },
  {
    title: "CALL OF DUTY: WARZONE",
    num: "MATURE 17+",
    img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
  },
  {
    title: "CALL OF DUTY MODERN WARFARE III",
    num: "MATURE 17+",
    img: "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
  },
  {
    title: "CRASH TEAM RUMBLE",
    num: "EVERYONE 10+",
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
  },
  {
    title: "TONY HAWK'S™ PRO SKATER™ 1 + 2",
    num: "TEEN",
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
  },
  {
    title: "CALL OF DUTY: MOBILE",
    num: "MATURE 17+",
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
  },
  {
    title: "SEKIRO®: SHADOWS DIE TWICE",
    num: "MATURE 17+",
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
  },
  {
    title: "SPYRO® REIGNITED TRILOGY",
    num: "EVERYONE 10+",
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
  },
];

export default About;
